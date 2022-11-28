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
class ResolverRuleConfig:
    r"""ResolverRuleConfig
    In an <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html\">UpdateResolverRule</a> request, information about the changes that you want to make.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resolver_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpointId') }})
    target_ips: Optional[List[TargetAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIps') }})
    
