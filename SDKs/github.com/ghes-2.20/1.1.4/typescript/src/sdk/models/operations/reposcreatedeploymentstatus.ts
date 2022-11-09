import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateDeploymentStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposCreateDeploymentStatusRequestBodyEnvironmentEnum {
    Production = "production"
,    Staging = "staging"
,    Qa = "qa"
}

export enum ReposCreateDeploymentStatusRequestBodyStateEnum {
    Error = "error"
,    Failure = "failure"
,    Inactive = "inactive"
,    InProgress = "in_progress"
,    Queued = "queued"
,    Pending = "pending"
,    Success = "success"
}


export class ReposCreateDeploymentStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_inactive" })
  autoInactive?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;

  @Metadata({ data: "json, name=environment_url" })
  environmentUrl?: string;

  @Metadata({ data: "json, name=log_url" })
  logUrl?: string;

  @Metadata({ data: "json, name=state" })
  state: ReposCreateDeploymentStatusRequestBodyStateEnum;

  @Metadata({ data: "json, name=target_url" })
  targetUrl?: string;
}


export class ReposCreateDeploymentStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateDeploymentStatusPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDeploymentStatusRequestBody;
}


export class ReposCreateDeploymentStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deploymentStatus?: shared.DeploymentStatus;

  @Metadata()
  validationError?: shared.ValidationError;
}
