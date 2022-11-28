from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetDeployablePatchSnapshotForInstanceXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_DEPLOYABLE_PATCH_SNAPSHOT_FOR_INSTANCE = "AmazonSSM.GetDeployablePatchSnapshotForInstance"


@dataclass
class GetDeployablePatchSnapshotForInstanceHeaders:
    x_amz_target: GetDeployablePatchSnapshotForInstanceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeployablePatchSnapshotForInstanceRequest:
    headers: GetDeployablePatchSnapshotForInstanceHeaders = field()
    request: shared.GetDeployablePatchSnapshotForInstanceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDeployablePatchSnapshotForInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    get_deployable_patch_snapshot_for_instance_result: Optional[shared.GetDeployablePatchSnapshotForInstanceResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    unsupported_feature_required_exception: Optional[Any] = field(default=None)
    unsupported_operating_system: Optional[Any] = field(default=None)
    
