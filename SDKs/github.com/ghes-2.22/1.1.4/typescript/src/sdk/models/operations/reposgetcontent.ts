import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetContentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class ReposGetContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetContentPathParams;

  @Metadata()
  queryParams: ReposGetContentQueryParams;
}


export class ReposGetContentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reposGetContent200ApplicationJsonOneOf?: any;
}
