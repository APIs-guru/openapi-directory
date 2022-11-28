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
class Solution:
    r"""Solution
    An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
    """
    
    auto_ml_result: Optional[AutoMlResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoMLResult') }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_solution_version: Optional[SolutionVersionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestSolutionVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performAutoML') }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performHPO') }})
    recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeArn') }})
    solution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionArn') }})
    solution_config: Optional[SolutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionConfig') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
