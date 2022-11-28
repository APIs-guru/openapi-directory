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
import { AppPkgInfoLinks } from "./apppkginfolinks";
import { Checksum } from "./checksum";
import { OnboardingStateEnum } from "./onboardingstateenum";
import { AppPkgOperationalStateEnum } from "./apppkgoperationalstateenum";
import { UsageStateEnum } from "./usagestateenum";
// AppPkgInfo
/**
 * 'The data type AppPkgInfo represents the parameters for an application package resource'
**/
var AppPkgInfo = /** @class */ (function (_super) {
    __extends(AppPkgInfo, _super);
    function AppPkgInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", AppPkgInfoLinks)
    ], AppPkgInfo.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalArtifacts" }),
        __metadata("design:type", Object)
    ], AppPkgInfo.prototype, "additionalArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appDId" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "appDId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appDVersion" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "appDVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appName" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "appName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appProvider" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "appProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appSoftwareVersion" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "appSoftwareVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", Checksum)
    ], AppPkgInfo.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onboardingState" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "onboardingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationalState" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "operationalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareImages" }),
        __metadata("design:type", Object)
    ], AppPkgInfo.prototype, "softwareImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageState" }),
        __metadata("design:type", String)
    ], AppPkgInfo.prototype, "usageState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDefinedData" }),
        __metadata("design:type", Map)
    ], AppPkgInfo.prototype, "userDefinedData", void 0);
    return AppPkgInfo;
}(SpeakeasyBase));
export { AppPkgInfo };
