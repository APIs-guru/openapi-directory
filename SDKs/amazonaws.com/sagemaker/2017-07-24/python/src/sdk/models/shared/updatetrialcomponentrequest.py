from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trialcomponentartifact
from . import trialcomponentartifact
from . import trialcomponentparametervalue
from . import trialcomponentstatus


@dataclass_json
@dataclass
class UpdateTrialComponentRequest:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_artifacts: Optional[dict[str, trialcomponentartifact.TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputArtifacts' }})
    input_artifacts_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputArtifactsToRemove' }})
    output_artifacts: Optional[dict[str, trialcomponentartifact.TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputArtifacts' }})
    output_artifacts_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputArtifactsToRemove' }})
    parameters: Optional[dict[str, trialcomponentparametervalue.TrialComponentParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    parameters_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParametersToRemove' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[trialcomponentstatus.TrialComponentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    trial_component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentName' }})
    
