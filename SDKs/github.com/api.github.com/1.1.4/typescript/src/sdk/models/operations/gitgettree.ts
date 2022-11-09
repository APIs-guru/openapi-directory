import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitGetTreePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tree_sha" })
  treeSha: string;
}


export class GitGetTreeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: string;
}


export class GitGetTreeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitGetTreePathParams;

  @Metadata()
  queryParams: GitGetTreeQueryParams;
}


export class GitGetTreeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gitTree?: shared.GitTree;

  @Metadata()
  validationError?: shared.ValidationError;
}
