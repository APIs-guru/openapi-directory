from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import trialcomponentartifact
from . import usercontext
from . import metadataproperties
from . import trialcomponentmetricsummary
from . import trialcomponentartifact
from . import trialcomponentparametervalue
from . import trialcomponentsource
from . import trialcomponentstatus


@dataclass_json
@dataclass
class DescribeTrialComponentResponse:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_artifacts: Optional[dict[str, trialcomponentartifact.TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputArtifacts' }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    metrics: Optional[List[trialcomponentmetricsummary.TrialComponentMetricSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    output_artifacts: Optional[dict[str, trialcomponentartifact.TrialComponentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputArtifacts' }})
    parameters: Optional[dict[str, trialcomponentparametervalue.TrialComponentParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    source: Optional[trialcomponentsource.TrialComponentSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[trialcomponentstatus.TrialComponentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    trial_component_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentArn' }})
    trial_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentName' }})
    
