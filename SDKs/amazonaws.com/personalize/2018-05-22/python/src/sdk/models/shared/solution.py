from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import automlresult
from . import solutionversionsummary
from . import solutionconfig


@dataclass_json
@dataclass
class Solution:
    auto_ml_result: Optional[automlresult.AutoMlResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoMLResult' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetGroupArn' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_solution_version: Optional[solutionversionsummary.SolutionVersionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestSolutionVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performAutoML' }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performHPO' }})
    recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeArn' }})
    solution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionArn' }})
    solution_config: Optional[solutionconfig.SolutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionConfig' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
