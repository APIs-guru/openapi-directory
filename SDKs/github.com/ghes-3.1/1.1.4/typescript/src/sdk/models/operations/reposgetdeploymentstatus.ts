import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetDeploymentStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status_id" })
  statusId: number;
}


export class ReposGetDeploymentStatus415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReposGetDeploymentStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetDeploymentStatusPathParams;
}


export class ReposGetDeploymentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  deploymentStatus?: shared.DeploymentStatus;

  @SpeakeasyMetadata()
  reposGetDeploymentStatus415ApplicationJsonObject?: ReposGetDeploymentStatus415ApplicationJson;
}
