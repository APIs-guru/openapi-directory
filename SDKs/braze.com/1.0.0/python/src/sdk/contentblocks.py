import requests
from sdk.models import operations
from . import utils

class ContentBlocks:
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

    
    def list_available_content_blocks(self, request: operations.ListAvailableContentBlocksRequest) -> operations.ListAvailableContentBlocksResponse:
        r"""List Available Content Blocks
        This endpoint will list existing Content Block information.
        
        ### Successful Response Properties
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR_REST_API_KEY
        {
          \"count\": \"integer\",
          \"content_blocks\": [
            {
              \"content_block_id\": \"string\",
              \"name\": \"string\",
              \"content_type\": \"html or text\",
              \"liquid_tag\": \"string\",
              \"inclusion_count\" : \"integer\",
              \"created_at\": \"time-in-iso\",
              \"last_edited\": \"time-in-iso\",
              \"tags\" : \"array of strings\"
            }
          ]
        }
        ```
        
        ### Possible Errors
        - `Modified after time is invalid.`
        The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
        
        - `Modified before time is invalid.`
        The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
        
        - `Modified after time must be earlier than or the same as modified before time.`
        
        - `Content Block number limit is invalid.`
        The `limit` parameter must be an integer (positive number) greater than 0.
        
        - `Content Block number limit must be greater than 0.`
        The `limit` parameter must be an integer (positive number) greater than 0.
        
        - `Content Block number limit exceeds maximum of 1000.`
        The `limit` parameter must be an integer (positive number) greater than 0.
        
        - `Offset is invalid.`
        The `offset` parameter must be an integer (positive number) greater than 0.
        
        - `Offset must be greater than 0.`
        The `offset` parameter must be an integer (positive number) greater than 0.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/content_blocks/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailableContentBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def see_content_block_information(self, request: operations.SeeContentBlockInformationRequest) -> operations.SeeContentBlockInformationResponse:
        r"""See Content Block Information
        This endpoint will call information for an existing Content Block.
        
        ### Successful Response Properties
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR_REST_API_KEY
        {
          \"content_block_id\": \"string\",
          \"name\": \"string\",
          \"content\": \"string\",
          \"description\": \"string\",
          \"content_type\": \"html or text\",
          \"tags\":  \"array of strings\",
          \"created_at\": \"time-in-iso\",
          \"last_edited\": \"time-in-iso\",
          \"inclusion_count\" : \"integer\",
          \"message\": \"success\"
        }
        ```
        
        ### Possible Errors
        - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
        
        - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
        
        - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
        
        - `Include Inclusion Data - error` - One of true or false is not provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/content_blocks/info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SeeContentBlockInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    