from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SQLInjectionMatchSetSummary:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    sql_injection_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchSetId' }})
    
