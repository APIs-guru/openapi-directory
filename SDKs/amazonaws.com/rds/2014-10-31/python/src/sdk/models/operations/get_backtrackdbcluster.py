from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetBacktrackDbClusterActionEnum(str, Enum):
    BACKTRACK_DB_CLUSTER = "BacktrackDBCluster"

class GetBacktrackDbClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetBacktrackDbClusterQueryParams:
    action: GetBacktrackDbClusterActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    backtrack_to: datetime = field(metadata={'query_param': { 'field_name': 'BacktrackTo', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetBacktrackDbClusterVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Force', 'style': 'form', 'explode': True }})
    use_earliest_time_on_point_in_time_unavailable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'UseEarliestTimeOnPointInTimeUnavailable', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBacktrackDbClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBacktrackDbClusterRequest:
    headers: GetBacktrackDbClusterHeaders = field()
    query_params: GetBacktrackDbClusterQueryParams = field()
    

@dataclass
class GetBacktrackDbClusterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
