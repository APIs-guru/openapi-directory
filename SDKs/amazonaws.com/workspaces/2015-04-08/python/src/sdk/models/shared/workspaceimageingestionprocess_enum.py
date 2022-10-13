from dataclasses import dataclass, field
from typing import Enum

class WorkspaceImageIngestionProcessEnum(str, Enum):
    BYOL_REGULAR = "BYOL_REGULAR"
    BYOL_GRAPHICS = "BYOL_GRAPHICS"
    BYOL_GRAPHICSPRO = "BYOL_GRAPHICSPRO"
    BYOL_REGULAR_WSP = "BYOL_REGULAR_WSP"

