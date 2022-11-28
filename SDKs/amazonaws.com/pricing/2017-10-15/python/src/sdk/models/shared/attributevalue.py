from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttributeValue:
    r"""AttributeValue
    The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute.
    """
    
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
