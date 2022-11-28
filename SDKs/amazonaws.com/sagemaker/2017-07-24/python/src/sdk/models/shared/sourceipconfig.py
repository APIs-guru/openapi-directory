from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceIPConfig:
    r"""SourceIPConfig
    A list of IP address ranges (<a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html\">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.
    """
    
    cidrs: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cidrs') }})
    
