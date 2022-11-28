from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAs2KeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAs2KeysIDRequestBody:
    as2_partnership_name: str = field(metadata={'multipart_form': { 'field_name': 'as2_partnership_name' }})
    

@dataclass
class PatchAs2KeysIDRequest:
    path_params: PatchAs2KeysIDPathParams = field()
    request: PatchAs2KeysIDRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchAs2KeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    as2_key_entity: Optional[shared.As2KeyEntity] = field(default=None)
    
