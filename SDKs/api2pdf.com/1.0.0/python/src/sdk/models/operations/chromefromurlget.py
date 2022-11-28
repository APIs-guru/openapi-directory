from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChromeFromURLGetQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    output: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    

@dataclass
class ChromeFromURLGetSecurity:
    query_api_key: shared.SchemeQueryAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class ChromeFromURLGetRequest:
    query_params: ChromeFromURLGetQueryParams = field()
    security: ChromeFromURLGetSecurity = field()
    

@dataclass
class ChromeFromURLGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_response_failure: Optional[shared.APIResponseFailure] = field(default=None)
    api_response_success: Optional[shared.APIResponseSuccess] = field(default=None)
    chrome_from_url_get_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    
