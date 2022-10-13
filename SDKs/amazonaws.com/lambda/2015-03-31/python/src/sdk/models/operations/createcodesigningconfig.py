from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCodeSigningConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateCodeSigningConfigRequestBodyAllowedPublishers:
    signing_profile_version_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningProfileVersionArns' }})
    

@dataclass_json
@dataclass
class CreateCodeSigningConfigRequestBodyCodeSigningPolicies:
    untrusted_artifact_on_deployment: Optional[shared.CodeSigningPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UntrustedArtifactOnDeployment' }})
    

@dataclass_json
@dataclass
class CreateCodeSigningConfigRequestBody:
    allowed_publishers: CreateCodeSigningConfigRequestBodyAllowedPublishers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedPublishers' }})
    code_signing_policies: Optional[CreateCodeSigningConfigRequestBodyCodeSigningPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningPolicies' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    

@dataclass
class CreateCodeSigningConfigRequest:
    headers: CreateCodeSigningConfigHeaders = field(default=None)
    request: CreateCodeSigningConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCodeSigningConfigResponse:
    content_type: str = field(default=None)
    create_code_signing_config_response: Optional[shared.CreateCodeSigningConfigResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
