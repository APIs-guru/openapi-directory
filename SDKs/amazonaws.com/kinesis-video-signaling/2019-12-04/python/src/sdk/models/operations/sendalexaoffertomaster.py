from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SendAlexaOfferToMasterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class SendAlexaOfferToMasterRequestBody:
    channel_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelARN' }})
    message_payload: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessagePayload' }})
    sender_client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SenderClientId' }})
    

@dataclass
class SendAlexaOfferToMasterRequest:
    headers: SendAlexaOfferToMasterHeaders = field(default=None)
    request: SendAlexaOfferToMasterRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendAlexaOfferToMasterResponse:
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    send_alexa_offer_to_master_response: Optional[shared.SendAlexaOfferToMasterResponse] = field(default=None)
    status_code: int = field(default=None)
    
