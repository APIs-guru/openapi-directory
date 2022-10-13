from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteDbClusterParameterGroupActionEnum(str, Enum):
    DELETE_DB_CLUSTER_PARAMETER_GROUP = "DeleteDBClusterParameterGroup"

class GetDeleteDbClusterParameterGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetDeleteDbClusterParameterGroupQueryParams:
    action: GetDeleteDbClusterParameterGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_parameter_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterParameterGroupName', 'style': 'form', 'explode': True }})
    version: GetDeleteDbClusterParameterGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteDbClusterParameterGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteDbClusterParameterGroupRequest:
    query_params: GetDeleteDbClusterParameterGroupQueryParams = field(default=None)
    headers: GetDeleteDbClusterParameterGroupHeaders = field(default=None)
    

@dataclass
class GetDeleteDbClusterParameterGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
