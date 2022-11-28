from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateConstraintInput:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    parameters: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    portfolio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
