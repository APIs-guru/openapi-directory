from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListDeploymentsPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeploymentsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeploymentsRequest:
    path_params: ListDeploymentsPathParams = field(default=None)
    query_params: ListDeploymentsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentJobs:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING_BUILD = "PENDING_BUILD"
    BUILDING = "BUILDING"
    PENDING_DEPLOY = "PENDING_DEPLOY"
    DEPLOYING = "DEPLOYING"
    ACTIVE = "ACTIVE"
    SUPERSEDED = "SUPERSEDED"
    ERROR = "ERROR"
    CANCELED = "CANCELED"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    ERROR = "ERROR"
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle:
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'component_name' }})
    ended_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ended_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_base' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    steps: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentProgress:
    error_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_steps' }})
    pending_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_steps' }})
    running_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'running_steps' }})
    steps: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    success_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success_steps' }})
    summary_steps: Optional[List[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary_steps' }})
    total_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_steps' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentServices:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum(str, Enum):
    UNSET = "UNSET"
    MYSQL = "MYSQL"
    PG = "PG"
    REDIS = "REDIS"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_name' }})
    db_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_name' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_user' }})
    engine: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    production: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'production' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DEFAULT = "DEFAULT"
    PRIMARY = "PRIMARY"
    ALIAS = "ALIAS"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    wildcard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wildcard' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum(str, Enum):
    BASIC_XXS = "basic-xxs"
    BASIC_XS = "basic-xs"
    BASIC_S = "basic-s"
    BASIC_M = "basic-m"
    PROFESSIONAL_XS = "professional-xs"
    PROFESSIONAL_S = "professional-s"
    PROFESSIONAL_M = "professional-m"
    PROFESSIONAL_1L = "professional-1l"
    PROFESSIONAL_L = "professional-l"
    PROFESSIONAL_XL = "professional-xl"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    PRE_DEPLOY = "PRE_DEPLOY"
    POST_DEPLOY = "POST_DEPLOY"
    FAILED_DEPLOY = "FAILED_DEPLOY"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    kind: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum(str, Enum):
    AMS = "ams"
    NYC = "nyc"
    FRA = "fra"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCorsAllowOrigins:
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCors:
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_credentials' }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_headers' }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_methods' }})
    allow_origins: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCorsAllowOrigins]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_origins' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expose_headers' }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_age' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesHealthCheck:
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure_threshold' }})
    http_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_path' }})
    initial_delay_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_delay_seconds' }})
    period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period_seconds' }})
    success_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success_threshold' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout_seconds' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum(str, Enum):
    BASIC_XXS = "basic-xxs"
    BASIC_XS = "basic-xs"
    BASIC_S = "basic-s"
    BASIC_M = "basic-m"
    PROFESSIONAL_XS = "professional-xs"
    PROFESSIONAL_S = "professional-s"
    PROFESSIONAL_M = "professional-m"
    PROFESSIONAL_1L = "professional-1l"
    PROFESSIONAL_L = "professional-l"
    PROFESSIONAL_XL = "professional-xl"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent:
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    cors: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    health_check: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_port' }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    internal_ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal_ports' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    routes: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    catchall_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catchall_document' }})
    cors: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    error_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_document' }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    index_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index_document' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output_dir' }})
    routes: Optional[List[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum(str, Enum):
    BASIC_XXS = "basic-xxs"
    BASIC_XS = "basic-xs"
    BASIC_S = "basic-s"
    BASIC_M = "basic-m"
    PROFESSIONAL_XS = "professional-xs"
    PROFESSIONAL_S = "professional-s"
    PROFESSIONAL_M = "professional-m"
    PROFESSIONAL_1L = "professional-1l"
    PROFESSIONAL_L = "professional-l"
    PROFESSIONAL_XL = "professional-xl"


@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpec:
    databases: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databases' }})
    domains: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    jobs: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    services: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    static_sites: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'static_sites' }})
    workers: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workers' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentStaticSites:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentWorkers:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSONAnAppDeployment:
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    cloned_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloned_from' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jobs: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentJobs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    phase: Optional[ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    phase_last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase_last_updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    progress: Optional[ListDeployments200ApplicationJSONAnAppDeploymentProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    services: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentServices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    spec: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    static_sites: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentStaticSites]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'static_sites' }})
    tier_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_slug' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workers: Optional[List[ListDeployments200ApplicationJSONAnAppDeploymentWorkers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workers' }})
    

@dataclass_json
@dataclass
class ListDeployments200ApplicationJSON:
    deployments: Optional[List[ListDeployments200ApplicationJSONAnAppDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    links: Optional[shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListDeployments401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListDeploymentsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_deployments_200_application_json_object: Optional[ListDeployments200ApplicationJSON] = field(default=None)
    list_deployments_401_application_json_object: Optional[ListDeployments401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
