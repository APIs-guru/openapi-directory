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
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { Entitlement } from "./entitlement";
import { Issuer } from "./issuer";
import { Metadata } from "./metadata";
import { LicenseStatusEnum } from "./licensestatusenum";
import { DatetimeRange } from "./datetimerange";
var CreateLicenseVersionRequest = /** @class */ (function (_super) {
    __extends(CreateLicenseVersionRequest, _super);
    function CreateLicenseVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], CreateLicenseVersionRequest.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsumptionConfiguration" }),
        __metadata("design:type", ConsumptionConfiguration)
    ], CreateLicenseVersionRequest.prototype, "consumptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Entitlements", elemType: Entitlement }),
        __metadata("design:type", Array)
    ], CreateLicenseVersionRequest.prototype, "entitlements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomeRegion" }),
        __metadata("design:type", String)
    ], CreateLicenseVersionRequest.prototype, "homeRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Issuer" }),
        __metadata("design:type", Issuer)
    ], CreateLicenseVersionRequest.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseArn" }),
        __metadata("design:type", String)
    ], CreateLicenseVersionRequest.prototype, "licenseArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseMetadata", elemType: Metadata }),
        __metadata("design:type", Array)
    ], CreateLicenseVersionRequest.prototype, "licenseMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseName" }),
        __metadata("design:type", String)
    ], CreateLicenseVersionRequest.prototype, "licenseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], CreateLicenseVersionRequest.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceVersion" }),
        __metadata("design:type", String)
    ], CreateLicenseVersionRequest.prototype, "sourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], CreateLicenseVersionRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Validity" }),
        __metadata("design:type", DatetimeRange)
    ], CreateLicenseVersionRequest.prototype, "validity", void 0);
    return CreateLicenseVersionRequest;
}(SpeakeasyBase));
export { CreateLicenseVersionRequest };
