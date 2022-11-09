import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscriptionsGetResponse extends SpeakeasyBase {
  @Metadata()
  appPkgSubscriptionLinkList?: shared.AppPkgSubscriptionLinkList;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
