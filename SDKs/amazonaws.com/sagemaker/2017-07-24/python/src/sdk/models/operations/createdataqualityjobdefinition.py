from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateDataQualityJobDefinitionXAmzTargetEnum(str, Enum):
    SAGE_MAKER_CREATE_DATA_QUALITY_JOB_DEFINITION = "SageMaker.CreateDataQualityJobDefinition"


@dataclass
class CreateDataQualityJobDefinitionHeaders:
    x_amz_target: CreateDataQualityJobDefinitionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDataQualityJobDefinitionRequest:
    headers: CreateDataQualityJobDefinitionHeaders = field()
    request: shared.CreateDataQualityJobDefinitionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDataQualityJobDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    create_data_quality_job_definition_response: Optional[shared.CreateDataQualityJobDefinitionResponse] = field(default=None)
    resource_in_use: Optional[Any] = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    
