from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetFailoverGlobalClusterActionEnum(str, Enum):
    FAILOVER_GLOBAL_CLUSTER = "FailoverGlobalCluster"

class GetFailoverGlobalClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetFailoverGlobalClusterQueryParams:
    action: GetFailoverGlobalClusterActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'GlobalClusterIdentifier', 'style': 'form', 'explode': True }})
    target_db_cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'TargetDbClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetFailoverGlobalClusterVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFailoverGlobalClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFailoverGlobalClusterRequest:
    headers: GetFailoverGlobalClusterHeaders = field()
    query_params: GetFailoverGlobalClusterQueryParams = field()
    

@dataclass
class GetFailoverGlobalClusterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
