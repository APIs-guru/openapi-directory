from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DEFAULT = "DEFAULT"
    PRIMARY = "PRIMARY"
    ALIAS = "ALIAS"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    wildcard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wildcard' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
