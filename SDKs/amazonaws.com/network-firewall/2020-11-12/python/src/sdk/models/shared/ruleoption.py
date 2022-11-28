from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuleOption:
    r"""RuleOption
    Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.
    """
    
    keyword: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keyword') }})
    settings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    
