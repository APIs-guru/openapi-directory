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
class StudioComponent:
    r"""StudioComponent
    A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    configuration: Optional[StudioComponentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ec2_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2SecurityGroupIds') }})
    initialization_scripts: Optional[List[StudioComponentInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationScripts') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script_parameters: Optional[List[ScriptParameterKeyValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptParameters') }})
    state: Optional[StudioComponentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_code: Optional[StudioComponentStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    studio_component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentId') }})
    subtype: Optional[StudioComponentSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[StudioComponentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    
