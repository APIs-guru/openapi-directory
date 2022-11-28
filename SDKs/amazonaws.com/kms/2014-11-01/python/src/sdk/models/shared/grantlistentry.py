from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrantListEntry:
    r"""GrantListEntry
    Contains information about a grant.
    """
    
    constraints: Optional[GrantConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Constraints') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantId') }})
    grantee_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteePrincipal') }})
    issuing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuingAccount') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    operations: Optional[List[GrantOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    retiring_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetiringPrincipal') }})
    
