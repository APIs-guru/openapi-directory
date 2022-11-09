import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDeploymentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class ListDeploymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListDeploymentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDeploymentsPathParams;

  @Metadata()
  queryParams: ListDeploymentsQueryParams;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum {
    Unknown = "UNKNOWN"
,    PendingBuild = "PENDING_BUILD"
,    Building = "BUILDING"
,    PendingDeploy = "PENDING_DEPLOY"
,    Deploying = "DEPLOYING"
,    Active = "ACTIVE"
,    Superseded = "SUPERSEDED"
,    Error = "ERROR"
,    Canceled = "CANCELED"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum {
    Unknown = "UNKNOWN"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Error = "ERROR"
,    Success = "SUCCESS"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=component_name" })
  componentName?: string;

  @Metadata({ data: "json, name=ended_at" })
  endedAt?: Date;

  @Metadata({ data: "json, name=message_base" })
  messageBase?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum;

  @Metadata({ data: "json, name=steps" })
  steps?: Map<string, any>[];
}


export class ListDeployments200ApplicationJsonAnAppDeploymentProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_steps" })
  errorSteps?: number;

  @Metadata({ data: "json, name=pending_steps" })
  pendingSteps?: number;

  @Metadata({ data: "json, name=running_steps" })
  runningSteps?: number;

  @Metadata({ data: "json, name=steps", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle })
  steps?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[];

  @Metadata({ data: "json, name=success_steps" })
  successSteps?: number;

  @Metadata({ data: "json, name=summary_steps", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems })
  summarySteps?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[];

  @Metadata({ data: "json, name=total_steps" })
  totalSteps?: number;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum {
    Unset = "UNSET"
,    Mysql = "MYSQL"
,    Pg = "PG"
,    Redis = "REDIS"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster_name" })
  clusterName?: string;

  @Metadata({ data: "json, name=db_name" })
  dbName?: string;

  @Metadata({ data: "json, name=db_user" })
  dbUser?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=production" })
  production?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Default = "DEFAULT"
,    Primary = "PRIMARY"
,    Alias = "ALIAS"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum;

  @Metadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum {
    BasicXxs = "basic-xxs"
,    BasicXs = "basic-xs"
,    BasicS = "basic-s"
,    BasicM = "basic-m"
,    ProfessionalXs = "professional-xs"
,    ProfessionalS = "professional-s"
,    ProfessionalM = "professional-m"
,    Professional1l = "professional-1l"
,    ProfessionalL = "professional-l"
,    ProfessionalXl = "professional-xl"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum {
    Unspecified = "UNSPECIFIED"
,    PreDeploy = "PRE_DEPLOY"
,    PostDeploy = "POST_DEPLOY"
,    FailedDeploy = "FAILED_DEPLOY"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit;

  @Metadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab;

  @Metadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum {
    Ams = "ams"
,    Nyc = "nyc"
,    Fra = "fra"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=allow_origins", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins })
  allowOrigins?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins[];

  @Metadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=max_age" })
  maxAge?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=failure_threshold" })
  failureThreshold?: number;

  @Metadata({ data: "json, name=http_path" })
  httpPath?: string;

  @Metadata({ data: "json, name=initial_delay_seconds" })
  initialDelaySeconds?: number;

  @Metadata({ data: "json, name=period_seconds" })
  periodSeconds?: number;

  @Metadata({ data: "json, name=success_threshold" })
  successThreshold?: number;

  @Metadata({ data: "json, name=timeout_seconds" })
  timeoutSeconds?: number;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum {
    BasicXxs = "basic-xxs"
,    BasicXs = "basic-xs"
,    BasicS = "basic-s"
,    BasicM = "basic-m"
,    ProfessionalXs = "professional-xs"
,    ProfessionalS = "professional-s"
,    ProfessionalM = "professional-m"
,    Professional1l = "professional-1l"
,    ProfessionalL = "professional-l"
,    ProfessionalXl = "professional-xl"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=cors" })
  cors?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit;

  @Metadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab;

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck;

  @Metadata({ data: "json, name=http_port" })
  httpPort?: number;

  @Metadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=internal_ports" })
  internalPorts?: number[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=routes", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent })
  routes?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[];

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=catchall_document" })
  catchallDocument?: string;

  @Metadata({ data: "json, name=cors" })
  cors?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs[];

  @Metadata({ data: "json, name=error_document" })
  errorDocument?: string;

  @Metadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit;

  @Metadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab;

  @Metadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage;

  @Metadata({ data: "json, name=index_document" })
  indexDocument?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=output_dir" })
  outputDir?: string;

  @Metadata({ data: "json, name=routes", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems })
  routes?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems[];

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum {
    BasicXxs = "basic-xxs"
,    BasicXs = "basic-xs"
,    BasicS = "basic-s"
,    BasicM = "basic-m"
,    ProfessionalXs = "professional-xs"
,    ProfessionalS = "professional-s"
,    ProfessionalM = "professional-m"
,    Professional1l = "professional-1l"
,    ProfessionalL = "professional-l"
,    ProfessionalXl = "professional-xl"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit;

  @Metadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab;

  @Metadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}


// ListDeployments200ApplicationJsonAnAppDeploymentAppSpec
/** 
 * The desired configuration of an application.
**/
export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=databases", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases })
  databases?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases[];

  @Metadata({ data: "json, name=domains", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains })
  domains?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains[];

  @Metadata({ data: "json, name=jobs", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs })
  jobs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=region" })
  region?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum;

  @Metadata({ data: "json, name=services", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices })
  services?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices[];

  @Metadata({ data: "json, name=static_sites", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites })
  staticSites?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites[];

  @Metadata({ data: "json, name=workers", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers })
  workers?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers[];
}


export class ListDeployments200ApplicationJsonAnAppDeploymentStaticSites extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentWorkers extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=cloned_from" })
  clonedFrom?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobs", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentJobs })
  jobs?: ListDeployments200ApplicationJsonAnAppDeploymentJobs[];

  @Metadata({ data: "json, name=phase" })
  phase?: ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum;

  @Metadata({ data: "json, name=phase_last_updated_at" })
  phaseLastUpdatedAt?: Date;

  @Metadata({ data: "json, name=progress" })
  progress?: ListDeployments200ApplicationJsonAnAppDeploymentProgress;

  @Metadata({ data: "json, name=services", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentServices })
  services?: ListDeployments200ApplicationJsonAnAppDeploymentServices[];

  @Metadata({ data: "json, name=spec" })
  spec?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpec;

  @Metadata({ data: "json, name=static_sites", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentStaticSites })
  staticSites?: ListDeployments200ApplicationJsonAnAppDeploymentStaticSites[];

  @Metadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=workers", elemType: operations.ListDeployments200ApplicationJsonAnAppDeploymentWorkers })
  workers?: ListDeployments200ApplicationJsonAnAppDeploymentWorkers[];
}


export class ListDeployments200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: operations.ListDeployments200ApplicationJsonAnAppDeployment })
  deployments?: ListDeployments200ApplicationJsonAnAppDeployment[];

  @Metadata({ data: "json, name=links" })
  links?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta;
}


export class ListDeployments401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDeploymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDeployments200ApplicationJsonObject?: ListDeployments200ApplicationJson;

  @Metadata()
  listDeployments401ApplicationJsonObject?: ListDeployments401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
