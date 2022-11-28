from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SolutionVersion:
    r"""SolutionVersion
    An object that provides information about a specific version of a <a>Solution</a>.
    """
    
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performAutoML') }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performHPO') }})
    recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeArn') }})
    solution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionArn') }})
    solution_config: Optional[SolutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionConfig') }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    training_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingHours') }})
    training_mode: Optional[TrainingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingMode') }})
    tuned_hpo_params: Optional[TunedHpoParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunedHPOParams') }})
    
