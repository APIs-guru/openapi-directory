from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import appspecification
from . import experimentconfig
from . import networkconfig
from . import processinginput
from . import processingjobstatus_enum
from . import processingoutputconfig
from . import processingresources
from . import processingstoppingcondition


@dataclass_json
@dataclass
class DescribeProcessingJobResponse:
    app_specification: appspecification.AppSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppSpecification' }})
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobArn' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    exit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExitMessage' }})
    experiment_config: Optional[experimentconfig.ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentConfig' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitoring_schedule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleArn' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfig' }})
    processing_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    processing_inputs: Optional[List[processinginput.ProcessingInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingInputs' }})
    processing_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobArn' }})
    processing_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobName' }})
    processing_job_status: processingjobstatus_enum.ProcessingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobStatus' }})
    processing_output_config: Optional[processingoutputconfig.ProcessingOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingOutputConfig' }})
    processing_resources: processingresources.ProcessingResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingResources' }})
    processing_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: Optional[processingstoppingcondition.ProcessingStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    training_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobArn' }})
    
