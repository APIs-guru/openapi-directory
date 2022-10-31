from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutIntentPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

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
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyConfirmationPrompt:
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAttempts' }})
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyDialogCodeHook:
    message_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageVersion' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyFollowUpPrompt:
    prompt: Optional[shared.Prompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prompt' }})
    rejection_statement: Optional[shared.Statement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectionStatement' }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyFulfillmentActivity:
    code_hook: Optional[shared.CodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeHook' }})
    type: Optional[shared.FulfillmentActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyKendraConfiguration:
    kendra_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraIndex' }})
    query_filter_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFilterString' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass_json
@dataclass
class PutIntentRequestBodyRejectionStatement:
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    

@dataclass_json
@dataclass
class PutIntentRequestBody:
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    conclusion_statement: Optional[PutIntentRequestBodyConclusionStatement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusionStatement' }})
    confirmation_prompt: Optional[PutIntentRequestBodyConfirmationPrompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmationPrompt' }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dialog_code_hook: Optional[PutIntentRequestBodyDialogCodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogCodeHook' }})
    follow_up_prompt: Optional[PutIntentRequestBodyFollowUpPrompt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followUpPrompt' }})
    fulfillment_activity: Optional[PutIntentRequestBodyFulfillmentActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentActivity' }})
    input_contexts: Optional[List[shared.InputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputContexts' }})
    kendra_configuration: Optional[PutIntentRequestBodyKendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraConfiguration' }})
    output_contexts: Optional[List[shared.OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIntentSignature' }})
    rejection_statement: Optional[PutIntentRequestBodyRejectionStatement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectionStatement' }})
    sample_utterances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    slots: Optional[List[shared.Slot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    

@dataclass
class PutIntentRequest:
    path_params: PutIntentPathParams = field(default=None)
    headers: PutIntentHeaders = field(default=None)
    request: PutIntentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutIntentResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    put_intent_response: Optional[shared.PutIntentResponse] = field(default=None)
    status_code: int = field(default=None)
    
