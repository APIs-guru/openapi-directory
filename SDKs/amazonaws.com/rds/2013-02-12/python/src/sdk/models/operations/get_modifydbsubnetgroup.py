from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyDbSubnetGroupActionEnum(str, Enum):
    MODIFY_DB_SUBNET_GROUP = "ModifyDBSubnetGroup"

class GetModifyDbSubnetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetModifyDbSubnetGroupQueryParams:
    action: GetModifyDbSubnetGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_subnet_group_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupDescription', 'style': 'form', 'explode': True }})
    db_subnet_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupName', 'style': 'form', 'explode': True }})
    subnet_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'SubnetIds', 'style': 'form', 'explode': True }})
    version: GetModifyDbSubnetGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbSubnetGroupRequest:
    query_params: GetModifyDbSubnetGroupQueryParams = field(default=None)
    headers: GetModifyDbSubnetGroupHeaders = field(default=None)
    

@dataclass
class GetModifyDbSubnetGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
