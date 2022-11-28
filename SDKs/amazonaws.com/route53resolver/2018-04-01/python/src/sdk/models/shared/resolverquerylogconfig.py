from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResolverQueryLogConfig:
    r"""ResolverQueryLogConfig
    In the response to a <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html\">CreateResolverQueryLogConfig</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html\">DeleteResolverQueryLogConfig</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html\">GetResolverQueryLogConfig</a>, or <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html\">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    association_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationCount') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationArn') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    share_status: Optional[ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareStatus') }})
    status: Optional[ResolverQueryLogConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
