import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitGetTreePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tree_sha" })
  treeSha: string;
}


export class GitGetTreeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: string;
}


export class GitGetTreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitGetTreePathParams;

  @SpeakeasyMetadata()
  queryParams: GitGetTreeQueryParams;
}


export class GitGetTreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gitTree?: shared.GitTree;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
