import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposAddStatusCheckContextsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposAddStatusCheckContextsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts" })
  contexts: string[];
}


export class ReposAddStatusCheckContextsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposAddStatusCheckContextsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposAddStatusCheckContextsRequestBody;
}


export class ReposAddStatusCheckContextsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reposAddStatusCheckContexts200ApplicationJsonStrings?: string[];

  @Metadata()
  validationError?: shared.ValidationError;
}
