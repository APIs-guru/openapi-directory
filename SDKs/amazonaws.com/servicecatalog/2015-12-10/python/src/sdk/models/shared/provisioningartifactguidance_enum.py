from dataclasses import dataclass, field
from enum import Enum

class ProvisioningArtifactGuidanceEnum(str, Enum):
    DEFAULT = "DEFAULT"
    DEPRECATED = "DEPRECATED"

