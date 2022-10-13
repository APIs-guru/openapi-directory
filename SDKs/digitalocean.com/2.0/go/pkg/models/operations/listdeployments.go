package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDeploymentsPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type ListDeploymentsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDeploymentsRequest struct {
	PathParams  ListDeploymentsPathParams
	QueryParams ListDeploymentsQueryParams
}

type ListDeployments200ApplicationJSONDeploymentsJobs struct {
	Name             *string `json:"name"`
	SourceCommitHash *string `json:"source_commit_hash"`
}

type ListDeployments200ApplicationJSONDeploymentsPhaseEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumUnknown       ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "UNKNOWN"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumPendingBuild  ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "PENDING_BUILD"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumBuilding      ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "BUILDING"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumPendingDeploy ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "PENDING_DEPLOY"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumDeploying     ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "DEPLOYING"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumActive        ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "ACTIVE"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumSuperseded    ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "SUPERSEDED"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumError         ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "ERROR"
	ListDeployments200ApplicationJSONDeploymentsPhaseEnumCanceled      ListDeployments200ApplicationJSONDeploymentsPhaseEnum = "CANCELED"
)

type ListDeployments200ApplicationJSONDeploymentsProgressStepsReason struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnumUnknown ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnum = "UNKNOWN"
	ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnumPending ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnum = "PENDING"
	ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnumRunning ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnum = "RUNNING"
	ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnumError   ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnum = "ERROR"
	ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnumSuccess ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnum = "SUCCESS"
)

type ListDeployments200ApplicationJSONDeploymentsProgressStepsAStepThatIsRunAsPartOfTheDeploymentSLifecycle struct {
	ComponentName *string                                                              `json:"component_name"`
	EndedAt       *time.Time                                                           `json:"ended_at"`
	MessageBase   *string                                                              `json:"message_base"`
	Name          *string                                                              `json:"name"`
	Reason        *ListDeployments200ApplicationJSONDeploymentsProgressStepsReason     `json:"reason"`
	StartedAt     *time.Time                                                           `json:"started_at"`
	Status        *ListDeployments200ApplicationJSONDeploymentsProgressStepsStatusEnum `json:"status"`
	Steps         []map[string]interface{}                                             `json:"steps"`
}

type ListDeployments200ApplicationJSONDeploymentsProgress struct {
	ErrorSteps   *int32                                                                                                                                                              `json:"error_steps"`
	PendingSteps *int32                                                                                                                                                              `json:"pending_steps"`
	RunningSteps *int32                                                                                                                                                              `json:"running_steps"`
	Steps        []ListDeployments200ApplicationJSONDeploymentsProgressStepsAStepThatIsRunAsPartOfTheDeploymentSLifecycle                                                            `json:"steps"`
	SuccessSteps *int32                                                                                                                                                              `json:"success_steps"`
	SummarySteps []shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems `json:"summary_steps"`
	TotalSteps   *int32                                                                                                                                                              `json:"total_steps"`
}

type ListDeployments200ApplicationJSONDeploymentsServices struct {
	Name             *string `json:"name"`
	SourceCommitHash *string `json:"source_commit_hash"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnumUnset ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnum = "UNSET"
	ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnumMysql ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnum = "MYSQL"
	ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnumPg    ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnum = "PG"
	ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnumRedis ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnum = "REDIS"
)

type ListDeployments200ApplicationJSONDeploymentsSpecDatabases struct {
	ClusterName *string                                                              `json:"cluster_name"`
	DbName      *string                                                              `json:"db_name"`
	DbUser      *string                                                              `json:"db_user"`
	Engine      *ListDeployments200ApplicationJSONDeploymentsSpecDatabasesEngineEnum `json:"engine"`
	Name        string                                                               `json:"name"`
	Production  *bool                                                                `json:"production"`
	Version     *string                                                              `json:"version"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnumUnspecified ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnum = "UNSPECIFIED"
	ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnumDefault     ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnum = "DEFAULT"
	ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnumPrimary     ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnum = "PRIMARY"
	ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnumAlias       ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnum = "ALIAS"
)

type ListDeployments200ApplicationJSONDeploymentsSpecDomains struct {
	Domain   string                                                           `json:"domain"`
	Type     *ListDeployments200ApplicationJSONDeploymentsSpecDomainsTypeEnum `json:"type"`
	Wildcard *bool                                                            `json:"wildcard"`
	Zone     *string                                                          `json:"zone"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnumUnset           ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnum = "UNSET"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnumRunTime         ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnum = "RUN_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnumBuildTime       ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnum = "BUILD_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsTypeEnumGeneral ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsTypeEnum = "GENERAL"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsTypeEnumSecret  ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsTypeEnum = "SECRET"
)

type ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvs struct {
	Key   string                                                             `json:"key"`
	Scope *ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsScopeEnum `json:"scope"`
	Type  *ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvsTypeEnum  `json:"type"`
	Value *string                                                            `json:"value"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecJobsGit struct {
	Branch       *string `json:"branch"`
	RepoCloneURL *string `json:"repo_clone_url"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecJobsGithub struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecJobsGitlab struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecJobsImageRegistryTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecJobsImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONDeploymentsSpecJobsImageRegistryTypeEnum = "DOCKER_HUB"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsImageRegistryTypeEnumDocr      ListDeployments200ApplicationJSONDeploymentsSpecJobsImageRegistryTypeEnum = "DOCR"
)

type ListDeployments200ApplicationJSONDeploymentsSpecJobsImage struct {
	Registry     *string                                                                    `json:"registry"`
	RegistryType *ListDeployments200ApplicationJSONDeploymentsSpecJobsImageRegistryTypeEnum `json:"registry_type"`
	Repository   *string                                                                    `json:"repository"`
	Tag          *string                                                                    `json:"tag"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumBasicXxs       ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "basic-xxs"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumBasicXs        ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "basic-xs"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumBasicS         ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "basic-s"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumBasicM         ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "basic-m"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumProfessionalXs ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "professional-xs"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumProfessionalS  ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "professional-s"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumProfessionalM  ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "professional-m"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumProfessional1l ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "professional-1l"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumProfessionalL  ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "professional-l"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnumProfessionalXl ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum = "professional-xl"
)

type ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnumUnspecified  ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnum = "UNSPECIFIED"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnumPreDeploy    ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnum = "PRE_DEPLOY"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnumPostDeploy   ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnum = "POST_DEPLOY"
	ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnumFailedDeploy ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnum = "FAILED_DEPLOY"
)

type ListDeployments200ApplicationJSONDeploymentsSpecJobs struct {
	BuildCommand     *string                                                                   `json:"build_command"`
	DockerfilePath   *string                                                                   `json:"dockerfile_path"`
	EnvironmentSlug  *string                                                                   `json:"environment_slug"`
	Envs             []ListDeployments200ApplicationJSONDeploymentsSpecJobsEnvs                `json:"envs"`
	Git              *ListDeployments200ApplicationJSONDeploymentsSpecJobsGit                  `json:"git"`
	Github           *ListDeployments200ApplicationJSONDeploymentsSpecJobsGithub               `json:"github"`
	Gitlab           *ListDeployments200ApplicationJSONDeploymentsSpecJobsGitlab               `json:"gitlab"`
	Image            *ListDeployments200ApplicationJSONDeploymentsSpecJobsImage                `json:"image"`
	InstanceCount    *int64                                                                    `json:"instance_count"`
	InstanceSizeSlug *ListDeployments200ApplicationJSONDeploymentsSpecJobsInstanceSizeSlugEnum `json:"instance_size_slug"`
	Kind             *ListDeployments200ApplicationJSONDeploymentsSpecJobsKindEnum             `json:"kind"`
	Name             string                                                                    `json:"name"`
	RunCommand       *string                                                                   `json:"run_command"`
	SourceDir        *string                                                                   `json:"source_dir"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecRegionEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecRegionEnumAms ListDeployments200ApplicationJSONDeploymentsSpecRegionEnum = "ams"
	ListDeployments200ApplicationJSONDeploymentsSpecRegionEnumNyc ListDeployments200ApplicationJSONDeploymentsSpecRegionEnum = "nyc"
	ListDeployments200ApplicationJSONDeploymentsSpecRegionEnumFra ListDeployments200ApplicationJSONDeploymentsSpecRegionEnum = "fra"
)

type ListDeployments200ApplicationJSONDeploymentsSpecServicesCorsAllowOrigins struct {
	Exact  *string `json:"exact"`
	Prefix *string `json:"prefix"`
	Regex  *string `json:"regex"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesCors struct {
	AllowCredentials *bool                                                                      `json:"allow_credentials"`
	AllowHeaders     []string                                                                   `json:"allow_headers"`
	AllowMethods     []string                                                                   `json:"allow_methods"`
	AllowOrigins     []ListDeployments200ApplicationJSONDeploymentsSpecServicesCorsAllowOrigins `json:"allow_origins"`
	ExposeHeaders    []string                                                                   `json:"expose_headers"`
	MaxAge           *string                                                                    `json:"max_age"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnumUnset           ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnum = "UNSET"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnumRunTime         ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnum = "RUN_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnumBuildTime       ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnum = "BUILD_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsTypeEnumGeneral ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsTypeEnum = "GENERAL"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsTypeEnumSecret  ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsTypeEnum = "SECRET"
)

type ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvs struct {
	Key   string                                                                 `json:"key"`
	Scope *ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsScopeEnum `json:"scope"`
	Type  *ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvsTypeEnum  `json:"type"`
	Value *string                                                                `json:"value"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesGit struct {
	Branch       *string `json:"branch"`
	RepoCloneURL *string `json:"repo_clone_url"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesGithub struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesGitlab struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesHealthCheck struct {
	FailureThreshold    *int32  `json:"failure_threshold"`
	HTTPPath            *string `json:"http_path"`
	InitialDelaySeconds *int32  `json:"initial_delay_seconds"`
	PeriodSeconds       *int32  `json:"period_seconds"`
	SuccessThreshold    *int32  `json:"success_threshold"`
	TimeoutSeconds      *int32  `json:"timeout_seconds"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesImageRegistryTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecServicesImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONDeploymentsSpecServicesImageRegistryTypeEnum = "DOCKER_HUB"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesImageRegistryTypeEnumDocr      ListDeployments200ApplicationJSONDeploymentsSpecServicesImageRegistryTypeEnum = "DOCR"
)

type ListDeployments200ApplicationJSONDeploymentsSpecServicesImage struct {
	Registry     *string                                                                        `json:"registry"`
	RegistryType *ListDeployments200ApplicationJSONDeploymentsSpecServicesImageRegistryTypeEnum `json:"registry_type"`
	Repository   *string                                                                        `json:"repository"`
	Tag          *string                                                                        `json:"tag"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumBasicXxs       ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "basic-xxs"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumBasicXs        ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "basic-xs"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumBasicS         ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "basic-s"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumBasicM         ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "basic-m"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumProfessionalXs ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "professional-xs"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumProfessionalS  ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "professional-s"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumProfessionalM  ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "professional-m"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumProfessional1l ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "professional-1l"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumProfessionalL  ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "professional-l"
	ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnumProfessionalXl ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum = "professional-xl"
)

type ListDeployments200ApplicationJSONDeploymentsSpecServicesRoutesACriterionForRoutingHTTPTrafficToAComponent struct {
	Path *string `json:"path"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecServices struct {
	BuildCommand     *string                                                                                                     `json:"build_command"`
	Cors             *ListDeployments200ApplicationJSONDeploymentsSpecServicesCors                                               `json:"cors"`
	DockerfilePath   *string                                                                                                     `json:"dockerfile_path"`
	EnvironmentSlug  *string                                                                                                     `json:"environment_slug"`
	Envs             []ListDeployments200ApplicationJSONDeploymentsSpecServicesEnvs                                              `json:"envs"`
	Git              *ListDeployments200ApplicationJSONDeploymentsSpecServicesGit                                                `json:"git"`
	Github           *ListDeployments200ApplicationJSONDeploymentsSpecServicesGithub                                             `json:"github"`
	Gitlab           *ListDeployments200ApplicationJSONDeploymentsSpecServicesGitlab                                             `json:"gitlab"`
	HealthCheck      *ListDeployments200ApplicationJSONDeploymentsSpecServicesHealthCheck                                        `json:"health_check"`
	HTTPPort         *int64                                                                                                      `json:"http_port"`
	Image            *ListDeployments200ApplicationJSONDeploymentsSpecServicesImage                                              `json:"image"`
	InstanceCount    *int64                                                                                                      `json:"instance_count"`
	InstanceSizeSlug *ListDeployments200ApplicationJSONDeploymentsSpecServicesInstanceSizeSlugEnum                               `json:"instance_size_slug"`
	InternalPorts    []int64                                                                                                     `json:"internal_ports"`
	Name             string                                                                                                      `json:"name"`
	Routes           []ListDeployments200ApplicationJSONDeploymentsSpecServicesRoutesACriterionForRoutingHTTPTrafficToAComponent `json:"routes"`
	RunCommand       *string                                                                                                     `json:"run_command"`
	SourceDir        *string                                                                                                     `json:"source_dir"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnumUnset           ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnum = "UNSET"
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnumRunTime         ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnum = "RUN_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnumBuildTime       ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnum = "BUILD_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsTypeEnumGeneral ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsTypeEnum = "GENERAL"
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsTypeEnumSecret  ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsTypeEnum = "SECRET"
)

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvs struct {
	Key   string                                                                    `json:"key"`
	Scope *ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsScopeEnum `json:"scope"`
	Type  *ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvsTypeEnum  `json:"type"`
	Value *string                                                                   `json:"value"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesGit struct {
	Branch       *string `json:"branch"`
	RepoCloneURL *string `json:"repo_clone_url"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesGithub struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesGitlab struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImageRegistryTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImageRegistryTypeEnum = "DOCKER_HUB"
	ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImageRegistryTypeEnumDocr      ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImageRegistryTypeEnum = "DOCR"
)

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImage struct {
	Registry     *string                                                                           `json:"registry"`
	RegistryType *ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImageRegistryTypeEnum `json:"registry_type"`
	Repository   *string                                                                           `json:"repository"`
	Tag          *string                                                                           `json:"tag"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecStaticSites struct {
	BuildCommand     *string                                                                                                                                                                                       `json:"build_command"`
	CatchallDocument *string                                                                                                                                                                                       `json:"catchall_document"`
	Cors             *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors         `json:"cors"`
	DockerfilePath   *string                                                                                                                                                                                       `json:"dockerfile_path"`
	EnvironmentSlug  *string                                                                                                                                                                                       `json:"environment_slug"`
	Envs             []ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesEnvs                                                                                                                             `json:"envs"`
	ErrorDocument    *string                                                                                                                                                                                       `json:"error_document"`
	Git              *ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesGit                                                                                                                               `json:"git"`
	Github           *ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesGithub                                                                                                                            `json:"github"`
	Gitlab           *ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesGitlab                                                                                                                            `json:"gitlab"`
	Image            *ListDeployments200ApplicationJSONDeploymentsSpecStaticSitesImage                                                                                                                             `json:"image"`
	IndexDocument    *string                                                                                                                                                                                       `json:"index_document"`
	Name             string                                                                                                                                                                                        `json:"name"`
	OutputDir        *string                                                                                                                                                                                       `json:"output_dir"`
	Routes           []shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems `json:"routes"`
	RunCommand       *string                                                                                                                                                                                       `json:"run_command"`
	SourceDir        *string                                                                                                                                                                                       `json:"source_dir"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnumUnset           ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnum = "UNSET"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnumRunTime         ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnum = "RUN_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnumBuildTime       ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnum = "BUILD_TIME"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsTypeEnumGeneral ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsTypeEnum = "GENERAL"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsTypeEnumSecret  ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsTypeEnum = "SECRET"
)

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvs struct {
	Key   string                                                                `json:"key"`
	Scope *ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsScopeEnum `json:"scope"`
	Type  *ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvsTypeEnum  `json:"type"`
	Value *string                                                               `json:"value"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersGit struct {
	Branch       *string `json:"branch"`
	RepoCloneURL *string `json:"repo_clone_url"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersGithub struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersGitlab struct {
	Branch       *string `json:"branch"`
	DeployOnPush *bool   `json:"deploy_on_push"`
	Repo         *string `json:"repo"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersImageRegistryTypeEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONDeploymentsSpecWorkersImageRegistryTypeEnum = "DOCKER_HUB"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersImageRegistryTypeEnumDocr      ListDeployments200ApplicationJSONDeploymentsSpecWorkersImageRegistryTypeEnum = "DOCR"
)

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersImage struct {
	Registry     *string                                                                       `json:"registry"`
	RegistryType *ListDeployments200ApplicationJSONDeploymentsSpecWorkersImageRegistryTypeEnum `json:"registry_type"`
	Repository   *string                                                                       `json:"repository"`
	Tag          *string                                                                       `json:"tag"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum string

const (
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumBasicXxs       ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "basic-xxs"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumBasicXs        ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "basic-xs"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumBasicS         ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "basic-s"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumBasicM         ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "basic-m"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumProfessionalXs ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "professional-xs"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumProfessionalS  ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "professional-s"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumProfessionalM  ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "professional-m"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumProfessional1l ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "professional-1l"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumProfessionalL  ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "professional-l"
	ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnumProfessionalXl ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum = "professional-xl"
)

type ListDeployments200ApplicationJSONDeploymentsSpecWorkers struct {
	BuildCommand     *string                                                                      `json:"build_command"`
	DockerfilePath   *string                                                                      `json:"dockerfile_path"`
	EnvironmentSlug  *string                                                                      `json:"environment_slug"`
	Envs             []ListDeployments200ApplicationJSONDeploymentsSpecWorkersEnvs                `json:"envs"`
	Git              *ListDeployments200ApplicationJSONDeploymentsSpecWorkersGit                  `json:"git"`
	Github           *ListDeployments200ApplicationJSONDeploymentsSpecWorkersGithub               `json:"github"`
	Gitlab           *ListDeployments200ApplicationJSONDeploymentsSpecWorkersGitlab               `json:"gitlab"`
	Image            *ListDeployments200ApplicationJSONDeploymentsSpecWorkersImage                `json:"image"`
	InstanceCount    *int64                                                                       `json:"instance_count"`
	InstanceSizeSlug *ListDeployments200ApplicationJSONDeploymentsSpecWorkersInstanceSizeSlugEnum `json:"instance_size_slug"`
	Name             string                                                                       `json:"name"`
	RunCommand       *string                                                                      `json:"run_command"`
	SourceDir        *string                                                                      `json:"source_dir"`
}

type ListDeployments200ApplicationJSONDeploymentsSpecAppSpec struct {
	Databases   []ListDeployments200ApplicationJSONDeploymentsSpecDatabases   `json:"databases"`
	Domains     []ListDeployments200ApplicationJSONDeploymentsSpecDomains     `json:"domains"`
	Jobs        []ListDeployments200ApplicationJSONDeploymentsSpecJobs        `json:"jobs"`
	Name        string                                                        `json:"name"`
	Region      *ListDeployments200ApplicationJSONDeploymentsSpecRegionEnum   `json:"region"`
	Services    []ListDeployments200ApplicationJSONDeploymentsSpecServices    `json:"services"`
	StaticSites []ListDeployments200ApplicationJSONDeploymentsSpecStaticSites `json:"static_sites"`
	Workers     []ListDeployments200ApplicationJSONDeploymentsSpecWorkers     `json:"workers"`
}

type ListDeployments200ApplicationJSONDeploymentsStaticSites struct {
	Name             *string `json:"name"`
	SourceCommitHash *string `json:"source_commit_hash"`
}

type ListDeployments200ApplicationJSONDeploymentsWorkers struct {
	Name             *string `json:"name"`
	SourceCommitHash *string `json:"source_commit_hash"`
}

type ListDeployments200ApplicationJSONDeploymentsAnAppDeployment struct {
	Cause              *string                                                   `json:"cause"`
	ClonedFrom         *string                                                   `json:"cloned_from"`
	CreatedAt          *time.Time                                                `json:"created_at"`
	ID                 *string                                                   `json:"id"`
	Jobs               []ListDeployments200ApplicationJSONDeploymentsJobs        `json:"jobs"`
	Phase              *ListDeployments200ApplicationJSONDeploymentsPhaseEnum    `json:"phase"`
	PhaseLastUpdatedAt *time.Time                                                `json:"phase_last_updated_at"`
	Progress           *ListDeployments200ApplicationJSONDeploymentsProgress     `json:"progress"`
	Services           []ListDeployments200ApplicationJSONDeploymentsServices    `json:"services"`
	Spec               *ListDeployments200ApplicationJSONDeploymentsSpecAppSpec  `json:"spec"`
	StaticSites        []ListDeployments200ApplicationJSONDeploymentsStaticSites `json:"static_sites"`
	TierSlug           *string                                                   `json:"tier_slug"`
	UpdatedAt          *time.Time                                                `json:"updated_at"`
	Workers            []ListDeployments200ApplicationJSONDeploymentsWorkers     `json:"workers"`
}

type ListDeployments200ApplicationJSON struct {
	Deployments []ListDeployments200ApplicationJSONDeploymentsAnAppDeployment                               `json:"deployments"`
	Links       *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks `json:"links"`
	Meta        *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta  `json:"meta"`
}

type ListDeployments401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListDeploymentsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDeployments200ApplicationJSONObject                   *ListDeployments200ApplicationJSON
	ListDeployments401ApplicationJSONObject                   *ListDeployments401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
