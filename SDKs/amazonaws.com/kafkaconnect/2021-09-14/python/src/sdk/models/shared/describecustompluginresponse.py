from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import custompluginstate_enum
from . import custompluginrevisionsummary


@dataclass_json
@dataclass
class DescribeCustomPluginResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_plugin_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPluginArn' }})
    custom_plugin_state: Optional[custompluginstate_enum.CustomPluginStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPluginState' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    latest_revision: Optional[custompluginrevisionsummary.CustomPluginRevisionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRevision' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
