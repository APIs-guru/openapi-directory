from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputParallelism:
    r"""InputParallelism
    Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html\">Configuring Application Input</a>. 
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    
