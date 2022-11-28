import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsUpdateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}


export class PullsUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=maintainer_can_modify" })
  maintainerCanModify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PullsUpdateRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PullsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsUpdateRequestBody;
}


export class PullsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequest?: shared.PullRequest;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
