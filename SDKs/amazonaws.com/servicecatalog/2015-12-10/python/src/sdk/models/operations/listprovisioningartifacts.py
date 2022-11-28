from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListProvisioningArtifactsXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_LIST_PROVISIONING_ARTIFACTS = "AWS242ServiceCatalogService.ListProvisioningArtifacts"


@dataclass
class ListProvisioningArtifactsHeaders:
    x_amz_target: ListProvisioningArtifactsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListProvisioningArtifactsRequest:
    headers: ListProvisioningArtifactsHeaders = field()
    request: shared.ListProvisioningArtifactsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListProvisioningArtifactsResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameters_exception: Optional[Any] = field(default=None)
    list_provisioning_artifacts_output: Optional[shared.ListProvisioningArtifactsOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
