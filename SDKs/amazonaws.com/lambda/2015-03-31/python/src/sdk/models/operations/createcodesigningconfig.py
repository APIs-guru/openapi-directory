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
class CreateCodeSigningConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCodeSigningConfigRequestBodyAllowedPublishers:
    r"""CreateCodeSigningConfigRequestBodyAllowedPublishers
    List of signing profiles that can sign a code package. 
    """
    
    signing_profile_version_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningProfileVersionArns') }})
    

@dataclass_json
@dataclass
class CreateCodeSigningConfigRequestBodyCodeSigningPolicies:
    r"""CreateCodeSigningConfigRequestBodyCodeSigningPolicies
    Code signing configuration <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies\">policies</a> specify the validation failure action for signature mismatch or expiry.
    """
    
    untrusted_artifact_on_deployment: Optional[shared.CodeSigningPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UntrustedArtifactOnDeployment') }})
    

@dataclass_json
@dataclass
class CreateCodeSigningConfigRequestBody:
    allowed_publishers: CreateCodeSigningConfigRequestBodyAllowedPublishers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedPublishers') }})
    code_signing_policies: Optional[CreateCodeSigningConfigRequestBodyCodeSigningPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningPolicies') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    

@dataclass
class CreateCodeSigningConfigRequest:
    headers: CreateCodeSigningConfigHeaders = field()
    request: CreateCodeSigningConfigRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCodeSigningConfigResponse:
    content_type: str = field()
    status_code: int = field()
    create_code_signing_config_response: Optional[shared.CreateCodeSigningConfigResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    
