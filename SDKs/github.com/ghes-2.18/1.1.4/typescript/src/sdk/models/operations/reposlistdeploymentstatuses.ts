import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListDeploymentStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListDeploymentStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListDeploymentStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListDeploymentStatusesPathParams;

  @Metadata()
  queryParams: ReposListDeploymentStatusesQueryParams;
}


export class ReposListDeploymentStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.DeploymentStatus })
  deploymentStatuses?: shared.DeploymentStatus[];
}
