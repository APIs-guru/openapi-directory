import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Monitors:
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

    
    def all_monitors(self) -> operations.AllMonitorsResponse:
        r"""All Monitors
        The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.
        
        The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/monitors"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AllMonitorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AllMonitors200ApplicationJSON])
                res.all_monitors_200_application_json_object = out

        return res

    
    def create_monitor(self, request: operations.CreateMonitorRequest) -> operations.CreateMonitorResponse:
        r"""Create Monitor
        This endpoint allows you to create a monitor.
        
        Some sample `cron` values are:
        
        | Frequency                  | Cron Pattern   |
        |-----------------------|----------------|
        | Every 5 minutes       | `*/5 * * * *`  |
        | Every 30 minutes     | `*/30 * * * *` |
        | Every Hour         | `0 */1 * * *`  |
        | Every 6 Hours      | `0 */6 * * *`  |
        | Every day at 5pm    | `0 17 * * *`   |
        | Every Monday at 12pm  | `0 12 * * MON` |
        | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
        
        Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 
        
        For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
        
        You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.
        
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/monitors"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMonitorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateMonitor200ApplicationJSON])
                res.create_monitor_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateMonitor400ApplicationJSON])
                res.create_monitor_400_application_json_object = out

        return res

    
    def delete_monitor(self, request: operations.DeleteMonitorRequest) -> operations.DeleteMonitorResponse:
        r"""Delete Monitor
        This endpoint can be used to delete an existing monitor using its `uid`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/monitors/{monitor_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMonitorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMonitor200ApplicationJSON])
                res.delete_monitor_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMonitor404ApplicationJSON])
                res.delete_monitor_404_application_json_object = out

        return res

    
    def run_a_monitor(self, request: operations.RunAMonitorRequest) -> operations.RunAMonitorResponse:
        r"""Run a Monitor
        This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/monitors/{monitor_uid}/run", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RunAMonitorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RunAMonitor200ApplicationJSON])
                res.run_a_monitor_200_application_json_object = out

        return res

    
    def single_monitor(self, request: operations.SingleMonitorRequest) -> operations.SingleMonitorResponse:
        r"""Single Monitor
        This endpoint fetches you basic information about the monitor using its `uid`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/monitors/{monitor_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SingleMonitorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleMonitor200ApplicationJSON])
                res.single_monitor_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleMonitor404ApplicationJSON])
                res.single_monitor_404_application_json_object = out

        return res

    
    def update_monitor(self, request: operations.UpdateMonitorRequest) -> operations.UpdateMonitorResponse:
        r"""Update Monitor
        This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.
        
        Some example `cron` values are:
        
        | Frequency                  | Cron Pattern   |
        |-----------------------|----------------|
        | Every 5 minutes       | `*/5 * * * *`  |
        | Every 30 minutes     | `*/30 * * * *` |
        | Every Hour         | `0 */1 * * *`  |
        | Every 6 Hours      | `0 */6 * * *`  |
        | Every day at 5pm    | `0 17 * * *`   |
        | Every Monday at 12pm  | `0 12 * * MON` |
        | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
        
        Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 
        
        For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/monitors/{monitor_uid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMonitorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateMonitor200ApplicationJSON])
                res.update_monitor_200_application_json_object = out

        return res

    