import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesListEventsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesListEventsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class IssuesListEventsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesListEventsForRepoPathParams;

  @Metadata()
  queryParams: IssuesListEventsForRepoQueryParams;
}


export class IssuesListEventsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.IssueEvent })
  issueEvents?: shared.IssueEvent[];

  @Metadata()
  validationError?: shared.ValidationError;
}
