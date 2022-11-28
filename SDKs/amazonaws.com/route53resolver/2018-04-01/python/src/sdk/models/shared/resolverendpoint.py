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
class ResolverEndpoint:
    r"""ResolverEndpoint
    In the response to a <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html\">CreateResolverEndpoint</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html\">DeleteResolverEndpoint</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html\">GetResolverEndpoint</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html\">ListResolverEndpoints</a>, or <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html\">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    direction: Optional[ResolverEndpointDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    host_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostVPCId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    ip_address_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressCount') }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModificationTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    status: Optional[ResolverEndpointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    
