from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import currencyapimodel


@dataclass_json
@dataclass
class PaymentGatewayDetailsAPIModel:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    supported_currencies: Optional[List[currencyapimodel.CurrencyAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedCurrencies' }})
    
