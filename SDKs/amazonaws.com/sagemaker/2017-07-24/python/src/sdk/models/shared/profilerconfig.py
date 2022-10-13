from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfilerConfig:
    profiling_interval_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilingIntervalInMilliseconds' }})
    profiling_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilingParameters' }})
    s3_output_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputPath' }})
    
