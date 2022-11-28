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
export var StandardHl7ConfigurationPhoneNumberFormattingEnum;
(function (StandardHl7ConfigurationPhoneNumberFormattingEnum) {
    StandardHl7ConfigurationPhoneNumberFormattingEnum["Standard"] = "STANDARD";
    StandardHl7ConfigurationPhoneNumberFormattingEnum["OnlyDigitsInComponentOne"] = "ONLY_DIGITS_IN_COMPONENT_ONE";
    StandardHl7ConfigurationPhoneNumberFormattingEnum["AreaLocalInComponentOne"] = "AREA_LOCAL_IN_COMPONENT_ONE";
})(StandardHl7ConfigurationPhoneNumberFormattingEnum || (StandardHl7ConfigurationPhoneNumberFormattingEnum = {}));
// StandardHl7Configuration
/**
 * A standard HL7 configuration
**/
var StandardHl7Configuration = /** @class */ (function (_super) {
    __extends(StandardHl7Configuration, _super);
    function StandardHl7Configuration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=convertTimestampToDateTime" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "convertTimestampToDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAoeToUnknown" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "defaultAoeToUnknown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeAOE" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "includeAoe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameFormat" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "nameFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumberFormatting" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "phoneNumberFormatting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receivingApplicationName" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "receivingApplicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receivingApplicationOID" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "receivingApplicationOid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receivingFacilityName" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "receivingFacilityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receivingFacilityOID" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "receivingFacilityOid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receivingOrganization" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "receivingOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportingFacilityId" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "reportingFacilityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportingFacilityIdType" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "reportingFacilityIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportingFacilityName" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "reportingFacilityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suppressAoe" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "suppressAoe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suppressHl7Fields" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "suppressHl7Fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suppressQstForAoe" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "suppressQstForAoe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transport" }),
        __metadata("design:type", Object)
    ], StandardHl7Configuration.prototype, "transport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truncateHDNamespaceIds" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "truncateHdNamespaceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useBatchHeaders" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "useBatchHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useBlankInsteadOfUnknown" }),
        __metadata("design:type", String)
    ], StandardHl7Configuration.prototype, "useBlankInsteadOfUnknown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usePid14ForPatientEmail" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "usePid14ForPatientEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useTestProcessingMode" }),
        __metadata("design:type", Boolean)
    ], StandardHl7Configuration.prototype, "useTestProcessingMode", void 0);
    return StandardHl7Configuration;
}(SpeakeasyBase));
export { StandardHl7Configuration };
