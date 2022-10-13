from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import workerconfigurationrevisionsummary


@dataclass_json
@dataclass
class WorkerConfigurationSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    latest_revision: Optional[workerconfigurationrevisionsummary.WorkerConfigurationRevisionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRevision' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    worker_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfigurationArn' }})
    
