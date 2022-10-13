from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSecretVersionStageRequest:
    move_to_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MoveToVersionId' }})
    remove_from_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveFromVersionId' }})
    secret_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretId' }})
    version_stage: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionStage' }})
    
