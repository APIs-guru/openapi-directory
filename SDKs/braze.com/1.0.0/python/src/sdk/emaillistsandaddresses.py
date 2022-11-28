import requests
from sdk.models import operations
from . import utils

class EmailListsAndAddresses:
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

    
    def query_hard_bounced_emails(self, request: operations.QueryHardBouncedEmailsRequest) -> operations.QueryHardBouncedEmailsResponse:
        r"""Query Hard Bounced Emails
        This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
        
        > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
        
        ## Response
        
        Entries are listed in descending order.
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
          \"emails\": [
            {
              \"email\": \"example1@braze.com\",
              \"hard_bounced_at\": \"2016-08-25 15:24:32 +0000\"
            },
            {
              \"email\": \"example2@braze.com\",
              \"hard_bounced_at\": \"2016-08-24 17:41:58 +0000\"
            },
            {
              \"email\": \"example3@braze.com\",
              \"hard_bounced_at\": \"2016-08-24 12:01:13 +0000\"
            }
          ],
          \"message\": \"success\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/email/hard_bounces"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QueryHardBouncedEmailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def query_list_of_unsubscribed_email_addresses(self, request: operations.QueryListOfUnsubscribedEmailAddressesRequest) -> operations.QueryListOfUnsubscribedEmailAddressesResponse:
        r"""Query List of Unsubscribed Email Addresses
        Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
        
        > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/email/unsubscribes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QueryListOfUnsubscribedEmailAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    