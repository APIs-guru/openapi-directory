import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityDeleteThreadSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
  threadId: number;
}


export class ActivityDeleteThreadSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityDeleteThreadSubscriptionPathParams;
}


export class ActivityDeleteThreadSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
