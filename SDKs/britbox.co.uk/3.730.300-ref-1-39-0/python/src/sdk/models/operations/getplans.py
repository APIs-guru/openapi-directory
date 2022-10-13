from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPlansQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlansRequest:
    query_params: GetPlansQueryParams = field(default=None)
    

@dataclass
class GetPlansResponse:
    bt_plans: Optional[shared.BtPlans] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
