from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trialcomponentartifact
from . import metadataproperties
from . import trialcomponentartifact
from . import trialcomponentparametervalue
from . import trialcomponentstatus
from . import tag


@dataclass_json
@dataclass
class CreateTrialComponentRequest:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_artifacts: Optional[dict[str, trialcomponentartifact.TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputArtifacts' }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    output_artifacts: Optional[dict[str, trialcomponentartifact.TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputArtifacts' }})
    parameters: Optional[dict[str, trialcomponentparametervalue.TrialComponentParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[trialcomponentstatus.TrialComponentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    trial_component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentName' }})
    
