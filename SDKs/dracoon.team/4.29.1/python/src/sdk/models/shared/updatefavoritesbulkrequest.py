from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateFavoritesBulkRequest:
    r"""UpdateFavoritesBulkRequest
    Request model for updating favorites
    """
    
    is_favorite: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFavorite') }})
    object_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    
