from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TerminologyDataLocation:
    r"""TerminologyDataLocation
    The location of the custom terminology data.
    """
    
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    repository_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryType') }})
    
