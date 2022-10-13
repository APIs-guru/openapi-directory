from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetBundleRegistrationsQueryParams:
    bundle_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bundle_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBundleRegistrationsRequest:
    query_params: GetBundleRegistrationsQueryParams = field(default=None)
    

@dataclass
class GetBundleRegistrationsResponse:
    bundle_registration_entities: Optional[List[shared.BundleRegistrationEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
