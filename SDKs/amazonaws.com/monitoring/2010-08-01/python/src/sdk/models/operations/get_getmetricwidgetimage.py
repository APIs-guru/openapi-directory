from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetMetricWidgetImageActionEnum(str, Enum):
    GET_METRIC_WIDGET_IMAGE = "GetMetricWidgetImage"

class GetGetMetricWidgetImageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetGetMetricWidgetImageQueryParams:
    action: GetGetMetricWidgetImageActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    metric_widget: str = field(default=None, metadata={'query_param': { 'field_name': 'MetricWidget', 'style': 'form', 'explode': True }})
    output_format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OutputFormat', 'style': 'form', 'explode': True }})
    version: GetGetMetricWidgetImageVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetMetricWidgetImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGetMetricWidgetImageRequest:
    query_params: GetGetMetricWidgetImageQueryParams = field(default=None)
    headers: GetGetMetricWidgetImageHeaders = field(default=None)
    

@dataclass
class GetGetMetricWidgetImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
