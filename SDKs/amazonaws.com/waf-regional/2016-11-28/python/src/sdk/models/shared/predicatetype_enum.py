from dataclasses import dataclass, field
from typing import Enum

class PredicateTypeEnum(str, Enum):
    IP_MATCH = "IPMatch"
    BYTE_MATCH = "ByteMatch"
    SQL_INJECTION_MATCH = "SqlInjectionMatch"
    GEO_MATCH = "GeoMatch"
    SIZE_CONSTRAINT = "SizeConstraint"
    XSS_MATCH = "XssMatch"
    REGEX_MATCH = "RegexMatch"

