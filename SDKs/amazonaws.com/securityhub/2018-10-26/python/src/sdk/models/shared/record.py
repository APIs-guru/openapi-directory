from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Record:
    r"""Record
    An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.
    """
    
    json_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonPath') }})
    record_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIndex') }})
    
