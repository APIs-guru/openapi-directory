from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyClusterIamRolesActionEnum(str, Enum):
    MODIFY_CLUSTER_IAM_ROLES = "ModifyClusterIamRoles"

class GetModifyClusterIamRolesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyClusterIamRolesQueryParams:
    action: GetModifyClusterIamRolesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyClusterIamRolesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    add_iam_roles: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddIamRoles', 'style': 'form', 'explode': True }})
    remove_iam_roles: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveIamRoles', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyClusterIamRolesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyClusterIamRolesRequest:
    headers: GetModifyClusterIamRolesHeaders = field()
    query_params: GetModifyClusterIamRolesQueryParams = field()
    

@dataclass
class GetModifyClusterIamRolesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
