from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PrepareTransactionRequestBodyVariationEnum(str, Enum):
    GSB = "gsb"
    ERZEUGUNG = "erzeugung"
    EIGENSTROM = "eigenstrom"
    CO2 = "co2"
    BAEUME = "baeume"


@dataclass_json
@dataclass
class PrepareTransactionRequestBody:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    variation: Optional[PrepareTransactionRequestBodyVariationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variation') }})
    

@dataclass
class PrepareTransactionRequest:
    request: PrepareTransactionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PrepareTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    
