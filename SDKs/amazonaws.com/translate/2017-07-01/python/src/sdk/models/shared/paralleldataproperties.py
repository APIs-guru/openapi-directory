from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionkey
from . import paralleldatastatus_enum
from . import paralleldataconfig
from . import paralleldatastatus_enum


@dataclass_json
@dataclass
class ParallelDataProperties:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    encryption_key: Optional[encryptionkey.EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionKey' }})
    failed_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedRecordCount' }})
    imported_data_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportedDataSize' }})
    imported_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportedRecordCount' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_update_attempt_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestUpdateAttemptAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_update_attempt_status: Optional[paralleldatastatus_enum.ParallelDataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestUpdateAttemptStatus' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parallel_data_config: Optional[paralleldataconfig.ParallelDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelDataConfig' }})
    skipped_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkippedRecordCount' }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLanguageCode' }})
    status: Optional[paralleldatastatus_enum.ParallelDataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLanguageCodes' }})
    
