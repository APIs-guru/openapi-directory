from dataclasses import dataclass, field
from typing import Enum

class ProductTypeRequestEnum(str, Enum):
    EASYACCESS = "easyaccess"
    EDITORIALSUBSCRIPTION = "editorialsubscription"
    IMAGEPACK = "imagepack"
    PREMIUMACCESS = "premiumaccess"
    ROYALTYFREESUBSCRIPTION = "royaltyfreesubscription"

