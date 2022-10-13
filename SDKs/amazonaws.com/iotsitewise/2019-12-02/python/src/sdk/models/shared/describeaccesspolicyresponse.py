from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import identity
from . import permission_enum
from . import resource


@dataclass_json
@dataclass
class DescribeAccessPolicyResponse:
    access_policy_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyArn' }})
    access_policy_creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    access_policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyId' }})
    access_policy_identity: identity.Identity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyIdentity' }})
    access_policy_last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyLastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    access_policy_permission: permission_enum.PermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyPermission' }})
    access_policy_resource: resource.Resource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyResource' }})
    
