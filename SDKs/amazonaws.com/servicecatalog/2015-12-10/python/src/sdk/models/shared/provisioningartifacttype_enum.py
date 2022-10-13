from dataclasses import dataclass, field
from typing import Enum

class ProvisioningArtifactTypeEnum(str, Enum):
    CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE"
    MARKETPLACE_AMI = "MARKETPLACE_AMI"
    MARKETPLACE_CAR = "MARKETPLACE_CAR"

