from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PrepareTransactionRequestBodyVariationEnum(str, Enum):
    GSB = "gsb"
    ERZEUGUNG = "erzeugung"
    EIGENSTROM = "eigenstrom"
    CO2 = "co2"
    BAEUME = "baeume"


@dataclass_json
@dataclass
class PrepareTransactionRequestBody:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    variation: Optional[PrepareTransactionRequestBodyVariationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variation' }})
    

@dataclass
class PrepareTransactionRequest:
    request: PrepareTransactionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PrepareTransactionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
