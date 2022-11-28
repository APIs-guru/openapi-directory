from dataclasses import dataclass, field
from enum import Enum

class ProductTypeRequestEnum(str, Enum):
    EASYACCESS = "easyaccess"
    EDITORIALSUBSCRIPTION = "editorialsubscription"
    IMAGEPACK = "imagepack"
    PREMIUMACCESS = "premiumaccess"
    ROYALTYFREESUBSCRIPTION = "royaltyfreesubscription"

