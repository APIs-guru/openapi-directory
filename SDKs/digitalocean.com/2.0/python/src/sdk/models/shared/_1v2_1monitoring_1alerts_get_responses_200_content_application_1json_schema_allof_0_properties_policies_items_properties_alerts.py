from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack:
    channel: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts:
    email: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    slack: List[Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack' }})
    
