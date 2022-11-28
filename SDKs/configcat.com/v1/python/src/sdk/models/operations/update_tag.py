from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTagPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagRequests:
    update_tag_model: Optional[shared.UpdateTagModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_tag_model1: Optional[shared.UpdateTagModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_tag_model2: Optional[shared.UpdateTagModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateTagRequest:
    path_params: UpdateTagPathParams = field()
    request: UpdateTagRequests = field()
    

@dataclass
class UpdateTagResponse:
    content_type: str = field()
    status_code: int = field()
    tag_model: Optional[shared.TagModel] = field(default=None)
    tag_model_haljson: Optional[shared.TagModelHaljson] = field(default=None)
    
