import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Dates:
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

    
    def get_calendar_dates_(self, request: operations.GetCalendarDatesRequest) -> operations.GetCalendarDatesResponse:
        r"""
        Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
        events into one calendar.
        
        State and report type filtering is no longer available.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calendar-dates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCalendarDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarDatePage])
                res.calendar_date_page = out

        return res

    
    def get_calendar_dates_export_(self, request: operations.GetCalendarDatesExportRequest) -> operations.GetCalendarDatesExportResponse:
        r"""
        Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.
        
        Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
        events into one calendar.
        
        State filtering now applies to elections, reports and reporting periods.
        
        Presidential pre-primary report due dates are not shown on even years.
        Filers generally opt to file monthly rather than submit over 50 pre-primary election
        reports. All reporting deadlines are available at /reporting-dates/ for reference.
        
        This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
        that creates the calendar.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calendar-dates/export/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCalendarDatesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarDatePage])
                res.calendar_date_page = out

        return res

    
    def get_election_dates_(self, request: operations.GetElectionDatesRequest) -> operations.GetElectionDatesResponse:
        r"""
        FEC election dates since 1995.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/election-dates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetElectionDatesDefaultApplicationJSON])
                res.get_election_dates_default_application_json_object = out

        return res

    
    def get_reporting_dates_(self, request: operations.GetReportingDatesRequest) -> operations.GetReportingDatesResponse:
        r"""
        FEC election dates since 1995.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reporting-dates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportingDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportingDatesDefaultApplicationJSON])
                res.get_reporting_dates_default_application_json_object = out

        return res

    