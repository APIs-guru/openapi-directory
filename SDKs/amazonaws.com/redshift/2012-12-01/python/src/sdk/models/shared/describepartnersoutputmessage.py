from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribePartnersOutputMessage:
    partner_integration_info_list: Optional[List[PartnerIntegrationInfo]] = field(default=None)
    
