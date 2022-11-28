from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SparkStatistics:
    endpoints: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    logging_info: Optional[SparkLoggingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging_info') }})
    spark_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spark_job_id') }})
    spark_job_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spark_job_location') }})
    
