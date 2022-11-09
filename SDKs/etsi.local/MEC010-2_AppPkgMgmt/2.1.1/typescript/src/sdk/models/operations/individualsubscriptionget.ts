import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IndividualSubscriptionGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class IndividualSubscriptionGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IndividualSubscriptionGetPathParams;
}


export class IndividualSubscriptionGetResponse extends SpeakeasyBase {
  @Metadata()
  appPkgSubscriptionInfo?: shared.AppPkgSubscriptionInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
