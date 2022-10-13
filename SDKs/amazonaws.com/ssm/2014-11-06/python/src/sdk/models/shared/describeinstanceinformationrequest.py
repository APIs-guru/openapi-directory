from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceinformationstringfilter
from . import instanceinformationfilter


@dataclass_json
@dataclass
class DescribeInstanceInformationRequest:
    filters: Optional[List[instanceinformationstringfilter.InstanceInformationStringFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    instance_information_filter_list: Optional[List[instanceinformationfilter.InstanceInformationFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceInformationFilterList' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
