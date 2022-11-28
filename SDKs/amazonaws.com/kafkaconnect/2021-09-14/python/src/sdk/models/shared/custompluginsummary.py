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
class CustomPluginSummary:
    r"""CustomPluginSummary
    A summary of the custom plugin.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_plugin_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPluginArn') }})
    custom_plugin_state: Optional[CustomPluginStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPluginState') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    latest_revision: Optional[CustomPluginRevisionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRevision') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
