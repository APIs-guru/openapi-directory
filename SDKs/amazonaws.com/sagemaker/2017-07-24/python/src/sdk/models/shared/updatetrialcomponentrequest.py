from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTrialComponentRequest:
    trial_component_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrialComponentName') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_artifacts: Optional[dict[str, TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputArtifacts') }})
    input_artifacts_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputArtifactsToRemove') }})
    output_artifacts: Optional[dict[str, TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputArtifacts') }})
    output_artifacts_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputArtifactsToRemove') }})
    parameters: Optional[dict[str, TrialComponentParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    parameters_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParametersToRemove') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[TrialComponentStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
