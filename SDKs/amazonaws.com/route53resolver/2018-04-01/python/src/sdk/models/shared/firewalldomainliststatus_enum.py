from dataclasses import dataclass, field
from enum import Enum

class FirewallDomainListStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    COMPLETE_IMPORT_FAILED = "COMPLETE_IMPORT_FAILED"
    IMPORTING = "IMPORTING"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

