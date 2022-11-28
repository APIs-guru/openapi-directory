from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetItemMediaFilesGuardedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemMediaFilesGuardedQueryParams:
    delivery: List[shared.MediaFileDeliveryEnum] = field(metadata={'query_param': { 'field_name': 'delivery', 'style': 'form', 'explode': False }})
    resolution: shared.MediaFileResolutionEnum = field(metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    formats: Optional[List[shared.MediaFileFormatsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'formats', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemMediaFilesGuardedSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItemMediaFilesGuardedRequest:
    path_params: GetItemMediaFilesGuardedPathParams = field()
    query_params: GetItemMediaFilesGuardedQueryParams = field()
    security: GetItemMediaFilesGuardedSecurity = field()
    

@dataclass
class GetItemMediaFilesGuardedResponse:
    content_type: str = field()
    status_code: int = field()
    media_files: Optional[List[shared.MediaFile]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
