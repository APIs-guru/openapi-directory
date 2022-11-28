from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Record:
    r"""Record
    Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.
    """
    
    json_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonPath') }})
    record_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordIndex') }})
    
