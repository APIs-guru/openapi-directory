from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JSONMappingParameters:
    r"""JSONMappingParameters
    For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
    """
    
    record_row_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordRowPath') }})
    
