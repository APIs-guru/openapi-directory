from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResponsePartitionKey:
    r"""ResponsePartitionKey
    If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. 
    """
    
    dimensions: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    
