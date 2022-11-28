from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LicensesGetAllCommonlyUsedQueryParams:
    featured: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'featured', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class LicensesGetAllCommonlyUsedRequest:
    query_params: LicensesGetAllCommonlyUsedQueryParams = field()
    

@dataclass
class LicensesGetAllCommonlyUsedResponse:
    content_type: str = field()
    status_code: int = field()
    license_simples: Optional[List[shared.LicenseSimple]] = field(default=None)
    
