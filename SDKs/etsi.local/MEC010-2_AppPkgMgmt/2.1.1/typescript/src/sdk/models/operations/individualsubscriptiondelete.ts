import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IndividualSubscriptionDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class IndividualSubscriptionDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IndividualSubscriptionDeletePathParams;
}


export class IndividualSubscriptionDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
