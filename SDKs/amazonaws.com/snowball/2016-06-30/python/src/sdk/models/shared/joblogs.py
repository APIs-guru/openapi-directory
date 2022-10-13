from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobLogs:
    job_completion_report_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobCompletionReportURI' }})
    job_failure_log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFailureLogURI' }})
    job_success_log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobSuccessLogURI' }})
    
