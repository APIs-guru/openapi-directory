from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociatePrincipalWithPortfolioInput:
    portfolio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    principal_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalARN') }})
    principal_type: PrincipalTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
