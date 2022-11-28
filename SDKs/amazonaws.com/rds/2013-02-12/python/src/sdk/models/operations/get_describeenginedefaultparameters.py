from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeEngineDefaultParametersActionEnum(str, Enum):
    DESCRIBE_ENGINE_DEFAULT_PARAMETERS = "DescribeEngineDefaultParameters"

class GetDescribeEngineDefaultParametersVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetDescribeEngineDefaultParametersQueryParams:
    action: GetDescribeEngineDefaultParametersActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_parameter_group_family: str = field(metadata={'query_param': { 'field_name': 'DBParameterGroupFamily', 'style': 'form', 'explode': True }})
    version: GetDescribeEngineDefaultParametersVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeEngineDefaultParametersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeEngineDefaultParametersRequest:
    headers: GetDescribeEngineDefaultParametersHeaders = field()
    query_params: GetDescribeEngineDefaultParametersQueryParams = field()
    

@dataclass
class GetDescribeEngineDefaultParametersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
