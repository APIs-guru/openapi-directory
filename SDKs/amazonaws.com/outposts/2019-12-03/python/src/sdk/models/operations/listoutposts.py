from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListOutpostsQueryParams:
    availability_zone_filter: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZoneFilter', 'style': 'form', 'explode': True }})
    availability_zone_id_filter: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZoneIdFilter', 'style': 'form', 'explode': True }})
    life_cycle_status_filter: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'LifeCycleStatusFilter', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListOutpostsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListOutpostsRequest:
    query_params: ListOutpostsQueryParams = field(default=None)
    headers: ListOutpostsHeaders = field(default=None)
    

@dataclass
class ListOutpostsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_outposts_output: Optional[shared.ListOutpostsOutput] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
