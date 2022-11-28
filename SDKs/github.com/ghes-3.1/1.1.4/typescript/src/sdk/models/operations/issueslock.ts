import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesLockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum IssuesLockRequestBodyLockReasonEnum {
    OffTopic = "off-topic",
    TooHeated = "too heated",
    Resolved = "resolved",
    Spam = "spam"
}


export class IssuesLockRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lock_reason" })
  lockReason?: IssuesLockRequestBodyLockReasonEnum;
}


export class IssuesLockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesLockPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesLockRequestBody;
}


export class IssuesLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
