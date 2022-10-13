from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import trialcomponentsource


@dataclass_json
@dataclass
class TrialComponentSimpleSummary:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trial_component_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentArn' }})
    trial_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentName' }})
    trial_component_source: Optional[trialcomponentsource.TrialComponentSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentSource' }})
    
