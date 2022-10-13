from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListResourceComplianceSummariesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListResourceComplianceSummariesXAmzTargetEnum(str, Enum):
    AMAZON_SSM_LIST_RESOURCE_COMPLIANCE_SUMMARIES = "AmazonSSM.ListResourceComplianceSummaries"


@dataclass
class ListResourceComplianceSummariesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListResourceComplianceSummariesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListResourceComplianceSummariesRequest:
    query_params: ListResourceComplianceSummariesQueryParams = field(default=None)
    headers: ListResourceComplianceSummariesHeaders = field(default=None)
    request: shared.ListResourceComplianceSummariesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListResourceComplianceSummariesResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_filter: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    list_resource_compliance_summaries_result: Optional[shared.ListResourceComplianceSummariesResult] = field(default=None)
    status_code: int = field(default=None)
    
