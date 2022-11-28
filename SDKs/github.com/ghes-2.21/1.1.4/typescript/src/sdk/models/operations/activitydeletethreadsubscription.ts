import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityDeleteThreadSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
  threadId: number;
}


export class ActivityDeleteThreadSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityDeleteThreadSubscriptionPathParams;
}


export class ActivityDeleteThreadSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
