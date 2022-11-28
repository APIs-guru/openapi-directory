from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateClusterXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_CLUSTER = "AWSIESnowballJobManagementService.UpdateCluster"


@dataclass
class UpdateClusterHeaders:
    x_amz_target: UpdateClusterXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateClusterRequest:
    headers: UpdateClusterHeaders = field()
    request: shared.UpdateClusterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateClusterResponse:
    content_type: str = field()
    status_code: int = field()
    ec2_request_failed_exception: Optional[Any] = field(default=None)
    invalid_input_combination_exception: Optional[Any] = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    invalid_resource_exception: Optional[Any] = field(default=None)
    kms_request_failed_exception: Optional[Any] = field(default=None)
    update_cluster_result: Optional[dict[str, Any]] = field(default=None)
    
