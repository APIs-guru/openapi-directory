from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeNodeAssociationStatusRequest:
    node_association_status_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeAssociationStatusToken') }})
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    
