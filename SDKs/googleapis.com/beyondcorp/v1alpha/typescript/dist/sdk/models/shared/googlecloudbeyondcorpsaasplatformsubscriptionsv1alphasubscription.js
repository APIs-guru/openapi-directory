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
export var GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum;
(function (GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum) {
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum["SkuUnspecified"] = "SKU_UNSPECIFIED";
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum["BceStandardSku"] = "BCE_STANDARD_SKU";
})(GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum || (GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum = {}));
export var GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum;
(function (GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum) {
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum["Active"] = "ACTIVE";
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum["Inactive"] = "INACTIVE";
})(GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum || (GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum = {}));
export var GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum;
(function (GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum) {
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum["Trial"] = "TRIAL";
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum["Paid"] = "PAID";
    GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum["Allowlist"] = "ALLOWLIST";
})(GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum || (GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum = {}));
// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription
/**
 * A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
**/
var GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription, _super);
    function GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoRenewEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "autoRenewEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seatCount" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "seatCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.prototype, "type", void 0);
    return GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription };
// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput
/**
 * A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
**/
var GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput, _super);
    function GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput.prototype, "type", void 0);
    return GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput };
