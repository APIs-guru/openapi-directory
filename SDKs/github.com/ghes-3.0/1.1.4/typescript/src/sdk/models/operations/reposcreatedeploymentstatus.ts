import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateDeploymentStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposCreateDeploymentStatusRequestBodyEnvironmentEnum {
    Production = "production",
    Staging = "staging",
    Qa = "qa"
}

export enum ReposCreateDeploymentStatusRequestBodyStateEnum {
    Error = "error",
    Failure = "failure",
    Inactive = "inactive",
    InProgress = "in_progress",
    Queued = "queued",
    Pending = "pending",
    Success = "success"
}


export class ReposCreateDeploymentStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_inactive" })
  autoInactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=environment_url" })
  environmentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=log_url" })
  logUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ReposCreateDeploymentStatusRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=target_url" })
  targetUrl?: string;
}


export class ReposCreateDeploymentStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateDeploymentStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDeploymentStatusRequestBody;
}


export class ReposCreateDeploymentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deploymentStatus?: shared.DeploymentStatus;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
