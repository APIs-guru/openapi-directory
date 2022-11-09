import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitGetAllRefsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class GitGetAllRefsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GitGetAllRefsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitGetAllRefsPathParams;

  @Metadata()
  queryParams: GitGetAllRefsQueryParams;
}


export class GitGetAllRefsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.GitRef })
  gitRefs?: shared.GitRef[];
}
