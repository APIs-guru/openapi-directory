from dataclasses import dataclass, field
from typing import Enum

class ProvisioningArtifactGuidanceEnum(str, Enum):
    DEFAULT = "DEFAULT"
    DEPRECATED = "DEPRECATED"

