from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SelfManagedEventSource:
    r"""SelfManagedEventSource
    The self-managed Apache Kafka cluster for your event source.
    """
    
    endpoints: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    
