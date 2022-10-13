from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sqlinjectionmatchtuple


@dataclass_json
@dataclass
class SQLInjectionMatchSet:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    sql_injection_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchSetId' }})
    sql_injection_match_tuples: List[sqlinjectionmatchtuple.SQLInjectionMatchTuple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchTuples' }})
    
