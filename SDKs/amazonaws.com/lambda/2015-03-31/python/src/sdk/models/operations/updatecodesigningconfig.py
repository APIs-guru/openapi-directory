from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateCodeSigningConfigPathParams:
    code_signing_config_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'CodeSigningConfigArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCodeSigningConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateCodeSigningConfigRequestBodyAllowedPublishers:
    signing_profile_version_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningProfileVersionArns' }})
    

@dataclass_json
@dataclass
class UpdateCodeSigningConfigRequestBodyCodeSigningPolicies:
    untrusted_artifact_on_deployment: Optional[shared.CodeSigningPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UntrustedArtifactOnDeployment' }})
    

@dataclass_json
@dataclass
class UpdateCodeSigningConfigRequestBody:
    allowed_publishers: Optional[UpdateCodeSigningConfigRequestBodyAllowedPublishers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedPublishers' }})
    code_signing_policies: Optional[UpdateCodeSigningConfigRequestBodyCodeSigningPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningPolicies' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    

@dataclass
class UpdateCodeSigningConfigRequest:
    path_params: UpdateCodeSigningConfigPathParams = field(default=None)
    headers: UpdateCodeSigningConfigHeaders = field(default=None)
    request: UpdateCodeSigningConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCodeSigningConfigResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_code_signing_config_response: Optional[shared.UpdateCodeSigningConfigResponse] = field(default=None)
    
