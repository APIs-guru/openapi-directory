from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptiontype_enum
from . import putrecordsresultentry


@dataclass_json
@dataclass
class PutRecordsOutput:
    encryption_type: Optional[encryptiontype_enum.EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionType' }})
    failed_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedRecordCount' }})
    records: List[putrecordsresultentry.PutRecordsResultEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    
