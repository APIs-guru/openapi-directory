from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsDynamoDbTableRestoreSummary:
    r"""AwsDynamoDbTableRestoreSummary
    Information about the restore for the table.
    """
    
    restore_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreDateTime') }})
    restore_in_progress: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreInProgress') }})
    source_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupArn') }})
    source_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceTableArn') }})
    
