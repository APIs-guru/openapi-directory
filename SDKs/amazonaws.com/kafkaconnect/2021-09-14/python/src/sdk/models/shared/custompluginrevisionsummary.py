from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomPluginRevisionSummary:
    r"""CustomPluginRevisionSummary
    Details about the revision of a custom plugin.
    """
    
    content_type: Optional[CustomPluginContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_description: Optional[CustomPluginFileDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDescription') }})
    location: Optional[CustomPluginLocationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
