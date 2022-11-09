import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesListLabelsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesListLabelsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class IssuesListLabelsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesListLabelsForRepoPathParams;

  @Metadata()
  queryParams: IssuesListLabelsForRepoQueryParams;
}


export class IssuesListLabelsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Label })
  labels?: shared.Label[];
}
