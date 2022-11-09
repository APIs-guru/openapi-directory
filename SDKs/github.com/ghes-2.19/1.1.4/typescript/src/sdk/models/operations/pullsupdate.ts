import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsUpdateRequestBodyStateEnum {
    Open = "open"
,    Closed = "closed"
}


export class PullsUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=maintainer_can_modify" })
  maintainerCanModify?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: PullsUpdateRequestBodyStateEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PullsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsUpdateRequestBody;
}


export class PullsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullRequest?: shared.PullRequest;

  @Metadata()
  validationError?: shared.ValidationError;
}
