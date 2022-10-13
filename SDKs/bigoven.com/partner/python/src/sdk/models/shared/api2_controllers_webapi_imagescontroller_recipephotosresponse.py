from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api2_photo


@dataclass_json
@dataclass
class Api2ControllersWebAPIImagesControllerRecipePhotosResponse:
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultCount' }})
    results: Optional[List[bigoven_model_api2_photo.BigOvenModelApi2Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    
