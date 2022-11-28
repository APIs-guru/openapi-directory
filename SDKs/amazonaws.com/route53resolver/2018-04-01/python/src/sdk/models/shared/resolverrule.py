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
class ResolverRule:
    r"""ResolverRule
    For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html\">CreateResolverRule</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html\">DeleteResolverRule</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html\">GetResolverRule</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html\">ListResolverRules</a>, or <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html\">UpdateResolverRule</a> request.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModificationTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    resolver_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpointId') }})
    rule_type: Optional[RuleTypeOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleType') }})
    share_status: Optional[ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareStatus') }})
    status: Optional[ResolverRuleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    target_ips: Optional[List[TargetAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIps') }})
    
