import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposRemoveStatusCheckContextsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRemoveStatusCheckContextsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts" })
  contexts: string[];
}


export class ReposRemoveStatusCheckContextsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRemoveStatusCheckContextsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposRemoveStatusCheckContextsRequestBody;
}


export class ReposRemoveStatusCheckContextsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reposRemoveStatusCheckContexts200ApplicationJsonStrings?: string[];

  @Metadata()
  validationError?: shared.ValidationError;
}
