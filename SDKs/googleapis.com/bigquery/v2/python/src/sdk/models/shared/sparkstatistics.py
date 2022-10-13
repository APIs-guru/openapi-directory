from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sparklogginginfo


@dataclass_json
@dataclass
class SparkStatistics:
    endpoints: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    logging_info: Optional[sparklogginginfo.SparkLoggingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging_info' }})
    spark_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spark_job_id' }})
    spark_job_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spark_job_location' }})
    
