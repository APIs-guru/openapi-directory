from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeploymentSimple:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    original_environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_environment' }})
    performed_via_github_app: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performed_via_github_app' }})
    production_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'production_environment' }})
    repository_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_url' }})
    statuses_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses_url' }})
    task: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    transient_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transient_environment' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
