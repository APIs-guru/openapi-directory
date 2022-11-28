from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ImagesUploadResponse:
    image: Optional[Image] = field(default=None)
    
