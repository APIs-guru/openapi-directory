from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestSoftwareVersionHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestSoftwareVersionRequest:
    headers: RequestSoftwareVersionHeaders = field(default=None)
    

@dataclass
class RequestSoftwareVersionResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    software_version_data: Optional[shared.SoftwareVersionData] = field(default=None)
    status_code: int = field(default=None)
    
