from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReferenceDataSourceDescription:
    r"""ReferenceDataSourceDescription
    Describes the reference data source configured for an application.
    """
    
    reference_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    s3_reference_data_source_description: S3ReferenceDataSourceDescription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ReferenceDataSourceDescription') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    reference_schema: Optional[SourceSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceSchema') }})
    
