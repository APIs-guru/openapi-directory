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
import { ApplicationEvent } from "./applicationevent";
import { KeyedAppState } from "./keyedappstate";
export var ApplicationReportApplicationSourceEnum;
(function (ApplicationReportApplicationSourceEnum) {
    ApplicationReportApplicationSourceEnum["ApplicationSourceUnspecified"] = "APPLICATION_SOURCE_UNSPECIFIED";
    ApplicationReportApplicationSourceEnum["SystemAppFactoryVersion"] = "SYSTEM_APP_FACTORY_VERSION";
    ApplicationReportApplicationSourceEnum["SystemAppUpdatedVersion"] = "SYSTEM_APP_UPDATED_VERSION";
    ApplicationReportApplicationSourceEnum["InstalledFromPlayStore"] = "INSTALLED_FROM_PLAY_STORE";
})(ApplicationReportApplicationSourceEnum || (ApplicationReportApplicationSourceEnum = {}));
export var ApplicationReportStateEnum;
(function (ApplicationReportStateEnum) {
    ApplicationReportStateEnum["ApplicationStateUnspecified"] = "APPLICATION_STATE_UNSPECIFIED";
    ApplicationReportStateEnum["Removed"] = "REMOVED";
    ApplicationReportStateEnum["Installed"] = "INSTALLED";
})(ApplicationReportStateEnum || (ApplicationReportStateEnum = {}));
// ApplicationReport
/**
 * Information reported about an installed app.
**/
var ApplicationReport = /** @class */ (function (_super) {
    __extends(ApplicationReport, _super);
    function ApplicationReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationSource" }),
        __metadata("design:type", String)
    ], ApplicationReport.prototype, "applicationSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApplicationReport.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: ApplicationEvent }),
        __metadata("design:type", Array)
    ], ApplicationReport.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installerPackageName" }),
        __metadata("design:type", String)
    ], ApplicationReport.prototype, "installerPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyedAppStates", elemType: KeyedAppState }),
        __metadata("design:type", Array)
    ], ApplicationReport.prototype, "keyedAppStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], ApplicationReport.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageSha256Hash" }),
        __metadata("design:type", String)
    ], ApplicationReport.prototype, "packageSha256Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingKeyCertFingerprints" }),
        __metadata("design:type", Array)
    ], ApplicationReport.prototype, "signingKeyCertFingerprints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ApplicationReport.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionCode" }),
        __metadata("design:type", Number)
    ], ApplicationReport.prototype, "versionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionName" }),
        __metadata("design:type", String)
    ], ApplicationReport.prototype, "versionName", void 0);
    return ApplicationReport;
}(SpeakeasyBase));
export { ApplicationReport };
