import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposSetStatusCheckContextsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposSetStatusCheckContextsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts" })
  contexts: string[];
}


export class ReposSetStatusCheckContextsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposSetStatusCheckContextsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposSetStatusCheckContextsRequestBody;
}


export class ReposSetStatusCheckContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  reposSetStatusCheckContexts200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
