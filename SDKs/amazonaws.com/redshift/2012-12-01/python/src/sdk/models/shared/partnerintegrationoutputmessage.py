from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PartnerIntegrationOutputMessage:
    database_name: Optional[str] = field(default=None)
    partner_name: Optional[str] = field(default=None)
    
