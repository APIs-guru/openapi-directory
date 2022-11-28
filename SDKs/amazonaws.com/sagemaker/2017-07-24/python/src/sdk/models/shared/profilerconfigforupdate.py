from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProfilerConfigForUpdate:
    r"""ProfilerConfigForUpdate
    Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and storage paths.
    """
    
    disable_profiler: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableProfiler') }})
    profiling_interval_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilingIntervalInMilliseconds') }})
    profiling_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilingParameters') }})
    s3_output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    
