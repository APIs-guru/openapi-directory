from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ModelsRecipesRecipeVideoResponse:
    inserted_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsertedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_primary_video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPrimaryVideo' }})
    media_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaId' }})
    vid_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VidId' }})
    
