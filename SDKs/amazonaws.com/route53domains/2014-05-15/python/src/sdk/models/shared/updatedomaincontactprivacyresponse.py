from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateDomainContactPrivacyResponse:
    r"""UpdateDomainContactPrivacyResponse
    The UpdateDomainContactPrivacy response includes the following element.
    """
    
    operation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    
