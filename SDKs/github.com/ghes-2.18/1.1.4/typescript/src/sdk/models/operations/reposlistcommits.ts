import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListCommitsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListCommitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sha" })
  sha?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=until" })
  until?: Date;
}


export class ReposListCommitsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListCommitsPathParams;

  @Metadata()
  queryParams: ReposListCommitsQueryParams;
}


export class ReposListCommitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Commit })
  commits?: shared.Commit[];

  @Metadata()
  scimError?: shared.ScimError;
}
