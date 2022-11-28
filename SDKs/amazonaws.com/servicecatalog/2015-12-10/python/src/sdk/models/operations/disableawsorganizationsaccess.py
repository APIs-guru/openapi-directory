from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class DisableAwsOrganizationsAccessXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_DISABLE_AWS_ORGANIZATIONS_ACCESS = "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess"


@dataclass
class DisableAwsOrganizationsAccessHeaders:
    x_amz_target: DisableAwsOrganizationsAccessXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableAwsOrganizationsAccessRequest:
    headers: DisableAwsOrganizationsAccessHeaders = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisableAwsOrganizationsAccessResponse:
    content_type: str = field()
    status_code: int = field()
    disable_aws_organizations_access_output: Optional[dict[str, Any]] = field(default=None)
    invalid_state_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
