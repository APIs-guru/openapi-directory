from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NestedFilters:
    r"""NestedFilters
    <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions of all filters to be included in the results returned from the <a>Search</a> API.</p> <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a specific channel name and <code>S3Uri</code> prefix, define the following filters:</p> <ul> <li> <p> <code>'{Name:\"InputDataConfig.ChannelName\", \"Operator\":\"Equals\", \"Value\":\"train\"}',</code> </p> </li> <li> <p> <code>'{Name:\"InputDataConfig.DataSource.S3DataSource.S3Uri\", \"Operator\":\"Contains\", \"Value\":\"mybucket/catdata\"}'</code> </p> </li> </ul>
    """
    
    filters: List[Filter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    nested_property_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NestedPropertyName') }})
    
