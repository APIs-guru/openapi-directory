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
class Organization:
    r"""Organization
    Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    available_policy_types: Optional[List[PolicyTypeSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailablePolicyTypes') }})
    feature_set: Optional[OrganizationFeatureSetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureSet') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    master_account_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterAccountArn') }})
    master_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterAccountEmail') }})
    master_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterAccountId') }})
    
