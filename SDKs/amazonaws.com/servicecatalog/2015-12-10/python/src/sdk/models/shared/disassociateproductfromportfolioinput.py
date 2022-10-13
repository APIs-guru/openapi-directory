from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisassociateProductFromPortfolioInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    portfolio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    
