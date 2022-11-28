from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TargetAddress:
    r"""TargetAddress
    In a <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html\">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ip') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    
