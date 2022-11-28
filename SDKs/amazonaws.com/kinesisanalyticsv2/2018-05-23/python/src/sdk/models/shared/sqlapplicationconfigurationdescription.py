from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLApplicationConfigurationDescription:
    r"""SQLApplicationConfigurationDescription
    Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
    """
    
    input_descriptions: Optional[List[InputDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDescriptions') }})
    output_descriptions: Optional[List[OutputDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDescriptions') }})
    reference_data_source_descriptions: Optional[List[ReferenceDataSourceDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSourceDescriptions') }})
    
