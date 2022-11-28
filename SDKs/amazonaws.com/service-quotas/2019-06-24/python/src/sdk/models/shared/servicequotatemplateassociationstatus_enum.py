from dataclasses import dataclass, field
from enum import Enum

class ServiceQuotaTemplateAssociationStatusEnum(str, Enum):
    ASSOCIATED = "ASSOCIATED"
    DISASSOCIATED = "DISASSOCIATED"

