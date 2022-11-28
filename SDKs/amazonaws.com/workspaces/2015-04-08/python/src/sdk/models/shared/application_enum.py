from dataclasses import dataclass, field
from enum import Enum

class ApplicationEnum(str, Enum):
    MICROSOFT_OFFICE_2016 = "Microsoft_Office_2016"
    MICROSOFT_OFFICE_2019 = "Microsoft_Office_2019"

