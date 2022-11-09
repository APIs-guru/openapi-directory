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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductStatusEnum } from "./provisionedproductstatusenum";
// ProvisionedProductDetail
/**
 * Information about a provisioned product.
**/
var ProvisionedProductDetail = /** @class */ (function (_super) {
    __extends(ProvisionedProductDetail, _super);
    function ProvisionedProductDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], ProvisionedProductDetail.prototype, "createdTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=IdempotencyToken" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "idempotencyToken", void 0);
    __decorate([
        Metadata({ data: "json, name=LastProvisioningRecordId" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "lastProvisioningRecordId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastRecordId" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "lastRecordId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastSuccessfulProvisioningRecordId" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "lastSuccessfulProvisioningRecordId", void 0);
    __decorate([
        Metadata({ data: "json, name=LaunchRoleArn" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "launchRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "productId", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisioningArtifactId" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "provisioningArtifactId", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "statusMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ProvisionedProductDetail.prototype, "type", void 0);
    return ProvisionedProductDetail;
}(SpeakeasyBase));
export { ProvisionedProductDetail };
