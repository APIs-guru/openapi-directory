from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteProvisionedProductPlanInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    ignore_errors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreErrors' }})
    plan_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanId' }})
    
