import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateCommitStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha" })
  sha: string;
}

export enum ReposCreateCommitStatusRequestBodyStateEnum {
    Error = "error",
    Failure = "failure",
    Pending = "pending",
    Success = "success"
}


export class ReposCreateCommitStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ReposCreateCommitStatusRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=target_url" })
  targetUrl?: string;
}


export class ReposCreateCommitStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateCommitStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateCommitStatusRequestBody;
}


export class ReposCreateCommitStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  status?: shared.Status;
}
