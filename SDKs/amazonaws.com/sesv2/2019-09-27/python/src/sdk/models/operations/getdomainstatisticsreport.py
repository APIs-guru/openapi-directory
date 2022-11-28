from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDomainStatisticsReportPathParams:
    domain: str = field(metadata={'path_param': { 'field_name': 'Domain', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainStatisticsReportQueryParams:
    end_date: datetime = field(metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    start_date: datetime = field(metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainStatisticsReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainStatisticsReportRequest:
    headers: GetDomainStatisticsReportHeaders = field()
    path_params: GetDomainStatisticsReportPathParams = field()
    query_params: GetDomainStatisticsReportQueryParams = field()
    

@dataclass
class GetDomainStatisticsReportResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    get_domain_statistics_report_response: Optional[shared.GetDomainStatisticsReportResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
