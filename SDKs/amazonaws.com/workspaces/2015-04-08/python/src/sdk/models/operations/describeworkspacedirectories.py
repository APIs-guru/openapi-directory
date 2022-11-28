from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeWorkspaceDirectoriesQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeWorkspaceDirectoriesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_DIRECTORIES = "WorkspacesService.DescribeWorkspaceDirectories"


@dataclass
class DescribeWorkspaceDirectoriesHeaders:
    x_amz_target: DescribeWorkspaceDirectoriesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeWorkspaceDirectoriesRequest:
    headers: DescribeWorkspaceDirectoriesHeaders = field()
    query_params: DescribeWorkspaceDirectoriesQueryParams = field()
    request: shared.DescribeWorkspaceDirectoriesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeWorkspaceDirectoriesResponse:
    content_type: str = field()
    status_code: int = field()
    describe_workspace_directories_result: Optional[shared.DescribeWorkspaceDirectoriesResult] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    
