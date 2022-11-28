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
import { SystemUpdateInfo } from "./systemupdateinfo";
// SoftwareInfo
/**
 * Information about device software.
**/
var SoftwareInfo = /** @class */ (function (_super) {
    __extends(SoftwareInfo, _super);
    function SoftwareInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidBuildNumber" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "androidBuildNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidBuildTime" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "androidBuildTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidDevicePolicyVersionCode" }),
        __metadata("design:type", Number)
    ], SoftwareInfo.prototype, "androidDevicePolicyVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidDevicePolicyVersionName" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "androidDevicePolicyVersionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidVersion" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "androidVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootloaderVersion" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "bootloaderVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceBuildSignature" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "deviceBuildSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceKernelVersion" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "deviceKernelVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryLanguageCode" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "primaryLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityPatchLevel" }),
        __metadata("design:type", String)
    ], SoftwareInfo.prototype, "securityPatchLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemUpdateInfo" }),
        __metadata("design:type", SystemUpdateInfo)
    ], SoftwareInfo.prototype, "systemUpdateInfo", void 0);
    return SoftwareInfo;
}(SpeakeasyBase));
export { SoftwareInfo };
