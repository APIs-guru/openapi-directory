from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetMetricWidgetImageActionEnum(str, Enum):
    GET_METRIC_WIDGET_IMAGE = "GetMetricWidgetImage"

class GetGetMetricWidgetImageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetGetMetricWidgetImageQueryParams:
    action: GetGetMetricWidgetImageActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    metric_widget: str = field(metadata={'query_param': { 'field_name': 'MetricWidget', 'style': 'form', 'explode': True }})
    version: GetGetMetricWidgetImageVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    output_format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OutputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetMetricWidgetImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetMetricWidgetImageRequest:
    headers: GetGetMetricWidgetImageHeaders = field()
    query_params: GetGetMetricWidgetImageQueryParams = field()
    

@dataclass
class GetGetMetricWidgetImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
