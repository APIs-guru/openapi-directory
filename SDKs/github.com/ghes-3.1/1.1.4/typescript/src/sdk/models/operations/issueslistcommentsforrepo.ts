import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesListCommentsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesListCommentsForRepoDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class IssuesListCommentsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: IssuesListCommentsForRepoDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class IssuesListCommentsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesListCommentsForRepoPathParams;

  @Metadata()
  queryParams: IssuesListCommentsForRepoQueryParams;
}


export class IssuesListCommentsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.IssueComment })
  issueComments?: shared.IssueComment[];

  @Metadata()
  validationError?: shared.ValidationError;
}
