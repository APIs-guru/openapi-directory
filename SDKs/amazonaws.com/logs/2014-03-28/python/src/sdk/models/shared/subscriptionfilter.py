from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import distribution_enum


@dataclass_json
@dataclass
class SubscriptionFilter:
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationArn' }})
    distribution: Optional[distribution_enum.DistributionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    filter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterName' }})
    filter_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterPattern' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
