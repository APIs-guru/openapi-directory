from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParallelDataDataLocation:
    r"""ParallelDataDataLocation
    The location of the most recent parallel data input file that was successfully imported into Amazon Translate.
    """
    
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    repository_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryType') }})
    
