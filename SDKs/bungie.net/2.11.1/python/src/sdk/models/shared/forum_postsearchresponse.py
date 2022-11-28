from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ForumPostSearchResponse:
    authors: Optional[List[UserGeneralUser]] = field(default=None)
    available_pages: Optional[int] = field(default=None)
    groups: Optional[List[GroupsV2GroupResponse]] = field(default=None)
    has_more: Optional[bool] = field(default=None)
    polls: Optional[List[ForumPollResponse]] = field(default=None)
    query: Optional[QueriesPagedQuery] = field(default=None)
    recruitment_details: Optional[List[ForumForumRecruitmentDetail]] = field(default=None)
    related_posts: Optional[List[ForumPostResponse]] = field(default=None)
    replacement_continuation_token: Optional[str] = field(default=None)
    results: Optional[List[ForumPostResponse]] = field(default=None)
    searched_tags: Optional[List[TagsModelsContractsTagResponse]] = field(default=None)
    total_results: Optional[int] = field(default=None)
    use_total_results: Optional[bool] = field(default=None)
    
