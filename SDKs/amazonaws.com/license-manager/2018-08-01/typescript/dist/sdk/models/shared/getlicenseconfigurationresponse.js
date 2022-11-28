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
import { AutomatedDiscoveryInformation } from "./automateddiscoveryinformation";
import { ConsumedLicenseSummary } from "./consumedlicensesummary";
import { LicenseCountingTypeEnum } from "./licensecountingtypeenum";
import { ManagedResourceSummary } from "./managedresourcesummary";
import { ProductInformation } from "./productinformation";
import { Tag } from "./tag";
var GetLicenseConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetLicenseConfigurationResponse, _super);
    function GetLicenseConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomatedDiscoveryInformation" }),
        __metadata("design:type", AutomatedDiscoveryInformation)
    ], GetLicenseConfigurationResponse.prototype, "automatedDiscoveryInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsumedLicenseSummaryList", elemType: ConsumedLicenseSummary }),
        __metadata("design:type", Array)
    ], GetLicenseConfigurationResponse.prototype, "consumedLicenseSummaryList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsumedLicenses" }),
        __metadata("design:type", Number)
    ], GetLicenseConfigurationResponse.prototype, "consumedLicenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetLicenseConfigurationResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisassociateWhenNotFound" }),
        __metadata("design:type", Boolean)
    ], GetLicenseConfigurationResponse.prototype, "disassociateWhenNotFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" }),
        __metadata("design:type", String)
    ], GetLicenseConfigurationResponse.prototype, "licenseConfigurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseConfigurationId" }),
        __metadata("design:type", String)
    ], GetLicenseConfigurationResponse.prototype, "licenseConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseCount" }),
        __metadata("design:type", Number)
    ], GetLicenseConfigurationResponse.prototype, "licenseCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseCountHardLimit" }),
        __metadata("design:type", Boolean)
    ], GetLicenseConfigurationResponse.prototype, "licenseCountHardLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseCountingType" }),
        __metadata("design:type", String)
    ], GetLicenseConfigurationResponse.prototype, "licenseCountingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseRules" }),
        __metadata("design:type", Array)
    ], GetLicenseConfigurationResponse.prototype, "licenseRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManagedResourceSummaryList", elemType: ManagedResourceSummary }),
        __metadata("design:type", Array)
    ], GetLicenseConfigurationResponse.prototype, "managedResourceSummaryList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetLicenseConfigurationResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerAccountId" }),
        __metadata("design:type", String)
    ], GetLicenseConfigurationResponse.prototype, "ownerAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductInformationList", elemType: ProductInformation }),
        __metadata("design:type", Array)
    ], GetLicenseConfigurationResponse.prototype, "productInformationList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], GetLicenseConfigurationResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], GetLicenseConfigurationResponse.prototype, "tags", void 0);
    return GetLicenseConfigurationResponse;
}(SpeakeasyBase));
export { GetLicenseConfigurationResponse };
