from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutEmailIdentityDkimSigningAttributesPathParams:
    email_identity: str = field(default=None, metadata={'path_param': { 'field_name': 'EmailIdentity', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmailIdentityDkimSigningAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes:
    domain_signing_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainSigningPrivateKey' }})
    domain_signing_selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainSigningSelector' }})
    
class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum(str, Enum):
    AWS_SES = "AWS_SES"
    EXTERNAL = "EXTERNAL"


@dataclass_json
@dataclass
class PutEmailIdentityDkimSigningAttributesRequestBody:
    signing_attributes: Optional[PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAttributes' }})
    signing_attributes_origin: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAttributesOrigin' }})
    

@dataclass
class PutEmailIdentityDkimSigningAttributesRequest:
    path_params: PutEmailIdentityDkimSigningAttributesPathParams = field(default=None)
    headers: PutEmailIdentityDkimSigningAttributesHeaders = field(default=None)
    request: PutEmailIdentityDkimSigningAttributesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEmailIdentityDkimSigningAttributesResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    put_email_identity_dkim_signing_attributes_response: Optional[shared.PutEmailIdentityDkimSigningAttributesResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
