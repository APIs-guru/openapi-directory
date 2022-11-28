from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoggingConfiguration:
    r"""LoggingConfiguration
    Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
    """
    
    dag_processing_logs: Optional[ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagProcessingLogs') }})
    scheduler_logs: Optional[ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchedulerLogs') }})
    task_logs: Optional[ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskLogs') }})
    webserver_logs: Optional[ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebserverLogs') }})
    worker_logs: Optional[ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerLogs') }})
    
