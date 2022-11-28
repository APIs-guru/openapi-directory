from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeploymentSimple:
    r"""DeploymentSimple
    A deployment created as the result of an Actions check run from a workflow that references an environment
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    repository_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_url') }})
    statuses_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses_url') }})
    task: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    original_environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_environment') }})
    performed_via_github_app: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performed_via_github_app') }})
    production_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('production_environment') }})
    transient_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transient_environment') }})
    
