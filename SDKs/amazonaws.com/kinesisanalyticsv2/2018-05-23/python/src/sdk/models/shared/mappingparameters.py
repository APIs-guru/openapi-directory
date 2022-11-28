from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MappingParameters:
    r"""MappingParameters
    When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
    """
    
    csv_mapping_parameters: Optional[CsvMappingParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CSVMappingParameters') }})
    json_mapping_parameters: Optional[JSONMappingParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JSONMappingParameters') }})
    
