import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OpenMeter:
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

    
    def om_activities(self) -> operations.OmActivitiesResponse:
        r"""Public shared smart meters installed in Germany and available for subservices and exploration.
        Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alternative/openmeter/activities"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OmActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Ommeters]])
                res.ommeters = out

        return res

    
    def om_meters(self) -> operations.OmMetersResponse:
        r"""Public shared smart meters installed in Germany and available for subservices and exploration.
        Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alternative/openmeter/meters"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OmMetersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Ommeters]])
                res.ommeters = out

        return res

    
    def om_readings(self) -> operations.OmReadingsResponse:
        r"""Public shared smart meters installed in Germany and available for subservices and exploration.
        Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alternative/openmeter/readings"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OmReadingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Ommeters]])
                res.ommeters = out

        return res

    