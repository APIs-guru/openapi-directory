from dataclasses import dataclass, field
from enum import Enum

class ContactTypeEnum(str, Enum):
    PERSON = "PERSON"
    COMPANY = "COMPANY"
    ASSOCIATION = "ASSOCIATION"
    PUBLIC_BODY = "PUBLIC_BODY"
    RESELLER = "RESELLER"

