from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSecretVersionStageRequest:
    secret_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    version_stage: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionStage') }})
    move_to_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MoveToVersionId') }})
    remove_from_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveFromVersionId') }})
    
