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
export var GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum;
(function (GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum) {
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum["LinkProposalInitiatingProductUnspecified"] = "LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum["GoogleAnalytics"] = "GOOGLE_ANALYTICS";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum["LinkedProduct"] = "LINKED_PRODUCT";
})(GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum || (GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum = {}));
export var GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum;
(function (GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum) {
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum["LinkProposalStateUnspecified"] = "LINK_PROPOSAL_STATE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum["AwaitingReviewFromGoogleAnalytics"] = "AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum["AwaitingReviewFromLinkedProduct"] = "AWAITING_REVIEW_FROM_LINKED_PRODUCT";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum["Withdrawn"] = "WITHDRAWN";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum["Declined"] = "DECLINED";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum["Expired"] = "EXPIRED";
    GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum["Obsolete"] = "OBSOLETE";
})(GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum || (GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = {}));
// GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails
/**
 * Status information for a link proposal.
**/
var GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails, _super);
    function GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkProposalInitiatingProduct" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails.prototype, "linkProposalInitiatingProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkProposalState" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails.prototype, "linkProposalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestorEmail" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails.prototype, "requestorEmail", void 0);
    return GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails };
