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
import * as shared from "../shared";
import { ProvisionedProductStatusEnum } from "./provisionedproductstatusenum";
// ProvisionedProductAttribute
/**
 * Information about a provisioned product.
**/
var ProvisionedProductAttribute = /** @class */ (function (_super) {
    __extends(ProvisionedProductAttribute, _super);
    function ProvisionedProductAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], ProvisionedProductAttribute.prototype, "createdTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=IdempotencyToken" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "idempotencyToken", void 0);
    __decorate([
        Metadata({ data: "json, name=LastProvisioningRecordId" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "lastProvisioningRecordId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastRecordId" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "lastRecordId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastSuccessfulProvisioningRecordId" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "lastSuccessfulProvisioningRecordId", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=PhysicalId" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "physicalId", void 0);
    __decorate([
        Metadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "productId", void 0);
    __decorate([
        Metadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "productName", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisioningArtifactId" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "provisioningArtifactId", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisioningArtifactName" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "provisioningArtifactName", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "statusMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], ProvisionedProductAttribute.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=UserArn" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "userArn", void 0);
    __decorate([
        Metadata({ data: "json, name=UserArnSession" }),
        __metadata("design:type", String)
    ], ProvisionedProductAttribute.prototype, "userArnSession", void 0);
    return ProvisionedProductAttribute;
}(SpeakeasyBase));
export { ProvisionedProductAttribute };
