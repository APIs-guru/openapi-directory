from dataclasses import dataclass, field



@dataclass
class ReactionsDeleteForTeamDiscussionPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    reaction_id: int = field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteForTeamDiscussionRequest:
    path_params: ReactionsDeleteForTeamDiscussionPathParams = field()
    

@dataclass
class ReactionsDeleteForTeamDiscussionResponse:
    content_type: str = field()
    status_code: int = field()
    
