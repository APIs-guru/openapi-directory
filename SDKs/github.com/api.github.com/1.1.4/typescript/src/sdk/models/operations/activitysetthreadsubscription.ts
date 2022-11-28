import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivitySetThreadSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
  threadId: number;
}


export class ActivitySetThreadSubscriptionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignored" })
  ignored?: boolean;
}


export class ActivitySetThreadSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivitySetThreadSubscriptionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActivitySetThreadSubscriptionRequestBody;
}


export class ActivitySetThreadSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  threadSubscription?: shared.ThreadSubscription;
}
