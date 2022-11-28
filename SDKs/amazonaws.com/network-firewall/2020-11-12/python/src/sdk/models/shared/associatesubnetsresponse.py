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
class AssociateSubnetsResponse:
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallArn') }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallName') }})
    subnet_mappings: Optional[List[SubnetMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetMappings') }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    
