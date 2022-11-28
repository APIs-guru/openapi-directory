var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityDashboardAccountStatusEnum } from "./deliverabilitydashboardaccountstatusenum";
import { DomainDeliverabilityTrackingOption } from "./domaindeliverabilitytrackingoption";
// GetDeliverabilityDashboardOptionsResponse
/**
 * An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.
**/
var GetDeliverabilityDashboardOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDeliverabilityDashboardOptionsResponse, _super);
    function GetDeliverabilityDashboardOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountStatus" }),
        __metadata("design:type", String)
    ], GetDeliverabilityDashboardOptionsResponse.prototype, "accountStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveSubscribedDomains", elemType: DomainDeliverabilityTrackingOption }),
        __metadata("design:type", Array)
    ], GetDeliverabilityDashboardOptionsResponse.prototype, "activeSubscribedDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DashboardEnabled" }),
        __metadata("design:type", Boolean)
    ], GetDeliverabilityDashboardOptionsResponse.prototype, "dashboardEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingExpirationSubscribedDomains", elemType: DomainDeliverabilityTrackingOption }),
        __metadata("design:type", Array)
    ], GetDeliverabilityDashboardOptionsResponse.prototype, "pendingExpirationSubscribedDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubscriptionExpiryDate" }),
        __metadata("design:type", Date)
    ], GetDeliverabilityDashboardOptionsResponse.prototype, "subscriptionExpiryDate", void 0);
    return GetDeliverabilityDashboardOptionsResponse;
}(SpeakeasyBase));
export { GetDeliverabilityDashboardOptionsResponse };
