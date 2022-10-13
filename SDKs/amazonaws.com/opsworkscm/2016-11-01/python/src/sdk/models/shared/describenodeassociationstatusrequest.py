from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeNodeAssociationStatusRequest:
    node_association_status_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeAssociationStatusToken' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
