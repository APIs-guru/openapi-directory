from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum(str, Enum):
    UNSET = "UNSET"
    MYSQL = "MYSQL"
    PG = "PG"
    REDIS = "REDIS"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_name' }})
    db_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_name' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_user' }})
    engine: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    production: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'production' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DEFAULT = "DEFAULT"
    PRIMARY = "PRIMARY"
    ALIAS = "ALIAS"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    wildcard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wildcard' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum(str, Enum):
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

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    PRE_DEPLOY = "PRE_DEPLOY"
    POST_DEPLOY = "POST_DEPLOY"
    FAILED_DEPLOY = "FAILED_DEPLOY"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    kind: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum(str, Enum):
    AMS = "ams"
    NYC = "nyc"
    FRA = "fra"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins:
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCors:
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_credentials' }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_headers' }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_methods' }})
    allow_origins: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_origins' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expose_headers' }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_age' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck:
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure_threshold' }})
    http_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_path' }})
    initial_delay_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_delay_seconds' }})
    period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period_seconds' }})
    success_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success_threshold' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout_seconds' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesRoutesACriterionForRoutingHTTPTrafficToAComponent:
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    cors: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    health_check: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health_check' }})
    http_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_port' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    internal_ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal_ports' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    routes: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesRoutesACriterionForRoutingHTTPTrafficToAComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    catchall_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catchall_document' }})
    cors: Optional[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    error_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_document' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    index_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index_document' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output_dir' }})
    routes: Optional[List[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGit:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    repo_clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo_clone_url' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGithub:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGitlab:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    deploy_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploy_on_push' }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImage:
    registry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry' }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImageRegistryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_type' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_command' }})
    dockerfile_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfile_path' }})
    environment_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_slug' }})
    envs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envs' }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGithub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGitlab] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlab' }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size_slug' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    run_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_command' }})
    source_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_dir' }})
    

@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec:
    databases: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databases' }})
    domains: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    jobs: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    services: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    static_sites: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'static_sites' }})
    workers: Optional[List[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workers' }})
    
