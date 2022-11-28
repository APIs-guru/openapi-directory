from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRevokeDbSecurityGroupIngressActionEnum(str, Enum):
    REVOKE_DB_SECURITY_GROUP_INGRESS = "RevokeDBSecurityGroupIngress"

class GetRevokeDbSecurityGroupIngressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetRevokeDbSecurityGroupIngressQueryParams:
    action: GetRevokeDbSecurityGroupIngressActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_security_group_name: str = field(metadata={'query_param': { 'field_name': 'DBSecurityGroupName', 'style': 'form', 'explode': True }})
    version: GetRevokeDbSecurityGroupIngressVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cidrip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CIDRIP', 'style': 'form', 'explode': True }})
    ec2_security_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupId', 'style': 'form', 'explode': True }})
    ec2_security_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupName', 'style': 'form', 'explode': True }})
    ec2_security_group_owner_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupOwnerId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRevokeDbSecurityGroupIngressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRevokeDbSecurityGroupIngressRequest:
    headers: GetRevokeDbSecurityGroupIngressHeaders = field()
    query_params: GetRevokeDbSecurityGroupIngressQueryParams = field()
    

@dataclass
class GetRevokeDbSecurityGroupIngressResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
