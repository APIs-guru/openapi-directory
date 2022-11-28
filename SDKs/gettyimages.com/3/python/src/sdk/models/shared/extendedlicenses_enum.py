from dataclasses import dataclass, field
from enum import Enum

class ExtendedLicensesEnum(str, Enum):
    MULTISEAT = "Multiseat"
    UNLIMITED = "Unlimited"
    RESALE = "Resale"
    INDEMNIFICATION = "Indemnification"

