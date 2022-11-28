from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateOptionGroupActionEnum(str, Enum):
    CREATE_OPTION_GROUP = "CreateOptionGroup"

class GetCreateOptionGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetCreateOptionGroupQueryParams:
    action: GetCreateOptionGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    engine_name: str = field(metadata={'query_param': { 'field_name': 'EngineName', 'style': 'form', 'explode': True }})
    major_engine_version: str = field(metadata={'query_param': { 'field_name': 'MajorEngineVersion', 'style': 'form', 'explode': True }})
    option_group_description: str = field(metadata={'query_param': { 'field_name': 'OptionGroupDescription', 'style': 'form', 'explode': True }})
    option_group_name: str = field(metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    version: GetCreateOptionGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateOptionGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateOptionGroupRequest:
    headers: GetCreateOptionGroupHeaders = field()
    query_params: GetCreateOptionGroupQueryParams = field()
    

@dataclass
class GetCreateOptionGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
