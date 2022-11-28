from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDescribeHsmConfigurationsActionEnum(str, Enum):
    DESCRIBE_HSM_CONFIGURATIONS = "DescribeHsmConfigurations"

class GetDescribeHsmConfigurationsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDescribeHsmConfigurationsQueryParams:
    action: GetDescribeHsmConfigurationsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeHsmConfigurationsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    hsm_configuration_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HsmConfigurationIdentifier', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    tag_keys: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'TagKeys', 'style': 'form', 'explode': True }})
    tag_values: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'TagValues', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeHsmConfigurationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeHsmConfigurationsRequest:
    headers: GetDescribeHsmConfigurationsHeaders = field()
    query_params: GetDescribeHsmConfigurationsQueryParams = field()
    

@dataclass
class GetDescribeHsmConfigurationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
