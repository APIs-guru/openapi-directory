from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResolverQueryLogConfigAssociation:
    r"""ResolverQueryLogConfigAssociation
    In the response to an <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html\">AssociateResolverQueryLogConfig</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html\">DisassociateResolverQueryLogConfig</a>, <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html\">GetResolverQueryLogConfigAssociation</a>, or <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html\">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime') }})
    error: Optional[ResolverQueryLogConfigAssociationErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    resolver_query_log_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfigId') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    status: Optional[ResolverQueryLogConfigAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
