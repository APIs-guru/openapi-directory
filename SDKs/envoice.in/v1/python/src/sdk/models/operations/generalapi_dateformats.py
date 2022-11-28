from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class GeneralAPIDateFormatsHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneralAPIDateFormatsRequest:
    headers: GeneralAPIDateFormatsHeaders = field()
    

@dataclass
class GeneralAPIDateFormatsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    general_api_date_formats_200_application_json_strings: Optional[List[str]] = field(default=None)
    general_api_date_formats_200_text_json_strings: Optional[List[str]] = field(default=None)
    
