from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceaccesscontrolattributeconfiguration
from . import instanceaccesscontrolattributeconfigurationstatus_enum


@dataclass_json
@dataclass
class DescribeInstanceAccessControlAttributeConfigurationResponse:
    instance_access_control_attribute_configuration: Optional[instanceaccesscontrolattributeconfiguration.InstanceAccessControlAttributeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceAccessControlAttributeConfiguration' }})
    status: Optional[instanceaccesscontrolattributeconfigurationstatus_enum.InstanceAccessControlAttributeConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    
