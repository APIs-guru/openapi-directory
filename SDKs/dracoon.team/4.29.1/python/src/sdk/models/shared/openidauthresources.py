from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import openidprovider


@dataclass_json
@dataclass
class OpenIDAuthResources:
    open_id_providers: List[openidprovider.OpenIDProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openIdProviders' }})
    
