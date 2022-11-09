import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityGetThreadSubscriptionForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
  threadId: number;
}


export class ActivityGetThreadSubscriptionForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityGetThreadSubscriptionForAuthenticatedUserPathParams;
}


export class ActivityGetThreadSubscriptionForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  threadSubscription?: shared.ThreadSubscription;
}
