package operations

import (
"time"
"openapi/pkg/models/shared")

type ListDeploymentsPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    
}

type ListDeploymentsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ListDeploymentsRequest struct {
    PathParams ListDeploymentsPathParams 
    QueryParams ListDeploymentsQueryParams 
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentJobs struct {
    Name *string `json:"name,omitempty"`
    SourceCommitHash *string `json:"source_commit_hash,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumUnknown ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "UNKNOWN"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumPendingBuild ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "PENDING_BUILD"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumBuilding ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "BUILDING"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumPendingDeploy ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "PENDING_DEPLOY"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumDeploying ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "DEPLOYING"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumActive ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "ACTIVE"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumSuperseded ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "SUPERSEDED"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumError ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "ERROR"
ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumCanceled ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "CANCELED"
)


type ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason struct {
    Code *string `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumUnknown ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "UNKNOWN"
ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumPending ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "PENDING"
ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumRunning ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "RUNNING"
ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumError ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "ERROR"
ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumSuccess ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "SUCCESS"
)


type ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle struct {
    ComponentName *string `json:"component_name,omitempty"`
    EndedAt *time.Time `json:"ended_at,omitempty"`
    MessageBase *string `json:"message_base,omitempty"`
    Name *string `json:"name,omitempty"`
    Reason *ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason `json:"reason,omitempty"`
    StartedAt *time.Time `json:"started_at,omitempty"`
    Status *ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum `json:"status,omitempty"`
    Steps []map[string]interface{} `json:"steps,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentProgress struct {
    ErrorSteps *int32 `json:"error_steps,omitempty"`
    PendingSteps *int32 `json:"pending_steps,omitempty"`
    RunningSteps *int32 `json:"running_steps,omitempty"`
    Steps []ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle `json:"steps,omitempty"`
    SuccessSteps *int32 `json:"success_steps,omitempty"`
    SummarySteps []shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems `json:"summary_steps,omitempty"`
    TotalSteps *int32 `json:"total_steps,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentServices struct {
    Name *string `json:"name,omitempty"`
    SourceCommitHash *string `json:"source_commit_hash,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumUnset ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "UNSET"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumMysql ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "MYSQL"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumPg ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "PG"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumRedis ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "REDIS"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases struct {
    ClusterName *string `json:"cluster_name,omitempty"`
    DbName *string `json:"db_name,omitempty"`
    DbUser *string `json:"db_user,omitempty"`
    Engine *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum `json:"engine,omitempty"`
    Name string `json:"name"`
    Production *bool `json:"production,omitempty"`
    Version *string `json:"version,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumUnspecified ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "UNSPECIFIED"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumDefault ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "DEFAULT"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumPrimary ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "PRIMARY"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumAlias ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "ALIAS"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains struct {
    Domain string `json:"domain"`
    Type *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum `json:"type,omitempty"`
    Wildcard *bool `json:"wildcard,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumUnset ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "UNSET"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumRunTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "RUN_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "BUILD_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)



type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnumGeneral ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum = "GENERAL"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnumSecret ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum = "SECRET"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs struct {
    Key string `json:"key"`
    Scope *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum `json:"scope,omitempty"`
    Type *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit struct {
    Branch *string `json:"branch,omitempty"`
    RepoCloneURL *string `json:"repo_clone_url,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum = "DOCKER_HUB"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnumDocr ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum = "DOCR"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage struct {
    Registry *string `json:"registry,omitempty"`
    RegistryType *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum `json:"registry_type,omitempty"`
    Repository *string `json:"repository,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumBasicXxs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "basic-xxs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumBasicXs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "basic-xs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumBasicS ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "basic-s"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumBasicM ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "basic-m"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumProfessionalXs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "professional-xs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumProfessionalS ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "professional-s"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumProfessionalM ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "professional-m"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumProfessional1l ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "professional-1l"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumProfessionalL ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "professional-l"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnumProfessionalXl ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = "professional-xl"
)



type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnumUnspecified ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum = "UNSPECIFIED"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnumPreDeploy ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum = "PRE_DEPLOY"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnumPostDeploy ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum = "POST_DEPLOY"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnumFailedDeploy ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum = "FAILED_DEPLOY"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs struct {
    BuildCommand *string `json:"build_command,omitempty"`
    DockerfilePath *string `json:"dockerfile_path,omitempty"`
    EnvironmentSlug *string `json:"environment_slug,omitempty"`
    Envs []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs `json:"envs,omitempty"`
    Git *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit `json:"git,omitempty"`
    Github *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub `json:"github,omitempty"`
    Gitlab *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab `json:"gitlab,omitempty"`
    Image *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage `json:"image,omitempty"`
    InstanceCount *int64 `json:"instance_count,omitempty"`
    InstanceSizeSlug *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
    Kind *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum `json:"kind,omitempty"`
    Name string `json:"name"`
    RunCommand *string `json:"run_command,omitempty"`
    SourceDir *string `json:"source_dir,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnumAms ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum = "ams"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnumNyc ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum = "nyc"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnumFra ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum = "fra"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCorsAllowOrigins struct {
    Exact *string `json:"exact,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    Regex *string `json:"regex,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCors struct {
    AllowCredentials *bool `json:"allow_credentials,omitempty"`
    AllowHeaders []string `json:"allow_headers,omitempty"`
    AllowMethods []string `json:"allow_methods,omitempty"`
    AllowOrigins []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCorsAllowOrigins `json:"allow_origins,omitempty"`
    ExposeHeaders []string `json:"expose_headers,omitempty"`
    MaxAge *string `json:"max_age,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumUnset ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "UNSET"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumRunTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "RUN_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "BUILD_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)



type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnumGeneral ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum = "GENERAL"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnumSecret ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum = "SECRET"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs struct {
    Key string `json:"key"`
    Scope *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum `json:"scope,omitempty"`
    Type *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit struct {
    Branch *string `json:"branch,omitempty"`
    RepoCloneURL *string `json:"repo_clone_url,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesHealthCheck struct {
    FailureThreshold *int32 `json:"failure_threshold,omitempty"`
    HTTPPath *string `json:"http_path,omitempty"`
    InitialDelaySeconds *int32 `json:"initial_delay_seconds,omitempty"`
    PeriodSeconds *int32 `json:"period_seconds,omitempty"`
    SuccessThreshold *int32 `json:"success_threshold,omitempty"`
    TimeoutSeconds *int32 `json:"timeout_seconds,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum = "DOCKER_HUB"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnumDocr ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum = "DOCR"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage struct {
    Registry *string `json:"registry,omitempty"`
    RegistryType *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum `json:"registry_type,omitempty"`
    Repository *string `json:"repository,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumBasicXxs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "basic-xxs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumBasicXs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "basic-xs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumBasicS ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "basic-s"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumBasicM ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "basic-m"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumProfessionalXs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "professional-xs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumProfessionalS ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "professional-s"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumProfessionalM ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "professional-m"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumProfessional1l ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "professional-1l"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumProfessionalL ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "professional-l"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnumProfessionalXl ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = "professional-xl"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent struct {
    Path *string `json:"path,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices struct {
    BuildCommand *string `json:"build_command,omitempty"`
    Cors *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCors `json:"cors,omitempty"`
    DockerfilePath *string `json:"dockerfile_path,omitempty"`
    EnvironmentSlug *string `json:"environment_slug,omitempty"`
    Envs []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs `json:"envs,omitempty"`
    Git *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit `json:"git,omitempty"`
    Github *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub `json:"github,omitempty"`
    Gitlab *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab `json:"gitlab,omitempty"`
    HealthCheck *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesHealthCheck `json:"health_check,omitempty"`
    HTTPPort *int64 `json:"http_port,omitempty"`
    Image *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage `json:"image,omitempty"`
    InstanceCount *int64 `json:"instance_count,omitempty"`
    InstanceSizeSlug *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
    InternalPorts []int64 `json:"internal_ports,omitempty"`
    Name string `json:"name"`
    Routes []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent `json:"routes,omitempty"`
    RunCommand *string `json:"run_command,omitempty"`
    SourceDir *string `json:"source_dir,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnumUnset ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum = "UNSET"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnumRunTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum = "RUN_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnumBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum = "BUILD_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)



type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnumGeneral ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum = "GENERAL"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnumSecret ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum = "SECRET"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvs struct {
    Key string `json:"key"`
    Scope *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum `json:"scope,omitempty"`
    Type *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGit struct {
    Branch *string `json:"branch,omitempty"`
    RepoCloneURL *string `json:"repo_clone_url,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGithub struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGitlab struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum = "DOCKER_HUB"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnumDocr ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum = "DOCR"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImage struct {
    Registry *string `json:"registry,omitempty"`
    RegistryType *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum `json:"registry_type,omitempty"`
    Repository *string `json:"repository,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites struct {
    BuildCommand *string `json:"build_command,omitempty"`
    CatchallDocument *string `json:"catchall_document,omitempty"`
    Cors *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors `json:"cors,omitempty"`
    DockerfilePath *string `json:"dockerfile_path,omitempty"`
    EnvironmentSlug *string `json:"environment_slug,omitempty"`
    Envs []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvs `json:"envs,omitempty"`
    ErrorDocument *string `json:"error_document,omitempty"`
    Git *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGit `json:"git,omitempty"`
    Github *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGithub `json:"github,omitempty"`
    Gitlab *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGitlab `json:"gitlab,omitempty"`
    Image *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImage `json:"image,omitempty"`
    IndexDocument *string `json:"index_document,omitempty"`
    Name string `json:"name"`
    OutputDir *string `json:"output_dir,omitempty"`
    Routes []shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems `json:"routes,omitempty"`
    RunCommand *string `json:"run_command,omitempty"`
    SourceDir *string `json:"source_dir,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnumUnset ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum = "UNSET"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnumRunTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum = "RUN_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnumBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum = "BUILD_TIME"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)



type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnumGeneral ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum = "GENERAL"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnumSecret ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum = "SECRET"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvs struct {
    Key string `json:"key"`
    Scope *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum `json:"scope,omitempty"`
    Type *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGit struct {
    Branch *string `json:"branch,omitempty"`
    RepoCloneURL *string `json:"repo_clone_url,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGithub struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGitlab struct {
    Branch *string `json:"branch,omitempty"`
    DeployOnPush *bool `json:"deploy_on_push,omitempty"`
    Repo *string `json:"repo,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum = "DOCKER_HUB"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnumDocr ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum = "DOCR"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImage struct {
    Registry *string `json:"registry,omitempty"`
    RegistryType *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum `json:"registry_type,omitempty"`
    Repository *string `json:"repository,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum string

const (
    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicXxs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-xxs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicXs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-xs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicS ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-s"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicM ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-m"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalXs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-xs"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalS ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-s"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalM ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-m"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessional1l ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-1l"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalL ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-l"
ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalXl ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-xl"
)


type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers struct {
    BuildCommand *string `json:"build_command,omitempty"`
    DockerfilePath *string `json:"dockerfile_path,omitempty"`
    EnvironmentSlug *string `json:"environment_slug,omitempty"`
    Envs []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvs `json:"envs,omitempty"`
    Git *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGit `json:"git,omitempty"`
    Github *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGithub `json:"github,omitempty"`
    Gitlab *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGitlab `json:"gitlab,omitempty"`
    Image *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImage `json:"image,omitempty"`
    InstanceCount *int64 `json:"instance_count,omitempty"`
    InstanceSizeSlug *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
    Name string `json:"name"`
    RunCommand *string `json:"run_command,omitempty"`
    SourceDir *string `json:"source_dir,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpec struct {
    Databases []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases `json:"databases,omitempty"`
    Domains []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains `json:"domains,omitempty"`
    Jobs []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs `json:"jobs,omitempty"`
    Name string `json:"name"`
    Region *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum `json:"region,omitempty"`
    Services []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices `json:"services,omitempty"`
    StaticSites []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites `json:"static_sites,omitempty"`
    Workers []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers `json:"workers,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentStaticSites struct {
    Name *string `json:"name,omitempty"`
    SourceCommitHash *string `json:"source_commit_hash,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeploymentWorkers struct {
    Name *string `json:"name,omitempty"`
    SourceCommitHash *string `json:"source_commit_hash,omitempty"`
    
}

type ListDeployments200ApplicationJSONAnAppDeployment struct {
    Cause *string `json:"cause,omitempty"`
    ClonedFrom *string `json:"cloned_from,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    ID *string `json:"id,omitempty"`
    Jobs []ListDeployments200ApplicationJSONAnAppDeploymentJobs `json:"jobs,omitempty"`
    Phase *ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum `json:"phase,omitempty"`
    PhaseLastUpdatedAt *time.Time `json:"phase_last_updated_at,omitempty"`
    Progress *ListDeployments200ApplicationJSONAnAppDeploymentProgress `json:"progress,omitempty"`
    Services []ListDeployments200ApplicationJSONAnAppDeploymentServices `json:"services,omitempty"`
    Spec *ListDeployments200ApplicationJSONAnAppDeploymentAppSpec `json:"spec,omitempty"`
    StaticSites []ListDeployments200ApplicationJSONAnAppDeploymentStaticSites `json:"static_sites,omitempty"`
    TierSlug *string `json:"tier_slug,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    Workers []ListDeployments200ApplicationJSONAnAppDeploymentWorkers `json:"workers,omitempty"`
    
}

type ListDeployments200ApplicationJSON struct {
    Deployments []ListDeployments200ApplicationJSONAnAppDeployment `json:"deployments,omitempty"`
    Links *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks `json:"links,omitempty"`
    Meta *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta `json:"meta,omitempty"`
    
}

type ListDeployments401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListDeploymentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListDeployments200ApplicationJSONObject *ListDeployments200ApplicationJSON 
    ListDeployments401ApplicationJSONObject *ListDeployments401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

