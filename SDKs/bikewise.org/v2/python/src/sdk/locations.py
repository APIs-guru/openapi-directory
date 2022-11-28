import requests
from sdk.models import operations
from . import utils

class Locations:
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

    
    def get_version_locations_format_(self, request: operations.GetVersionLocationsFormatRequest) -> operations.GetVersionLocationsFormatResponse:
        r"""Unpaginated geojson response
        <p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>
        
        <pre><code>{
          type: \"FeatureCollection\",
          features: [
            {
              type: \"Feature\",
              properties: {
              id: 4474199,
              type: \"Theft\",
              occurred_at: 1428536937
            },
              geometry: {
              type: \"Point\",
              coordinates: [ -122.6244177, 45.5164386 ]
            }
          }
        }
        </code></pre>
        
        <p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>
        
        <p><strong>Go forth and make maps!</strong></p>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionLocationsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_version_locations_markers_format_(self, request: operations.GetVersionLocationsMarkersFormatRequest) -> operations.GetVersionLocationsMarkersFormatResponse:
        r"""Unpaginated geojson response with simplestyled markers
        <p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href=\"https://github.com/mapbox/simplestyle-spec\">simplestyled markers</a> (<a href=\"https://www.mapbox.com/guides/markers/#simple-style\">mapbox styled markers</a>)</p>
        
        <p><strong>Go forth and make maps!</strong></p>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/locations/markers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionLocationsMarkersFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    