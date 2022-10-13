from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribePermissionSetProvisioningStatusRequest:
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    provision_permission_set_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionPermissionSetRequestId' }})
    
