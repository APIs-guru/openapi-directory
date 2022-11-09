import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateCommitStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sha" })
  sha: string;
}

export enum ReposCreateCommitStatusRequestBodyStateEnum {
    Error = "error"
,    Failure = "failure"
,    Pending = "pending"
,    Success = "success"
}


export class ReposCreateCommitStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=state" })
  state: ReposCreateCommitStatusRequestBodyStateEnum;

  @Metadata({ data: "json, name=target_url" })
  targetUrl?: string;
}


export class ReposCreateCommitStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateCommitStatusPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateCommitStatusRequestBody;
}


export class ReposCreateCommitStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  status?: shared.Status;
}
