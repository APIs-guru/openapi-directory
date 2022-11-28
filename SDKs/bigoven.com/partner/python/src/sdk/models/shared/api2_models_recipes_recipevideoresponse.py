from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ModelsRecipesRecipeVideoResponse:
    r"""Api2ModelsRecipesRecipeVideoResponse
    DTO used to return the details of a recipe video
    """
    
    inserted_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsertedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_primary_video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPrimaryVideo') }})
    media_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaId') }})
    vid_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VidId') }})
    
