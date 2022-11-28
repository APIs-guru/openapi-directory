import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSubscriptionDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionDataPathParams;
}


export class GetSubscriptionDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptionDetails?: shared.SubscriptionDetails;
}
