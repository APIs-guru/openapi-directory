from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceassociationstatusinfo


@dataclass_json
@dataclass
class DescribeInstanceAssociationsStatusResult:
    instance_association_status_infos: Optional[List[instanceassociationstatusinfo.InstanceAssociationStatusInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceAssociationStatusInfos' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
