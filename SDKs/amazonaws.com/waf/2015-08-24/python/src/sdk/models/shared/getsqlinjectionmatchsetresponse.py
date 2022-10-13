from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sqlinjectionmatchset


@dataclass_json
@dataclass
class GetSQLInjectionMatchSetResponse:
    sql_injection_match_set: Optional[sqlinjectionmatchset.SQLInjectionMatchSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchSet' }})
    
