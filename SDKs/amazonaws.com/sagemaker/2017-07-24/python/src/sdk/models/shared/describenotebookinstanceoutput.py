from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstanceacceleratortype_enum
from . import directinternetaccess_enum
from . import instancetype_enum
from . import notebookinstancestatus_enum
from . import rootaccess_enum


@dataclass_json
@dataclass
class DescribeNotebookInstanceOutput:
    accelerator_types: Optional[List[notebookinstanceacceleratortype_enum.NotebookInstanceAcceleratorTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorTypes' }})
    additional_code_repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalCodeRepositories' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_code_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultCodeRepository' }})
    direct_internet_access: Optional[directinternetaccess_enum.DirectInternetAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectInternetAccess' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    instance_type: Optional[instancetype_enum.InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkInterfaceId' }})
    notebook_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceArn' }})
    notebook_instance_lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigName' }})
    notebook_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceName' }})
    notebook_instance_status: Optional[notebookinstancestatus_enum.NotebookInstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceStatus' }})
    platform_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformIdentifier' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    root_access: Optional[rootaccess_enum.RootAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootAccess' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    volume_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSizeInGB' }})
    
