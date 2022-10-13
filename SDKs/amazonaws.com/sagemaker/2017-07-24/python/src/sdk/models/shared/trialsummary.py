from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import trialsource


@dataclass_json
@dataclass
class TrialSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trial_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialArn' }})
    trial_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialName' }})
    trial_source: Optional[trialsource.TrialSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialSource' }})
    
