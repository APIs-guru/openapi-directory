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
import { UpdateProvisioningPreferences } from "./updateprovisioningpreferences";
var UpdateProvisionedProductInput = /** @class */ (function (_super) {
    __extends(UpdateProvisionedProductInput, _super);
    function UpdateProvisionedProductInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AcceptLanguage" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "acceptLanguage", void 0);
    __decorate([
        Metadata({ data: "json, name=PathId" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "pathId", void 0);
    __decorate([
        Metadata({ data: "json, name=PathName" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "pathName", void 0);
    __decorate([
        Metadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "productId", void 0);
    __decorate([
        Metadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "productName", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisionedProductId" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "provisionedProductId", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisionedProductName" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "provisionedProductName", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisioningArtifactId" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "provisioningArtifactId", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisioningArtifactName" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "provisioningArtifactName", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisioningParameters", elemType: shared.UpdateProvisioningParameter }),
        __metadata("design:type", Array)
    ], UpdateProvisionedProductInput.prototype, "provisioningParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=ProvisioningPreferences" }),
        __metadata("design:type", UpdateProvisioningPreferences)
    ], UpdateProvisionedProductInput.prototype, "provisioningPreferences", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], UpdateProvisionedProductInput.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=UpdateToken" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductInput.prototype, "updateToken", void 0);
    return UpdateProvisionedProductInput;
}(SpeakeasyBase));
export { UpdateProvisionedProductInput };
