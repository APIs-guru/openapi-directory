import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsListCommitsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsListCommitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GistsListCommitsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsListCommitsPathParams;

  @Metadata()
  queryParams: GistsListCommitsQueryParams;
}


export class GistsListCommitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.GistCommit })
  gistCommits?: shared.GistCommit[];
}
