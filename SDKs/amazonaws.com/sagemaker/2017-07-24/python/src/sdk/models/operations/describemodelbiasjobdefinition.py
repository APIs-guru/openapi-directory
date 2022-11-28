from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeModelBiasJobDefinitionXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_MODEL_BIAS_JOB_DEFINITION = "SageMaker.DescribeModelBiasJobDefinition"


@dataclass
class DescribeModelBiasJobDefinitionHeaders:
    x_amz_target: DescribeModelBiasJobDefinitionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeModelBiasJobDefinitionRequest:
    headers: DescribeModelBiasJobDefinitionHeaders = field()
    request: shared.DescribeModelBiasJobDefinitionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeModelBiasJobDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    describe_model_bias_job_definition_response: Optional[shared.DescribeModelBiasJobDefinitionResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    
