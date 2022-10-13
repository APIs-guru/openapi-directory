from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeForTaggingEnum(str, Enum):
    DOCUMENT = "Document"
    MANAGED_INSTANCE = "ManagedInstance"
    MAINTENANCE_WINDOW = "MaintenanceWindow"
    PARAMETER = "Parameter"
    PATCH_BASELINE = "PatchBaseline"
    OPS_ITEM = "OpsItem"
    OPS_METADATA = "OpsMetadata"

