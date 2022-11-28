from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDeregisterDbProxyTargetsActionEnum(str, Enum):
    DEREGISTER_DB_PROXY_TARGETS = "DeregisterDBProxyTargets"

class GetDeregisterDbProxyTargetsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetDeregisterDbProxyTargetsQueryParams:
    action: GetDeregisterDbProxyTargetsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_proxy_name: str = field(metadata={'query_param': { 'field_name': 'DBProxyName', 'style': 'form', 'explode': True }})
    version: GetDeregisterDbProxyTargetsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    db_cluster_identifiers: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterIdentifiers', 'style': 'form', 'explode': True }})
    db_instance_identifiers: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceIdentifiers', 'style': 'form', 'explode': True }})
    target_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TargetGroupName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeregisterDbProxyTargetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeregisterDbProxyTargetsRequest:
    headers: GetDeregisterDbProxyTargetsHeaders = field()
    query_params: GetDeregisterDbProxyTargetsQueryParams = field()
    

@dataclass
class GetDeregisterDbProxyTargetsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
