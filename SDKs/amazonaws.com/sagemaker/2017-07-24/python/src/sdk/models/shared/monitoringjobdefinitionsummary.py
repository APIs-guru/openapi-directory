from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonitoringJobDefinitionSummary:
    r"""MonitoringJobDefinitionSummary
    Summary information about a monitoring job.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    monitoring_job_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringJobDefinitionArn') }})
    monitoring_job_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringJobDefinitionName') }})
    
