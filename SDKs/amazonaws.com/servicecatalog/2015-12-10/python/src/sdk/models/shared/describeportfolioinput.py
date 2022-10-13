from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribePortfolioInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    
