from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GenerateTemplateXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_GENERATE_TEMPLATE = "AWSServerMigrationService_V2016_10_24.GenerateTemplate"


@dataclass
class GenerateTemplateHeaders:
    x_amz_target: GenerateTemplateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateTemplateRequest:
    headers: GenerateTemplateHeaders = field()
    request: shared.GenerateTemplateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    generate_template_response: Optional[shared.GenerateTemplateResponse] = field(default=None)
    internal_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    missing_required_parameter_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    unauthorized_operation_exception: Optional[Any] = field(default=None)
    
