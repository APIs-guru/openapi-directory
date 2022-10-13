from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WkhtmltopdfFromURLGetQueryParams:
    output: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class WkhtmltopdfFromURLGetSecurity:
    query_api_key: shared.SchemeQueryAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class WkhtmltopdfFromURLGetRequest:
    query_params: WkhtmltopdfFromURLGetQueryParams = field(default=None)
    security: WkhtmltopdfFromURLGetSecurity = field(default=None)
    

@dataclass
class WkhtmltopdfFromURLGetResponse:
    api_response_failure: Optional[shared.APIResponseFailure] = field(default=None)
    api_response_success: Optional[shared.APIResponseSuccess] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wkhtmltopdf_from_url_get_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    
