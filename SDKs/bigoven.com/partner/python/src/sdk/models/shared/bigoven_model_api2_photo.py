from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api2_userinfotinyx


@dataclass_json
@dataclass
class BigOvenModelApi2Photo:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Caption' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    image_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageID' }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPrimary' }})
    max_image_square: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxImageSquare' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhotoUrl' }})
    poster: Optional[bigoven_model_api2_userinfotinyx.BigOvenModelApi2UserInfoTinyx] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Poster' }})
    
