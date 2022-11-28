from dataclasses import dataclass, field
from enum import Enum

class AssetLicenseNameEnum(str, Enum):
    STANDARD = "Standard"
    MULTISEAT = "Multiseat"
    UNLIMITED = "Unlimited"
    RESALE = "Resale"
    INDEMNIFICATION = "Indemnification"

