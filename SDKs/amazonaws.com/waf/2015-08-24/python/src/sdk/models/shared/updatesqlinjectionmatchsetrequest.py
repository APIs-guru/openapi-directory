from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import sqlinjectionmatchsetupdate


@dataclass_json
@dataclass
class UpdateSQLInjectionMatchSetRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    sql_injection_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchSetId' }})
    updates: List[sqlinjectionmatchsetupdate.SQLInjectionMatchSetUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
