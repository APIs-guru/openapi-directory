from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchEvaluateGeofencesError:
    r"""BatchEvaluateGeofencesError
    Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
    """
    
    device_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    error: BatchItemError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    sample_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
