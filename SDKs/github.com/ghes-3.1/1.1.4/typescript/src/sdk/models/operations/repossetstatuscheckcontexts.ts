import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposSetStatusCheckContextsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposSetStatusCheckContextsRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts" })
  contexts: string[];
}


export class ReposSetStatusCheckContextsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposSetStatusCheckContextsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ReposSetStatusCheckContextsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reposSetStatusCheckContexts200ApplicationJsonStrings?: string[];

  @Metadata()
  validationError?: shared.ValidationError;
}
