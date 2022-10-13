from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import launchprofilestate_enum
from . import launchprofilestatuscode_enum
from . import streamconfiguration


@dataclass_json
@dataclass
class LaunchProfile:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ec2_subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SubnetIds' }})
    launch_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileId' }})
    launch_profile_protocol_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileProtocolVersions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[launchprofilestate_enum.LaunchProfileStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_code: Optional[launchprofilestatuscode_enum.LaunchProfileStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    stream_configuration: Optional[streamconfiguration.StreamConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamConfiguration' }})
    studio_component_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentIds' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
