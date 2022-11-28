from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QualityQualityEnum(str, Enum):
    TWO_HUNDRED_AND_FORTYP = "240p"
    THREE_HUNDRED_AND_SIXTYP = "360p"
    FOUR_HUNDRED_AND_EIGHTYP = "480p"
    SEVEN_HUNDRED_AND_TWENTYP = "720p"
    ONE_THOUSAND_AND_EIGHTYP = "1080p"
    TWO_THOUSAND_ONE_HUNDRED_AND_SIXTYP = "2160p"

class QualityStatusEnum(str, Enum):
    WAITING = "waiting"
    ENCODING = "encoding"
    ENCODED = "encoded"
    FAILED = "failed"


@dataclass_json
@dataclass
class Quality:
    quality: Optional[QualityQualityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    status: Optional[QualityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
