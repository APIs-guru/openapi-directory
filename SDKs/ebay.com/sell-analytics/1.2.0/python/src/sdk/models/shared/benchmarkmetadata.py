from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BenchmarkMetadata:
    r"""BenchmarkMetadata
    This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.
    """
    
    average: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    
