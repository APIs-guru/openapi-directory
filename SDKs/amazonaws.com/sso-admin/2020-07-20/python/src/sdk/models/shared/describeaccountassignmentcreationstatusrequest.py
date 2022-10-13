from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeAccountAssignmentCreationStatusRequest:
    account_assignment_creation_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountAssignmentCreationRequestId' }})
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    
