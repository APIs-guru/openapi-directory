from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import benchmarkmetadata


@dataclass_json
@dataclass
class MetricBenchmark:
    adjustment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustment' }})
    basis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basis' }})
    metadata: Optional[benchmarkmetadata.BenchmarkMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    
