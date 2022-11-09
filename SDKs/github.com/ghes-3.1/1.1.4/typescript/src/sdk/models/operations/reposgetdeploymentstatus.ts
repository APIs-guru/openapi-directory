import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetDeploymentStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=status_id" })
  statusId: number;
}


export class ReposGetDeploymentStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetDeploymentStatusPathParams;
}


export class ReposGetDeploymentStatus415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposGetDeploymentStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  deploymentStatus?: shared.DeploymentStatus;

  @Metadata()
  reposGetDeploymentStatus415ApplicationJsonObject?: ReposGetDeploymentStatus415ApplicationJson;
}
