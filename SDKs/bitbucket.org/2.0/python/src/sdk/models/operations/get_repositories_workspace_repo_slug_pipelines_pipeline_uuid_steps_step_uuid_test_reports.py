from dataclasses import dataclass, field



@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsPathParams:
    pipeline_uuid: str = field(metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    step_uuid: str = field(metadata={'path_param': { 'field_name': 'step_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsPathParams = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsResponse:
    content_type: str = field()
    status_code: int = field()
    
