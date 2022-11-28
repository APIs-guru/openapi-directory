from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutIntentPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutIntentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyConclusionStatement:
    r"""PutIntentRequestBodyConclusionStatement
    A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
    """
    
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyConfirmationPrompt:
    r"""PutIntentRequestBodyConfirmationPrompt
    Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
    """
    
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAttempts') }})
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyDialogCodeHook:
    r"""PutIntentRequestBodyDialogCodeHook
    Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
    """
    
    message_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageVersion') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyFollowUpPrompt:
    r"""PutIntentRequestBodyFollowUpPrompt
    A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
    """
    
    prompt: Optional[shared.Prompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prompt') }})
    rejection_statement: Optional[shared.Statement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectionStatement') }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyFulfillmentActivity:
    r"""PutIntentRequestBodyFulfillmentActivity
    <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says \"pick up a rock,\" this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
    """
    
    code_hook: Optional[shared.CodeHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeHook') }})
    type: Optional[shared.FulfillmentActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyKendraConfiguration:
    r"""PutIntentRequestBodyKendraConfiguration
    Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href=\"http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html\"> AMAZON.KendraSearchIntent</a>.
    """
    
    kendra_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraIndex') }})
    query_filter_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFilterString') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyRejectionStatement:
    r"""PutIntentRequestBodyRejectionStatement
    A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
    """
    
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    

@dataclass_json
@dataclass
class PutIntentRequestBody:
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    conclusion_statement: Optional[PutIntentRequestBodyConclusionStatement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusionStatement') }})
    confirmation_prompt: Optional[PutIntentRequestBodyConfirmationPrompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationPrompt') }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dialog_code_hook: Optional[PutIntentRequestBodyDialogCodeHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogCodeHook') }})
    follow_up_prompt: Optional[PutIntentRequestBodyFollowUpPrompt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followUpPrompt') }})
    fulfillment_activity: Optional[PutIntentRequestBodyFulfillmentActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentActivity') }})
    input_contexts: Optional[List[shared.InputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContexts') }})
    kendra_configuration: Optional[PutIntentRequestBodyKendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraConfiguration') }})
    output_contexts: Optional[List[shared.OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntentSignature') }})
    rejection_statement: Optional[PutIntentRequestBodyRejectionStatement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectionStatement') }})
    sample_utterances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    slots: Optional[List[shared.Slot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    

@dataclass
class PutIntentRequest:
    headers: PutIntentHeaders = field()
    path_params: PutIntentPathParams = field()
    request: PutIntentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutIntentResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    put_intent_response: Optional[shared.PutIntentResponse] = field(default=None)
    
