from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppsListInstallationsQueryParams:
    outdated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outdated', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListInstallationsRequest:
    query_params: AppsListInstallationsQueryParams = field()
    

@dataclass
class AppsListInstallationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    installation_ghes_2s: Optional[List[shared.InstallationGhes2]] = field(default=None)
    
