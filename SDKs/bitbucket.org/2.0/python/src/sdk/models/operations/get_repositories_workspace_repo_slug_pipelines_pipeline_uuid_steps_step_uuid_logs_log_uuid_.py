from dataclasses import dataclass, field



@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDPathParams:
    log_uuid: str = field(metadata={'path_param': { 'field_name': 'log_uuid', 'style': 'simple', 'explode': False }})
    pipeline_uuid: str = field(metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    step_uuid: str = field(metadata={'path_param': { 'field_name': 'step_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDPathParams = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
