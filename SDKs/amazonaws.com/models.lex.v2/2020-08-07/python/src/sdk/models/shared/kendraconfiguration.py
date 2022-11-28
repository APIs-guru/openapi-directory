from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KendraConfiguration:
    r"""KendraConfiguration
    Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
    """
    
    kendra_index: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraIndex') }})
    query_filter_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFilterString') }})
    query_filter_string_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFilterStringEnabled') }})
    
