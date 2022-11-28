from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestSoftwareVersionHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSoftwareVersionRequest:
    headers: RequestSoftwareVersionHeaders = field()
    

@dataclass
class RequestSoftwareVersionResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    software_version_data: Optional[shared.SoftwareVersionData] = field(default=None)
    
