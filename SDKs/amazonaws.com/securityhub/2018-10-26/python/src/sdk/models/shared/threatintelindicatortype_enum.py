from dataclasses import dataclass, field
from typing import Enum

class ThreatIntelIndicatorTypeEnum(str, Enum):
    DOMAIN = "DOMAIN"
    EMAIL_ADDRESS = "EMAIL_ADDRESS"
    HASH_MD5 = "HASH_MD5"
    HASH_SHA1 = "HASH_SHA1"
    HASH_SHA256 = "HASH_SHA256"
    HASH_SHA512 = "HASH_SHA512"
    IPV4_ADDRESS = "IPV4_ADDRESS"
    IPV6_ADDRESS = "IPV6_ADDRESS"
    MUTEX = "MUTEX"
    PROCESS = "PROCESS"
    URL = "URL"

