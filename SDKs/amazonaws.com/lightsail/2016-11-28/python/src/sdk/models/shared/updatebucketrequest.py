from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBucketRequest:
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    access_rules: Optional[AccessRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessRules') }})
    readonly_access_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyAccessAccounts') }})
    versioning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioning') }})
    
