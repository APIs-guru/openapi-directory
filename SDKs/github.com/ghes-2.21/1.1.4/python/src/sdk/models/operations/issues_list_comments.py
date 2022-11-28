from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class IssuesListCommentsPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesListCommentsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListCommentsRequest:
    path_params: IssuesListCommentsPathParams = field()
    query_params: IssuesListCommentsQueryParams = field()
    

@dataclass
class IssuesListCommentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue_comments: Optional[List[shared.IssueComment]] = field(default=None)
    
