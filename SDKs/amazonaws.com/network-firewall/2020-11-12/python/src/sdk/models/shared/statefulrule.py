from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import statefulaction_enum
from . import header
from . import ruleoption


@dataclass_json
@dataclass
class StatefulRule:
    action: statefulaction_enum.StatefulActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    header: header.Header = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Header' }})
    rule_options: List[ruleoption.RuleOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleOptions' }})
    
