from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProvisioningjobsJobIDPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProvisioningjobsJobIDQueryParams:
    job_id: str = field(metadata={'query_param': { 'field_name': 'job_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProvisioningjobsJobIDRequest:
    path_params: GetProvisioningjobsJobIDPathParams = field()
    query_params: GetProvisioningjobsJobIDQueryParams = field()
    

@dataclass
class GetProvisioningjobsJobIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    provisioning_job_completion: Optional[shared.ProvisioningJobCompletion] = field(default=None)
    provisioning_job_info: Optional[shared.ProvisioningJobInfo] = field(default=None)
    
