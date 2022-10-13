from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import appnetworkaccesstype_enum
from . import authmode_enum
from . import usersettings
from . import domainstatus_enum


@dataclass_json
@dataclass
class DescribeDomainResponse:
    app_network_access_type: Optional[appnetworkaccesstype_enum.AppNetworkAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppNetworkAccessType' }})
    auth_mode: Optional[authmode_enum.AuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthMode' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_user_settings: Optional[usersettings.UserSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultUserSettings' }})
    domain_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainArn' }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    home_efs_file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeEfsFileSystemId' }})
    home_efs_file_system_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeEfsFileSystemKmsKeyId' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    single_sign_on_managed_application_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleSignOnManagedApplicationInstanceId' }})
    status: Optional[domainstatus_enum.DomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
