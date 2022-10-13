from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class GetBacktrackDbClusterActionEnum(str, Enum):
    BACKTRACK_DB_CLUSTER = "BacktrackDBCluster"

class GetBacktrackDbClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetBacktrackDbClusterQueryParams:
    action: GetBacktrackDbClusterActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    backtrack_to: datetime = field(default=None, metadata={'query_param': { 'field_name': 'BacktrackTo', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Force', 'style': 'form', 'explode': True }})
    use_earliest_time_on_point_in_time_unavailable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'UseEarliestTimeOnPointInTimeUnavailable', 'style': 'form', 'explode': True }})
    version: GetBacktrackDbClusterVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBacktrackDbClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetBacktrackDbClusterRequest:
    query_params: GetBacktrackDbClusterQueryParams = field(default=None)
    headers: GetBacktrackDbClusterHeaders = field(default=None)
    

@dataclass
class GetBacktrackDbClusterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
