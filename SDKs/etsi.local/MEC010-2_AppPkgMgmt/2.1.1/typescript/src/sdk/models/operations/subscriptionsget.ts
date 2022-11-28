import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscriptionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appPkgSubscriptionLinkList?: shared.AppPkgSubscriptionLinkList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
