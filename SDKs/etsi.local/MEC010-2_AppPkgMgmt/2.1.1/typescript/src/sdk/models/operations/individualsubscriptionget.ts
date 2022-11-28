import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IndividualSubscriptionGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class IndividualSubscriptionGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IndividualSubscriptionGetPathParams;
}


export class IndividualSubscriptionGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appPkgSubscriptionInfo?: shared.AppPkgSubscriptionInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
