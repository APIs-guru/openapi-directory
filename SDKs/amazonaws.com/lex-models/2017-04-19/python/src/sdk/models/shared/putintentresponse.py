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
class PutIntentResponse:
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    conclusion_statement: Optional[Statement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusionStatement') }})
    confirmation_prompt: Optional[Prompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationPrompt') }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createVersion') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dialog_code_hook: Optional[CodeHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogCodeHook') }})
    follow_up_prompt: Optional[FollowUpPrompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followUpPrompt') }})
    fulfillment_activity: Optional[FulfillmentActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentActivity') }})
    input_contexts: Optional[List[InputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContexts') }})
    kendra_configuration: Optional[KendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraConfiguration') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_contexts: Optional[List[OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntentSignature') }})
    rejection_statement: Optional[Statement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectionStatement') }})
    sample_utterances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    slots: Optional[List[Slot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
