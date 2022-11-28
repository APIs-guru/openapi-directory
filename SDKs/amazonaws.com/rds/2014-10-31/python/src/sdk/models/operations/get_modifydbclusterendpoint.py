from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyDbClusterEndpointActionEnum(str, Enum):
    MODIFY_DB_CLUSTER_ENDPOINT = "ModifyDBClusterEndpoint"

class GetModifyDbClusterEndpointVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbClusterEndpointQueryParams:
    action: GetModifyDbClusterEndpointActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_endpoint_identifier: str = field(metadata={'query_param': { 'field_name': 'DBClusterEndpointIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyDbClusterEndpointVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    endpoint_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EndpointType', 'style': 'form', 'explode': True }})
    excluded_members: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ExcludedMembers', 'style': 'form', 'explode': True }})
    static_members: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'StaticMembers', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbClusterEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbClusterEndpointRequest:
    headers: GetModifyDbClusterEndpointHeaders = field()
    query_params: GetModifyDbClusterEndpointQueryParams = field()
    

@dataclass
class GetModifyDbClusterEndpointResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
