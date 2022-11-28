from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPublicKeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPublicKeysIDRequestBody:
    title: str = field(metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclass
class PatchPublicKeysIDRequest:
    path_params: PatchPublicKeysIDPathParams = field()
    request: PatchPublicKeysIDRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchPublicKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    public_key_entity: Optional[shared.PublicKeyEntity] = field(default=None)
    
