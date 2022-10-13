from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import principaltype_enum


@dataclass_json
@dataclass
class AssociatePrincipalWithPortfolioInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    portfolio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortfolioId' }})
    principal_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalARN' }})
    principal_type: principaltype_enum.PrincipalTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalType' }})
    
