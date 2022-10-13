from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import sqlinjectionmatchtuple


@dataclass_json
@dataclass
class SQLInjectionMatchSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    sql_injection_match_tuple: sqlinjectionmatchtuple.SQLInjectionMatchTuple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchTuple' }})
    
