from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntentSummary:
    r"""IntentSummary
    Summary information about an intent returned by the <code>ListIntents</code> operation.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    input_contexts: Optional[List[InputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContexts') }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentId') }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_contexts: Optional[List[OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntentSignature') }})
    
