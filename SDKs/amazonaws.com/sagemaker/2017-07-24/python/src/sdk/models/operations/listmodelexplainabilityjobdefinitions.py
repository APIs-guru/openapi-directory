from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListModelExplainabilityJobDefinitionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListModelExplainabilityJobDefinitionsXAmzTargetEnum(str, Enum):
    SAGE_MAKER_LIST_MODEL_EXPLAINABILITY_JOB_DEFINITIONS = "SageMaker.ListModelExplainabilityJobDefinitions"


@dataclass
class ListModelExplainabilityJobDefinitionsHeaders:
    x_amz_target: ListModelExplainabilityJobDefinitionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListModelExplainabilityJobDefinitionsRequest:
    headers: ListModelExplainabilityJobDefinitionsHeaders = field()
    query_params: ListModelExplainabilityJobDefinitionsQueryParams = field()
    request: shared.ListModelExplainabilityJobDefinitionsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListModelExplainabilityJobDefinitionsResponse:
    content_type: str = field()
    status_code: int = field()
    list_model_explainability_job_definitions_response: Optional[shared.ListModelExplainabilityJobDefinitionsResponse] = field(default=None)
    
