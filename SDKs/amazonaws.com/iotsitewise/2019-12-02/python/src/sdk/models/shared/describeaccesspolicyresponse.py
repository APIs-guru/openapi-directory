from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAccessPolicyResponse:
    access_policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyArn') }})
    access_policy_creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    access_policy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyId') }})
    access_policy_identity: Identity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyIdentity') }})
    access_policy_last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    access_policy_permission: PermissionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyPermission') }})
    access_policy_resource: Resource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyResource') }})
    
