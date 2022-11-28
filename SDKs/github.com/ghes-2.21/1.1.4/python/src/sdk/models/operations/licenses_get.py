from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicensesGetPathParams:
    license: str = field(metadata={'path_param': { 'field_name': 'license', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicensesGetRequest:
    path_params: LicensesGetPathParams = field()
    

@dataclass
class LicensesGetResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    license: Optional[shared.License] = field(default=None)
    
