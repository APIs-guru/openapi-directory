from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataPrivacy:
    r"""DataPrivacy
    By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
    """
    
    child_directed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childDirected') }})
    
