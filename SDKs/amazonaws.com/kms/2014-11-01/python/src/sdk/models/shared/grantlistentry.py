from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import grantconstraints
from . import grantoperation_enum


@dataclass_json
@dataclass
class GrantListEntry:
    constraints: Optional[grantconstraints.GrantConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Constraints' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantId' }})
    grantee_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteePrincipal' }})
    issuing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuingAccount' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operations: Optional[List[grantoperation_enum.GrantOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operations' }})
    retiring_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetiringPrincipal' }})
    
