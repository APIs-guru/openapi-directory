from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSamplingRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateSamplingRuleRequestBodySamplingRule:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    fixed_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedRate' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HTTPMethod' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Host' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    reservoir_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReservoirSize' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleARN' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleName' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceType' }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'URLPath' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    

@dataclass_json
@dataclass
class CreateSamplingRuleRequestBody:
    sampling_rule: CreateSamplingRuleRequestBodySamplingRule = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamplingRule' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreateSamplingRuleRequest:
    headers: CreateSamplingRuleHeaders = field(default=None)
    request: CreateSamplingRuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSamplingRuleResponse:
    content_type: str = field(default=None)
    create_sampling_rule_result: Optional[shared.CreateSamplingRuleResult] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    rule_limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
