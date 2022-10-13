from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicensesGetPathParams:
    license: str = field(default=None, metadata={'path_param': { 'field_name': 'license', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicensesGetRequest:
    path_params: LicensesGetPathParams = field(default=None)
    

@dataclass
class LicensesGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    license: Optional[shared.License] = field(default=None)
    
