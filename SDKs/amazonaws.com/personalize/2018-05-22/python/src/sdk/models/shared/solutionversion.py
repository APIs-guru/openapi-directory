from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import solutionconfig
from . import trainingmode_enum
from . import tunedhpoparams


@dataclass_json
@dataclass
class SolutionVersion:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetGroupArn' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performAutoML' }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performHPO' }})
    recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeArn' }})
    solution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionArn' }})
    solution_config: Optional[solutionconfig.SolutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionConfig' }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    training_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingHours' }})
    training_mode: Optional[trainingmode_enum.TrainingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingMode' }})
    tuned_hpo_params: Optional[tunedhpoparams.TunedHpoParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunedHPOParams' }})
    
