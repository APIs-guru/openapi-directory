from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class DescribeModelPackageXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DESCRIBE_MODEL_PACKAGE = "SageMaker.DescribeModelPackage"


@dataclass
class DescribeModelPackageHeaders:
    x_amz_target: DescribeModelPackageXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeModelPackageRequest:
    headers: DescribeModelPackageHeaders = field()
    request: shared.DescribeModelPackageInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeModelPackageResponse:
    content_type: str = field()
    status_code: int = field()
    describe_model_package_output: Optional[shared.DescribeModelPackageOutput] = field(default=None)
    
