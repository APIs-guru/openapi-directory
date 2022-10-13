from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPublicKeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPublicKeysIDRequestBody:
    title: str = field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclass
class PatchPublicKeysIDRequest:
    path_params: PatchPublicKeysIDPathParams = field(default=None)
    request: PatchPublicKeysIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchPublicKeysIDResponse:
    content_type: str = field(default=None)
    public_key_entity: Optional[shared.PublicKeyEntity] = field(default=None)
    status_code: int = field(default=None)
    
