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
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ProductInformation } from "./productinformation";
import { Tag } from "./tag";
var CreateLicenseConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateLicenseConfigurationRequest, _super);
    function CreateLicenseConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateLicenseConfigurationRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisassociateWhenNotFound" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseConfigurationRequest.prototype, "disassociateWhenNotFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseCount" }),
        __metadata("design:type", Number)
    ], CreateLicenseConfigurationRequest.prototype, "licenseCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseCountHardLimit" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseConfigurationRequest.prototype, "licenseCountHardLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseCountingType" }),
        __metadata("design:type", String)
    ], CreateLicenseConfigurationRequest.prototype, "licenseCountingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseRules" }),
        __metadata("design:type", Array)
    ], CreateLicenseConfigurationRequest.prototype, "licenseRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateLicenseConfigurationRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductInformationList", elemType: ProductInformation }),
        __metadata("design:type", Array)
    ], CreateLicenseConfigurationRequest.prototype, "productInformationList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateLicenseConfigurationRequest.prototype, "tags", void 0);
    return CreateLicenseConfigurationRequest;
}(SpeakeasyBase));
export { CreateLicenseConfigurationRequest };
