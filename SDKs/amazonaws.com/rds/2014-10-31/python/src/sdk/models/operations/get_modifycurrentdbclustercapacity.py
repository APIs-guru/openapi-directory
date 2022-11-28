from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyCurrentDbClusterCapacityActionEnum(str, Enum):
    MODIFY_CURRENT_DB_CLUSTER_CAPACITY = "ModifyCurrentDBClusterCapacity"

class GetModifyCurrentDbClusterCapacityVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyCurrentDbClusterCapacityQueryParams:
    action: GetModifyCurrentDbClusterCapacityActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyCurrentDbClusterCapacityVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    capacity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Capacity', 'style': 'form', 'explode': True }})
    seconds_before_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'SecondsBeforeTimeout', 'style': 'form', 'explode': True }})
    timeout_action: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TimeoutAction', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyCurrentDbClusterCapacityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyCurrentDbClusterCapacityRequest:
    headers: GetModifyCurrentDbClusterCapacityHeaders = field()
    query_params: GetModifyCurrentDbClusterCapacityQueryParams = field()
    

@dataclass
class GetModifyCurrentDbClusterCapacityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
