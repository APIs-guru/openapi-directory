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
import { ExternallyHostedApkUsesPermission } from "./externallyhostedapkusespermission";
// ExternallyHostedApk
/**
 * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
**/
var ExternallyHostedApk = /** @class */ (function (_super) {
    __extends(ExternallyHostedApk, _super);
    function ExternallyHostedApk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationLabel" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "applicationLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateBase64s" }),
        __metadata("design:type", Array)
    ], ExternallyHostedApk.prototype, "certificateBase64s", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externallyHostedUrl" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "externallyHostedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSha1Base64" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "fileSha1Base64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSha256Base64" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "fileSha256Base64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSize" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "fileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconBase64" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "iconBase64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumSdk" }),
        __metadata("design:type", Number)
    ], ExternallyHostedApk.prototype, "maximumSdk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumSdk" }),
        __metadata("design:type", Number)
    ], ExternallyHostedApk.prototype, "minimumSdk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nativeCodes" }),
        __metadata("design:type", Array)
    ], ExternallyHostedApk.prototype, "nativeCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usesFeatures" }),
        __metadata("design:type", Array)
    ], ExternallyHostedApk.prototype, "usesFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usesPermissions", elemType: ExternallyHostedApkUsesPermission }),
        __metadata("design:type", Array)
    ], ExternallyHostedApk.prototype, "usesPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionCode" }),
        __metadata("design:type", Number)
    ], ExternallyHostedApk.prototype, "versionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionName" }),
        __metadata("design:type", String)
    ], ExternallyHostedApk.prototype, "versionName", void 0);
    return ExternallyHostedApk;
}(SpeakeasyBase));
export { ExternallyHostedApk };
