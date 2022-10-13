from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statement
from . import prompt
from . import codehook
from . import followupprompt
from . import fulfillmentactivity
from . import inputcontext
from . import kendraconfiguration
from . import outputcontext
from . import statement
from . import slot


@dataclass_json
@dataclass
class GetIntentResponse:
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    conclusion_statement: Optional[statement.Statement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusionStatement' }})
    confirmation_prompt: Optional[prompt.Prompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmationPrompt' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dialog_code_hook: Optional[codehook.CodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogCodeHook' }})
    follow_up_prompt: Optional[followupprompt.FollowUpPrompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followUpPrompt' }})
    fulfillment_activity: Optional[fulfillmentactivity.FulfillmentActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentActivity' }})
    input_contexts: Optional[List[inputcontext.InputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputContexts' }})
    kendra_configuration: Optional[kendraconfiguration.KendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraConfiguration' }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_contexts: Optional[List[outputcontext.OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIntentSignature' }})
    rejection_statement: Optional[statement.Statement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectionStatement' }})
    sample_utterances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    slots: Optional[List[slot.Slot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
