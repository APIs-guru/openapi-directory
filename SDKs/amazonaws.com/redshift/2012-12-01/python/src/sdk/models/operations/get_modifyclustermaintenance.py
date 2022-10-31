from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class GetModifyClusterMaintenanceActionEnum(str, Enum):
    MODIFY_CLUSTER_MAINTENANCE = "ModifyClusterMaintenance"

class GetModifyClusterMaintenanceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyClusterMaintenanceQueryParams:
    action: GetModifyClusterMaintenanceActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    defer_maintenance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenance', 'style': 'form', 'explode': True }})
    defer_maintenance_duration: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceDuration', 'style': 'form', 'explode': True }})
    defer_maintenance_end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceEndTime', 'style': 'form', 'explode': True }})
    defer_maintenance_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceIdentifier', 'style': 'form', 'explode': True }})
    defer_maintenance_start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DeferMaintenanceStartTime', 'style': 'form', 'explode': True }})
    version: GetModifyClusterMaintenanceVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyClusterMaintenanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyClusterMaintenanceRequest:
    query_params: GetModifyClusterMaintenanceQueryParams = field(default=None)
    headers: GetModifyClusterMaintenanceHeaders = field(default=None)
    

@dataclass
class GetModifyClusterMaintenanceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
