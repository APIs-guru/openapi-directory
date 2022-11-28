from dataclasses import dataclass, field
from enum import Enum

class DkimSigningAttributesOriginEnum(str, Enum):
    AWS_SES = "AWS_SES"
    EXTERNAL = "EXTERNAL"

