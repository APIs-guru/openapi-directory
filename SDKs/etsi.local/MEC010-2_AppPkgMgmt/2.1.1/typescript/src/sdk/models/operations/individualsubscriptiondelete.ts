import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IndividualSubscriptionDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class IndividualSubscriptionDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IndividualSubscriptionDeletePathParams;
}


export class IndividualSubscriptionDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
