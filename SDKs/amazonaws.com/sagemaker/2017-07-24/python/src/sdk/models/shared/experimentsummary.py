from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExperimentSummary:
    r"""ExperimentSummary
    A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    experiment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentArn') }})
    experiment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentName') }})
    experiment_source: Optional[ExperimentSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentSource') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
