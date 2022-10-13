from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchBundlesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchBundlesIDRequestBody:
    clickwrap_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'clickwrap_id' }})
    code: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    expires_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    form_field_set_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'form_field_set_id' }})
    inbox_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'inbox_id' }})
    max_uses: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'max_uses' }})
    note: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'note' }})
    password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    paths: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'paths' }})
    preview_only: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'preview_only' }})
    require_registration: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'require_registration' }})
    require_share_recipient: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'require_share_recipient' }})
    

@dataclass
class PatchBundlesIDRequest:
    path_params: PatchBundlesIDPathParams = field(default=None)
    request: Optional[PatchBundlesIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchBundlesIDResponse:
    bundle_entity: Optional[shared.BundleEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
