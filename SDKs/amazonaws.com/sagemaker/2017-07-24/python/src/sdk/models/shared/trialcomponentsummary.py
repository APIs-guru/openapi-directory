from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import usercontext
from . import trialcomponentstatus
from . import trialcomponentsource


@dataclass_json
@dataclass
class TrialComponentSummary:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[trialcomponentstatus.TrialComponentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    trial_component_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentArn' }})
    trial_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentName' }})
    trial_component_source: Optional[trialcomponentsource.TrialComponentSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentSource' }})
    
