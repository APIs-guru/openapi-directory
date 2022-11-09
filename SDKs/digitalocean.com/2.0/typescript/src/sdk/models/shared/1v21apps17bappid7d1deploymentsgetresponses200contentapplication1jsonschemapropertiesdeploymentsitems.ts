import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesprogresspropertiesstepsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiescors";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiesroutesitems";


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum {
    Unknown = "UNKNOWN"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Error = "ERROR"
,    Success = "SUCCESS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=component_name" })
  componentName?: string;

  @Metadata({ data: "json, name=ended_at" })
  endedAt?: Date;

  @Metadata({ data: "json, name=message_base" })
  messageBase?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum;

  @Metadata({ data: "json, name=steps" })
  steps?: Map<string, any>[];
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_steps" })
  errorSteps?: number;

  @Metadata({ data: "json, name=pending_steps" })
  pendingSteps?: number;

  @Metadata({ data: "json, name=running_steps" })
  runningSteps?: number;

  @Metadata({ data: "json, name=steps", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle })
  steps?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[];

  @Metadata({ data: "json, name=success_steps" })
  successSteps?: number;

  @Metadata({ data: "json, name=summary_steps", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems })
  summarySteps?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[];

  @Metadata({ data: "json, name=total_steps" })
  totalSteps?: number;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum {
    Unset = "UNSET"
,    Mysql = "MYSQL"
,    Pg = "PG"
,    Redis = "REDIS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster_name" })
  clusterName?: string;

  @Metadata({ data: "json, name=db_name" })
  dbName?: string;

  @Metadata({ data: "json, name=db_user" })
  dbUser?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=production" })
  production?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Default = "DEFAULT"
,    Primary = "PRIMARY"
,    Alias = "ALIAS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum;

  @Metadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum {
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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum {
    Unspecified = "UNSPECIFIED"
,    PreDeploy = "PRE_DEPLOY"
,    PostDeploy = "POST_DEPLOY"
,    FailedDeploy = "FAILED_DEPLOY"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum {
    Ams = "ams"
,    Nyc = "nyc"
,    Fra = "fra"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=allow_origins", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins })
  allowOrigins?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins[];

  @Metadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=max_age" })
  maxAge?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck extends SpeakeasyBase {
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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=cors" })
  cors?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab;

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck;

  @Metadata({ data: "json, name=http_port" })
  httpPort?: number;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=internal_ports" })
  internalPorts?: number[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=routes", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent })
  routes?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[];

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=catchall_document" })
  catchallDocument?: string;

  @Metadata({ data: "json, name=cors" })
  cors?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs[];

  @Metadata({ data: "json, name=error_document" })
  errorDocument?: string;

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage;

  @Metadata({ data: "json, name=index_document" })
  indexDocument?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=output_dir" })
  outputDir?: string;

  @Metadata({ data: "json, name=routes", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems })
  routes?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems[];

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}


// Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec
/** 
 * The desired configuration of an application.
**/
export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=databases", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases })
  databases?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases[];

  @Metadata({ data: "json, name=domains", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains })
  domains?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains[];

  @Metadata({ data: "json, name=jobs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs })
  jobs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=region" })
  region?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum;

  @Metadata({ data: "json, name=services", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices })
  services?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices[];

  @Metadata({ data: "json, name=static_sites", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites })
  staticSites?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites[];

  @Metadata({ data: "json, name=workers", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers })
  workers?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers[];
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=cloned_from" })
  clonedFrom?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs })
  jobs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs[];

  @Metadata({ data: "json, name=phase" })
  phase?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum;

  @Metadata({ data: "json, name=phase_last_updated_at" })
  phaseLastUpdatedAt?: Date;

  @Metadata({ data: "json, name=progress" })
  progress?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress;

  @Metadata({ data: "json, name=services", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices })
  services?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices[];

  @Metadata({ data: "json, name=spec" })
  spec?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec;

  @Metadata({ data: "json, name=static_sites", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites })
  staticSites?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites[];

  @Metadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=workers", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers })
  workers?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers[];
}
