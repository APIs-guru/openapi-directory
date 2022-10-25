from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_progress_properties_steps_items
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    ERROR = "ERROR"
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle:
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'component_name' }})
    ended_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ended_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_base' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    steps: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress:
    error_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_steps' }})
    pending_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_steps' }})
    running_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'running_steps' }})
    steps: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    success_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success_steps' }})
    summary_steps: Optional[List[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_progress_properties_steps_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary_steps' }})
    total_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_steps' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum(str, Enum):
    UNSET = "UNSET"
    MYSQL = "MYSQL"
    PG = "PG"
    REDIS = "REDIS"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_name' }})
    db_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_name' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_user' }})
    engine: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    production: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'production' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DEFAULT = "DEFAULT"
    PRIMARY = "PRIMARY"
    ALIAS = "ALIAS"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    wildcard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wildcard' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum(str, Enum):
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

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    PRE_DEPLOY = "PRE_DEPLOY"
    POST_DEPLOY = "POST_DEPLOY"
    FAILED_DEPLOY = "FAILED_DEPLOY"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    kind: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum(str, Enum):
    AMS = "ams"
    NYC = "nyc"
    FRA = "fra"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins:
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors:
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_credentials' }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_headers' }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_methods' }})
    allow_origins: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_origins' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expose_headers' }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_age' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck:
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure_threshold' }})
    http_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_path' }})
    initial_delay_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_delay_seconds' }})
    period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period_seconds' }})
    success_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success_threshold' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout_seconds' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent:
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    cors: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    health_check: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_port' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    internal_ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal_ports' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    routes: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    catchall_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catchall_document' }})
    cors: Optional[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    error_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_document' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    index_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index_document' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output_dir' }})
    routes: Optional[List[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec:
    databases: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databases' }})
    domains: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    jobs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    services: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    static_sites: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'static_sites' }})
    workers: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workers' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_commit_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_commit_hash' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems:
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    cloned_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloned_from' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jobs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    phase: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    phase_last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase_last_updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    progress: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    services: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    spec: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    static_sites: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'static_sites' }})
    tier_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_slug' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workers: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workers' }})
    
