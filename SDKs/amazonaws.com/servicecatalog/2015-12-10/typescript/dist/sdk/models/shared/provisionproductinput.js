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
import { ProvisioningParameter } from "./provisioningparameter";
import { ProvisioningPreferences } from "./provisioningpreferences";
import { Tag } from "./tag";
var ProvisionProductInput = /** @class */ (function (_super) {
    __extends(ProvisionProductInput, _super);
    function ProvisionProductInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceptLanguage" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationArns" }),
        __metadata("design:type", Array)
    ], ProvisionProductInput.prototype, "notificationArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PathId" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "pathId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PathName" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "pathName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionToken" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "provisionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "provisionedProductName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "provisioningArtifactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactName" }),
        __metadata("design:type", String)
    ], ProvisionProductInput.prototype, "provisioningArtifactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisioningParameters", elemType: ProvisioningParameter }),
        __metadata("design:type", Array)
    ], ProvisionProductInput.prototype, "provisioningParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisioningPreferences" }),
        __metadata("design:type", ProvisioningPreferences)
    ], ProvisionProductInput.prototype, "provisioningPreferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], ProvisionProductInput.prototype, "tags", void 0);
    return ProvisionProductInput;
}(SpeakeasyBase));
export { ProvisionProductInput };
