from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GeneralAPIDateFormatsHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class GeneralAPIDateFormatsRequest:
    headers: GeneralAPIDateFormatsHeaders = field(default=None)
    

@dataclass
class GeneralAPIDateFormatsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    general_api_date_formats_200_application_json_strings: Optional[List[str]] = field(default=None)
    general_api_date_formats_200_text_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
