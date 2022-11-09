import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSubscriptionDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionDataPathParams;
}


export class GetSubscriptionDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionDetails?: shared.SubscriptionDetails;
}
