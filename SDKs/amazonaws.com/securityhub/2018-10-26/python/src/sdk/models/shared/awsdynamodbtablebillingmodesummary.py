from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsDynamoDbTableBillingModeSummary:
    r"""AwsDynamoDbTableBillingModeSummary
    Provides information about the billing for read/write capacity on the table.
    """
    
    billing_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingMode') }})
    last_update_to_pay_per_request_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateToPayPerRequestDateTime') }})
    
