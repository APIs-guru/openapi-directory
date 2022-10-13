from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sqlinjectionmatchset


@dataclass_json
@dataclass
class CreateSQLInjectionMatchSetResponse:
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    sql_injection_match_set: Optional[sqlinjectionmatchset.SQLInjectionMatchSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchSet' }})
    
