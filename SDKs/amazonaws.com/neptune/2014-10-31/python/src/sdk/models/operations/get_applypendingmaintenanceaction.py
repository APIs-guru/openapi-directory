from dataclasses import dataclass, field
from typing import Enum,Optional

class GetApplyPendingMaintenanceActionActionEnum(str, Enum):
    APPLY_PENDING_MAINTENANCE_ACTION = "ApplyPendingMaintenanceAction"

class GetApplyPendingMaintenanceActionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetApplyPendingMaintenanceActionQueryParams:
    action: GetApplyPendingMaintenanceActionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    apply_action: str = field(default=None, metadata={'query_param': { 'field_name': 'ApplyAction', 'style': 'form', 'explode': True }})
    opt_in_type: str = field(default=None, metadata={'query_param': { 'field_name': 'OptInType', 'style': 'form', 'explode': True }})
    resource_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ResourceIdentifier', 'style': 'form', 'explode': True }})
    version: GetApplyPendingMaintenanceActionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetApplyPendingMaintenanceActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetApplyPendingMaintenanceActionRequest:
    query_params: GetApplyPendingMaintenanceActionQueryParams = field(default=None)
    headers: GetApplyPendingMaintenanceActionHeaders = field(default=None)
    

@dataclass
class GetApplyPendingMaintenanceActionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
