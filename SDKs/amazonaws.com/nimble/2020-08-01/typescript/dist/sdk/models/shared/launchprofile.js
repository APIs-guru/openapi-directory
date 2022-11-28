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
import { LaunchProfileStateEnum } from "./launchprofilestateenum";
import { LaunchProfileStatusCodeEnum } from "./launchprofilestatuscodeenum";
import { StreamConfiguration } from "./streamconfiguration";
var LaunchProfile = /** @class */ (function (_super) {
    __extends(LaunchProfile, _super);
    function LaunchProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], LaunchProfile.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2SubnetIds" }),
        __metadata("design:type", Array)
    ], LaunchProfile.prototype, "ec2SubnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileId" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersions" }),
        __metadata("design:type", Array)
    ], LaunchProfile.prototype, "launchProfileProtocolVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamConfiguration" }),
        __metadata("design:type", StreamConfiguration)
    ], LaunchProfile.prototype, "streamConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioComponentIds" }),
        __metadata("design:type", Array)
    ], LaunchProfile.prototype, "studioComponentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], LaunchProfile.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], LaunchProfile.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], LaunchProfile.prototype, "updatedBy", void 0);
    return LaunchProfile;
}(SpeakeasyBase));
export { LaunchProfile };
