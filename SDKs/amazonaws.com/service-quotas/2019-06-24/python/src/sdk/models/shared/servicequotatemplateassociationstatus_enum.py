from dataclasses import dataclass, field
from typing import Enum

class ServiceQuotaTemplateAssociationStatusEnum(str, Enum):
    ASSOCIATED = "ASSOCIATED"
    DISASSOCIATED = "DISASSOCIATED"

