from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteSecretRequest:
    force_delete_without_recovery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForceDeleteWithoutRecovery' }})
    recovery_window_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecoveryWindowInDays' }})
    secret_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretId' }})
    
