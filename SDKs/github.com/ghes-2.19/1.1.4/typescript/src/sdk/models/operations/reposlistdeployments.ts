import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListDeploymentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListDeploymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=environment" })
  environment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sha" })
  sha?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=task" })
  task?: string;
}


export class ReposListDeploymentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListDeploymentsPathParams;

  @Metadata()
  queryParams: ReposListDeploymentsQueryParams;
}


export class ReposListDeploymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Deployment })
  deployments?: shared.Deployment[];
}
