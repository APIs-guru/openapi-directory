from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsDynamoDbTableRestoreSummary:
    restore_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreDateTime' }})
    restore_in_progress: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreInProgress' }})
    source_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackupArn' }})
    source_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTableArn' }})
    
