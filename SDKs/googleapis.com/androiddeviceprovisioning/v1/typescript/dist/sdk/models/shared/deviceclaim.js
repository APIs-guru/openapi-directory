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
export var DeviceClaimAdditionalServiceEnum;
(function (DeviceClaimAdditionalServiceEnum) {
    DeviceClaimAdditionalServiceEnum["AdditionalServiceUnspecified"] = "ADDITIONAL_SERVICE_UNSPECIFIED";
    DeviceClaimAdditionalServiceEnum["DeviceProtection"] = "DEVICE_PROTECTION";
})(DeviceClaimAdditionalServiceEnum || (DeviceClaimAdditionalServiceEnum = {}));
export var DeviceClaimSectionTypeEnum;
(function (DeviceClaimSectionTypeEnum) {
    DeviceClaimSectionTypeEnum["SectionTypeUnspecified"] = "SECTION_TYPE_UNSPECIFIED";
    DeviceClaimSectionTypeEnum["SectionTypeSimLock"] = "SECTION_TYPE_SIM_LOCK";
    DeviceClaimSectionTypeEnum["SectionTypeZeroTouch"] = "SECTION_TYPE_ZERO_TOUCH";
})(DeviceClaimSectionTypeEnum || (DeviceClaimSectionTypeEnum = {}));
// DeviceClaim
/**
 * A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
**/
var DeviceClaim = /** @class */ (function (_super) {
    __extends(DeviceClaim, _super);
    function DeviceClaim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=additionalService" }),
        __metadata("design:type", String)
    ], DeviceClaim.prototype, "additionalService", void 0);
    __decorate([
        Metadata({ data: "json, name=ownerCompanyId" }),
        __metadata("design:type", String)
    ], DeviceClaim.prototype, "ownerCompanyId", void 0);
    __decorate([
        Metadata({ data: "json, name=resellerId" }),
        __metadata("design:type", String)
    ], DeviceClaim.prototype, "resellerId", void 0);
    __decorate([
        Metadata({ data: "json, name=sectionType" }),
        __metadata("design:type", String)
    ], DeviceClaim.prototype, "sectionType", void 0);
    __decorate([
        Metadata({ data: "json, name=vacationModeExpireTime" }),
        __metadata("design:type", String)
    ], DeviceClaim.prototype, "vacationModeExpireTime", void 0);
    __decorate([
        Metadata({ data: "json, name=vacationModeStartTime" }),
        __metadata("design:type", String)
    ], DeviceClaim.prototype, "vacationModeStartTime", void 0);
    return DeviceClaim;
}(SpeakeasyBase));
export { DeviceClaim };
