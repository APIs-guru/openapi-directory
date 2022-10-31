from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AssociateWebsiteAuthorizationProviderHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum(str, Enum):
    SAML = "SAML"


@dataclass_json
@dataclass
class AssociateWebsiteAuthorizationProviderRequestBody:
    authorization_provider_type: AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationProviderType' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    fleet_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    

@dataclass
class AssociateWebsiteAuthorizationProviderRequest:
    headers: AssociateWebsiteAuthorizationProviderHeaders = field(default=None)
    request: AssociateWebsiteAuthorizationProviderRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateWebsiteAuthorizationProviderResponse:
    associate_website_authorization_provider_response: Optional[shared.AssociateWebsiteAuthorizationProviderResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
