from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import studiocomponentconfiguration
from . import studiocomponentinitializationscript
from . import scriptparameterkeyvalue
from . import studiocomponentstate_enum
from . import studiocomponentstatuscode_enum
from . import studiocomponentsubtype_enum
from . import studiocomponenttype_enum


@dataclass_json
@dataclass
class StudioComponent:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    configuration: Optional[studiocomponentconfiguration.StudioComponentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ec2_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SecurityGroupIds' }})
    initialization_scripts: Optional[List[studiocomponentinitializationscript.StudioComponentInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializationScripts' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script_parameters: Optional[List[scriptparameterkeyvalue.ScriptParameterKeyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptParameters' }})
    state: Optional[studiocomponentstate_enum.StudioComponentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_code: Optional[studiocomponentstatuscode_enum.StudioComponentStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    studio_component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentId' }})
    subtype: Optional[studiocomponentsubtype_enum.StudioComponentSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[studiocomponenttype_enum.StudioComponentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
