from dataclasses import dataclass, field
from typing import Enum,List

class FirewallDomainListStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    COMPLETE_IMPORT_FAILED = "COMPLETE_IMPORT_FAILED"
    IMPORTING = "IMPORTING"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

