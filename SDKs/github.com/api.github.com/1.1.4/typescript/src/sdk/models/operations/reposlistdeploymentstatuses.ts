import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListDeploymentStatusesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListDeploymentStatusesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListDeploymentStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListDeploymentStatusesPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListDeploymentStatusesQueryParams;
}


export class ReposListDeploymentStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.DeploymentStatus })
  deploymentStatuses?: shared.DeploymentStatus[];
}
