from dataclasses import dataclass, field
from typing import Enum

class DkimSigningAttributesOriginEnum(str, Enum):
    AWS_SES = "AWS_SES"
    EXTERNAL = "EXTERNAL"

