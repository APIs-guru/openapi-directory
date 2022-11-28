from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PersistentPreferredActivity:
    r"""PersistentPreferredActivity
    A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.
    """
    
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    receiver_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverActivity') }})
    
