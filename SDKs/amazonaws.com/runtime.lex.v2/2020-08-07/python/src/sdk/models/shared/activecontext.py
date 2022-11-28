from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActiveContext:
    r"""ActiveContext
    <p>Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.</p> <p>Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is <code>order-fulfilled</code>, only intents that have <code>order-fulfilled</code> configured as a trigger are considered for follow up.</p>
    """
    
    context_attributes: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextAttributes') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    time_to_live: ActiveContextTimeToLive = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToLive') }})
    
