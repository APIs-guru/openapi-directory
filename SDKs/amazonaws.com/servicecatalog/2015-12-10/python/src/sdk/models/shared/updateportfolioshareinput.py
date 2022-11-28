from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdatePortfolioShareInput:
    portfolio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    organization_node: Optional[OrganizationNode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationNode') }})
    share_tag_options: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareTagOptions') }})
    
