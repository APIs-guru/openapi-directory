from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedDataIdentifierSummary:
    r"""ManagedDataIdentifierSummary
    Provides information about a managed data identifier. For additional information, see <a href=\"https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html\">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
    """
    
    category: Optional[SensitiveDataItemCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
