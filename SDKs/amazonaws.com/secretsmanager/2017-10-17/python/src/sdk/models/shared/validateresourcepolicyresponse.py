from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validationerrorsentry


@dataclass_json
@dataclass
class ValidateResourcePolicyResponse:
    policy_validation_passed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyValidationPassed' }})
    validation_errors: Optional[List[validationerrorsentry.ValidationErrorsEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationErrors' }})
    
