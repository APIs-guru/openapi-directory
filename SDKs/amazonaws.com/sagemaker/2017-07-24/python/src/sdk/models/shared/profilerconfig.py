from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProfilerConfig:
    r"""ProfilerConfig
    Configuration information for Debugger system monitoring, framework profiling, and storage paths.
    """
    
    s3_output_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    profiling_interval_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilingIntervalInMilliseconds') }})
    profiling_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilingParameters') }})
    
