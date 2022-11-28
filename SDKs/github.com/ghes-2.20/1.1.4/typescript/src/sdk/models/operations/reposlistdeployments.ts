import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListDeploymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListDeploymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=task" })
  task?: string;
}


export class ReposListDeploymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListDeploymentsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListDeploymentsQueryParams;
}


export class ReposListDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Deployment })
  deployments?: shared.Deployment[];
}
