from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeAccountAssignmentDeletionStatusRequest:
    account_assignment_deletion_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAssignmentDeletionRequestId') }})
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    
