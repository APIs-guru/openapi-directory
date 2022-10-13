from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional

class GetGetInsightRuleReportActionEnum(str, Enum):
    GET_INSIGHT_RULE_REPORT = "GetInsightRuleReport"

class GetGetInsightRuleReportVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetGetInsightRuleReportQueryParams:
    action: GetGetInsightRuleReportActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    end_time: datetime = field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    max_contributor_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxContributorCount', 'style': 'form', 'explode': True }})
    metrics: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Metrics', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OrderBy', 'style': 'form', 'explode': True }})
    period: int = field(default=None, metadata={'query_param': { 'field_name': 'Period', 'style': 'form', 'explode': True }})
    rule_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RuleName', 'style': 'form', 'explode': True }})
    start_time: datetime = field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    version: GetGetInsightRuleReportVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetInsightRuleReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGetInsightRuleReportRequest:
    query_params: GetGetInsightRuleReportQueryParams = field(default=None)
    headers: GetGetInsightRuleReportHeaders = field(default=None)
    

@dataclass
class GetGetInsightRuleReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
