import { SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityDashboardAccountStatusEnum } from "./deliverabilitydashboardaccountstatusenum";
import { DomainDeliverabilityTrackingOption } from "./domaindeliverabilitytrackingoption";
/**
 * An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.
**/
export declare class GetDeliverabilityDashboardOptionsResponse extends SpeakeasyBase {
    accountStatus?: DeliverabilityDashboardAccountStatusEnum;
    activeSubscribedDomains?: DomainDeliverabilityTrackingOption[];
    dashboardEnabled: boolean;
    pendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];
    subscriptionExpiryDate?: Date;
}
