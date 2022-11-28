import requests
from sdk.models import operations
from . import utils

class EmailTemplates:
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

    
    def list_available_email_templates(self, request: operations.ListAvailableEmailTemplatesRequest) -> operations.ListAvailableEmailTemplatesResponse:
        r"""List Available Email Templates
        Use this endpoint to get a list of available templates in your Braze account.
        
        Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
        
        ### Successful Response Properties
        ```json
        {
          \"count\": number of templates returned
          \"templates\": [template with the following properties]:
            \"email_template_id\": (string) your email template's API Identifier,
            \"template_name\": (string) the name of your email template,
            \"created_at\": (string, in ISO 8601),
            \"updated_at\": (string, in ISO 8601),
            \"tags\": (array of strings) tags appended to the template
        }
          ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/templates/email/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailableEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def see_email_template_information(self, request: operations.SeeEmailTemplateInformationRequest) -> operations.SeeEmailTemplateInformationResponse:
        r"""See Email Template Information
        Use to get information on your email templates.
        
        Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
        
        ### Request Components
        - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/templates/email/info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SeeEmailTemplateInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    