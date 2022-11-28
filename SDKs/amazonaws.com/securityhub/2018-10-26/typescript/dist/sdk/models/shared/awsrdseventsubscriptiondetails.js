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
// AwsRdsEventSubscriptionDetails
/**
 * Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.
**/
var AwsRdsEventSubscriptionDetails = /** @class */ (function (_super) {
    __extends(AwsRdsEventSubscriptionDetails, _super);
    function AwsRdsEventSubscriptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustSubscriptionId" }),
        __metadata("design:type", String)
    ], AwsRdsEventSubscriptionDetails.prototype, "custSubscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerAwsId" }),
        __metadata("design:type", String)
    ], AwsRdsEventSubscriptionDetails.prototype, "customerAwsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], AwsRdsEventSubscriptionDetails.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventCategoriesList" }),
        __metadata("design:type", Array)
    ], AwsRdsEventSubscriptionDetails.prototype, "eventCategoriesList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventSubscriptionArn" }),
        __metadata("design:type", String)
    ], AwsRdsEventSubscriptionDetails.prototype, "eventSubscriptionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnsTopicArn" }),
        __metadata("design:type", String)
    ], AwsRdsEventSubscriptionDetails.prototype, "snsTopicArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceIdsList" }),
        __metadata("design:type", Array)
    ], AwsRdsEventSubscriptionDetails.prototype, "sourceIdsList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceType" }),
        __metadata("design:type", String)
    ], AwsRdsEventSubscriptionDetails.prototype, "sourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsRdsEventSubscriptionDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubscriptionCreationTime" }),
        __metadata("design:type", String)
    ], AwsRdsEventSubscriptionDetails.prototype, "subscriptionCreationTime", void 0);
    return AwsRdsEventSubscriptionDetails;
}(SpeakeasyBase));
export { AwsRdsEventSubscriptionDetails };
