from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import userprofilestatus_enum
from . import usersettings


@dataclass_json
@dataclass
class DescribeUserProfileResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    home_efs_file_system_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeEfsFileSystemUid' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    single_sign_on_user_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleSignOnUserIdentifier' }})
    single_sign_on_user_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleSignOnUserValue' }})
    status: Optional[userprofilestatus_enum.UserProfileStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    user_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileArn' }})
    user_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    user_settings: Optional[usersettings.UserSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSettings' }})
    
