import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Messaging:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_upcoming_scheduled_campaigns_and_canvases(self, request: operations.GetUpcomingScheduledCampaignsAndCanvasesRequest) -> operations.GetUpcomingScheduledCampaignsAndCanvasesResponse:
        r"""Get Upcoming Scheduled Campaigns and Canvases
        You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"scheduled_broadcasts\": [
              # Example Canvas
              {
                \"name\" => String,
                \"id\" => String,
                \"type\" => \"Canvas\",
                \"tags\" => [String tag names],
                \"next_send_time\" => \"YYYY-MM-DD HH:mm:ss\" (may also include time zone if not local/intelligent delivery)
                \"schedule_type\" => one of \"local_time_zones\", \"intelligent_delivery\", or the name of your company's time zone
              },
              # Example Campaign
              {
                \"name\" => String,
                \"id\" => String,
                \"type\" => \"Campaign\",
                \"tags\" => [String tag names],
                \"next_send_time\" => \"YYYY-MM-DD HH:mm:ss\" (may also include time zone if not local/intelligent delivery)
                \"schedule_type\" => one of \"local_time_zones\", \"intelligent_delivery\", or the name of your company's time zone
              },
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/messages/scheduled_broadcasts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpcomingScheduledCampaignsAndCanvasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def schedule_api_triggered_canvases(self, request: operations.ScheduleAPITriggeredCanvasesRequest) -> operations.ScheduleAPITriggeredCanvasesResponse:
        r"""Schedule API Triggered Canvases
        Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.
        
        This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.
        
        ### Request Parameters
        
        | Parameter | Required | Data Type | Description |
        | --------- | ---------| --------- | ----------- |
        |`canvas_id`|Required|String| See canvas identifier|
        |`send_id` | Optional | String | See send identifier |
        |`recipients` | Optional | Array of recipient objects | See recipients object |
        |`audience` | Optional | Connected audience object | See connected audience |
        |`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if \"recipients\" object is omitted |
        | `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties |
        | `schedule` | Required | Schedule object | See schedule object |
        
        ## Request Components
        - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
        - [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/)
        - [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/)
        - [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast)
        - [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/)
        - [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/canvas/trigger/schedule/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ScheduleAPITriggeredCanvasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    