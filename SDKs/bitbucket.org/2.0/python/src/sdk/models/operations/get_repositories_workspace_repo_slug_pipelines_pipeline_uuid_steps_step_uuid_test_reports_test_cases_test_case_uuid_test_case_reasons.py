from dataclasses import dataclass, field



@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsPathParams:
    pipeline_uuid: str = field(metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    step_uuid: str = field(metadata={'path_param': { 'field_name': 'step_uuid', 'style': 'simple', 'explode': False }})
    test_case_uuid: str = field(metadata={'path_param': { 'field_name': 'test_case_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsPathParams = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse:
    content_type: str = field()
    status_code: int = field()
    
