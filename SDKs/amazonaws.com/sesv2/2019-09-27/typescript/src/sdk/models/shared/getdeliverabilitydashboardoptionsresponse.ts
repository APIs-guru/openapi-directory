import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliverabilityDashboardAccountStatusEnum } from "./deliverabilitydashboardaccountstatusenum";
import { DomainDeliverabilityTrackingOption } from "./domaindeliverabilitytrackingoption";
import { DomainDeliverabilityTrackingOption } from "./domaindeliverabilitytrackingoption";


// GetDeliverabilityDashboardOptionsResponse
/** 
 * An object that shows the status of the Deliverability dashboard.
**/
export class GetDeliverabilityDashboardOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountStatus" })
  accountStatus?: DeliverabilityDashboardAccountStatusEnum;

  @Metadata({ data: "json, name=ActiveSubscribedDomains", elemType: shared.DomainDeliverabilityTrackingOption })
  activeSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  @Metadata({ data: "json, name=DashboardEnabled" })
  dashboardEnabled: boolean;

  @Metadata({ data: "json, name=PendingExpirationSubscribedDomains", elemType: shared.DomainDeliverabilityTrackingOption })
  pendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  @Metadata({ data: "json, name=SubscriptionExpiryDate" })
  subscriptionExpiryDate?: Date;
}
