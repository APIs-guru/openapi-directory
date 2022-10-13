from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import propertynamequery


@dataclass_json
@dataclass
class SuggestionQuery:
    property_name_query: Optional[propertynamequery.PropertyNameQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyNameQuery' }})
    
