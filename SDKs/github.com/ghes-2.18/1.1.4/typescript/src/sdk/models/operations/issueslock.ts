import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesLockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesLockRequestBodyLockReasonEnum {
    OffTopic = "off-topic"
,    TooHeated = "too heated"
,    Resolved = "resolved"
,    Spam = "spam"
}


export class IssuesLockRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=lock_reason" })
  lockReason?: IssuesLockRequestBodyLockReasonEnum;
}


export class IssuesLockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesLockPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesLockRequestBody;
}


export class IssuesLockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationError?: shared.ValidationError;
}
