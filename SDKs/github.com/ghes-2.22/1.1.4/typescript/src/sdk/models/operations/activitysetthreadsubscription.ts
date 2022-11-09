import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivitySetThreadSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
  threadId: number;
}


export class ActivitySetThreadSubscriptionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignored" })
  ignored?: boolean;
}


export class ActivitySetThreadSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivitySetThreadSubscriptionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActivitySetThreadSubscriptionRequestBody;
}


export class ActivitySetThreadSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  threadSubscription?: shared.ThreadSubscription;
}
