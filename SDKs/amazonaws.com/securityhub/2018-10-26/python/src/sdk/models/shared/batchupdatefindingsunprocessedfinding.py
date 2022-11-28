from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdateFindingsUnprocessedFinding:
    r"""BatchUpdateFindingsUnprocessedFinding
    A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
    """
    
    error_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    finding_identifier: AwsSecurityFindingIdentifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingIdentifier') }})
    
