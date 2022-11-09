import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiescors";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiesroutesitems";

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum {
    Unset = "UNSET"
,    Mysql = "MYSQL"
,    Pg = "PG"
,    Redis = "REDIS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster_name" })
  clusterName?: string;

  @Metadata({ data: "json, name=db_name" })
  dbName?: string;

  @Metadata({ data: "json, name=db_user" })
  dbUser?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=production" })
  production?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Default = "DEFAULT"
,    Primary = "PRIMARY"
,    Alias = "ALIAS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum;

  @Metadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum {
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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum {
    Unspecified = "UNSPECIFIED"
,    PreDeploy = "PRE_DEPLOY"
,    PostDeploy = "POST_DEPLOY"
,    FailedDeploy = "FAILED_DEPLOY"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGitlab;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum {
    Ams = "ams"
,    Nyc = "nyc"
,    Fra = "fra"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCors extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=allow_origins", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins })
  allowOrigins?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins[];

  @Metadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=max_age" })
  maxAge?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck extends SpeakeasyBase {
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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesACriterionForRoutingHttpTrafficToAComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=cors" })
  cors?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCors;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab;

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck;

  @Metadata({ data: "json, name=http_port" })
  httpPort?: number;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=internal_ports" })
  internalPorts?: number[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=routes", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesACriterionForRoutingHttpTrafficToAComponent })
  routes?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesACriterionForRoutingHttpTrafficToAComponent[];

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs[];

  @Metadata({ data: "json, name=error_document" })
  errorDocument?: string;

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGitlab;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImage;

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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsScopeEnum {
    Unset = "UNSET"
,    RunTime = "RUN_TIME"
,    BuildTime = "BUILD_TIME"
,    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsTypeEnum {
    General = "GENERAL"
,    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGit extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGithub extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGitlab extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB"
,    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImageRegistryTypeEnum;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @Metadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @Metadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @Metadata({ data: "json, name=envs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs[];

  @Metadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGit;

  @Metadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGithub;

  @Metadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGitlab;

  @Metadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImage;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=run_command" })
  runCommand?: string;

  @Metadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}


// Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec
/** 
 * The desired configuration of an application.
**/
export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=databases", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases })
  databases?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases[];

  @Metadata({ data: "json, name=domains", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains })
  domains?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains[];

  @Metadata({ data: "json, name=jobs", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs })
  jobs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=region" })
  region?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum;

  @Metadata({ data: "json, name=services", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices })
  services?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices[];

  @Metadata({ data: "json, name=static_sites", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites })
  staticSites?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites[];

  @Metadata({ data: "json, name=workers", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers })
  workers?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers[];
}
