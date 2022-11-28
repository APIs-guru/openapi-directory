from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EndpointConfigSummary:
    r"""EndpointConfigSummary
    Provides summary information for an endpoint configuration.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_config_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigArn') }})
    endpoint_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigName') }})
    
