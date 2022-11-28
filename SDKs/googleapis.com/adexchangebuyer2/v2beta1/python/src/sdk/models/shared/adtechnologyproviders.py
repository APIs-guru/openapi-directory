from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdTechnologyProviders:
    r"""AdTechnologyProviders
    Detected ad technology provider information.
    """
    
    detected_provider_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedProviderIds') }})
    has_unidentified_provider: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUnidentifiedProvider') }})
    
