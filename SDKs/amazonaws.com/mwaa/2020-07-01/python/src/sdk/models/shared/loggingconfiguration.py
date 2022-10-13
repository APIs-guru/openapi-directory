from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import moduleloggingconfiguration
from . import moduleloggingconfiguration
from . import moduleloggingconfiguration
from . import moduleloggingconfiguration
from . import moduleloggingconfiguration


@dataclass_json
@dataclass
class LoggingConfiguration:
    dag_processing_logs: Optional[moduleloggingconfiguration.ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagProcessingLogs' }})
    scheduler_logs: Optional[moduleloggingconfiguration.ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchedulerLogs' }})
    task_logs: Optional[moduleloggingconfiguration.ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskLogs' }})
    webserver_logs: Optional[moduleloggingconfiguration.ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebserverLogs' }})
    worker_logs: Optional[moduleloggingconfiguration.ModuleLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerLogs' }})
    
