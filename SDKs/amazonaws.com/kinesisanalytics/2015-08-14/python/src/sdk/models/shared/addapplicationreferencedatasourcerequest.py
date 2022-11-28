from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddApplicationReferenceDataSourceRequest:
    r"""AddApplicationReferenceDataSourceRequest
    <p/>
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    current_application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    reference_data_source: ReferenceDataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSource') }})
    
