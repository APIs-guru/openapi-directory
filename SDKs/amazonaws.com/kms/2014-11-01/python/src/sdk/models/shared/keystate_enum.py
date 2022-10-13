from dataclasses import dataclass, field
from typing import Enum

class KeyStateEnum(str, Enum):
    CREATING = "Creating"
    ENABLED = "Enabled"
    DISABLED = "Disabled"
    PENDING_DELETION = "PendingDeletion"
    PENDING_IMPORT = "PendingImport"
    PENDING_REPLICA_DELETION = "PendingReplicaDeletion"
    UNAVAILABLE = "Unavailable"
    UPDATING = "Updating"

