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
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { ProvisionedProductPlanStatusEnum } from "./provisionedproductplanstatusenum";
import { Tag } from "./tag";
// ProvisionedProductPlanDetails
/**
 * Information about a plan.
**/
var ProvisionedProductPlanDetails = /** @class */ (function (_super) {
    __extends(ProvisionedProductPlanDetails, _super);
    function ProvisionedProductPlanDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], ProvisionedProductPlanDetails.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationArns" }),
        __metadata("design:type", Array)
    ], ProvisionedProductPlanDetails.prototype, "notificationArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PathId" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "pathId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlanId" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlanName" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "planName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlanType" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "planType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionProductId" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "provisionProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionProductName" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "provisionProductName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "provisioningArtifactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisioningParameters", elemType: UpdateProvisioningParameter }),
        __metadata("design:type", Array)
    ], ProvisionedProductPlanDetails.prototype, "provisioningParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], ProvisionedProductPlanDetails.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], ProvisionedProductPlanDetails.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedTime" }),
        __metadata("design:type", Date)
    ], ProvisionedProductPlanDetails.prototype, "updatedTime", void 0);
    return ProvisionedProductPlanDetails;
}(SpeakeasyBase));
export { ProvisionedProductPlanDetails };
