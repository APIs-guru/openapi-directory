from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetGetInsightRuleReportActionEnum(str, Enum):
    GET_INSIGHT_RULE_REPORT = "GetInsightRuleReport"

class GetGetInsightRuleReportVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetGetInsightRuleReportQueryParams:
    action: GetGetInsightRuleReportActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    end_time: datetime = field(metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    period: int = field(metadata={'query_param': { 'field_name': 'Period', 'style': 'form', 'explode': True }})
    rule_name: str = field(metadata={'query_param': { 'field_name': 'RuleName', 'style': 'form', 'explode': True }})
    start_time: datetime = field(metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    version: GetGetInsightRuleReportVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    max_contributor_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxContributorCount', 'style': 'form', 'explode': True }})
    metrics: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Metrics', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OrderBy', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetInsightRuleReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetInsightRuleReportRequest:
    headers: GetGetInsightRuleReportHeaders = field()
    query_params: GetGetInsightRuleReportQueryParams = field()
    

@dataclass
class GetGetInsightRuleReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
