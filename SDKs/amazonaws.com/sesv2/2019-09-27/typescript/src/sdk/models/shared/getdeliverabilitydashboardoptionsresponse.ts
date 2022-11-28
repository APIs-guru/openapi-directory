import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityDashboardAccountStatusEnum } from "./deliverabilitydashboardaccountstatusenum";
import { DomainDeliverabilityTrackingOption } from "./domaindeliverabilitytrackingoption";



// GetDeliverabilityDashboardOptionsResponse
/** 
 * An object that shows the status of the Deliverability dashboard.
**/
export class GetDeliverabilityDashboardOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountStatus" })
  accountStatus?: DeliverabilityDashboardAccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ActiveSubscribedDomains", elemType: DomainDeliverabilityTrackingOption })
  activeSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  @SpeakeasyMetadata({ data: "json, name=DashboardEnabled" })
  dashboardEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=PendingExpirationSubscribedDomains", elemType: DomainDeliverabilityTrackingOption })
  pendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  @SpeakeasyMetadata({ data: "json, name=SubscriptionExpiryDate" })
  subscriptionExpiryDate?: Date;
}
