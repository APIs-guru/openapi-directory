from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchedVersion:
    r"""SearchedVersion
    Models a single artifact from the result set returned when searching for artifacts.
    """
    
    created_by: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    created_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalId') }})
    state: ArtifactStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: ArtifactTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
