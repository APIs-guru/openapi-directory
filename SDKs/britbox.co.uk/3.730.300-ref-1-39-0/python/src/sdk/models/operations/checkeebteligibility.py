from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckEeBtEligibilityQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CheckEeBtEligibilitySecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckEeBtEligibilityRequest:
    query_params: CheckEeBtEligibilityQueryParams = field()
    security: CheckEeBtEligibilitySecurity = field()
    

@dataclass
class CheckEeBtEligibilityResponse:
    content_type: str = field()
    status_code: int = field()
    ee_bt_eligibility: Optional[shared.EeBtEligibility] = field(default=None)
    
