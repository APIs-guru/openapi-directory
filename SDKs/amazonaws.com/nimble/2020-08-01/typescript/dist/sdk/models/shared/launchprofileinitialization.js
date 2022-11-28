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
import { LaunchProfileInitializationActiveDirectory } from "./launchprofileinitializationactivedirectory";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
import { LaunchProfileInitializationScript } from "./launchprofileinitializationscript";
var LaunchProfileInitialization = /** @class */ (function (_super) {
    __extends(LaunchProfileInitialization, _super);
    function LaunchProfileInitialization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeDirectory" }),
        __metadata("design:type", LaunchProfileInitializationActiveDirectory)
    ], LaunchProfileInitialization.prototype, "activeDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], LaunchProfileInitialization.prototype, "ec2SecurityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileId" }),
        __metadata("design:type", String)
    ], LaunchProfileInitialization.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersion" }),
        __metadata("design:type", String)
    ], LaunchProfileInitialization.prototype, "launchProfileProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchPurpose" }),
        __metadata("design:type", String)
    ], LaunchProfileInitialization.prototype, "launchPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LaunchProfileInitialization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], LaunchProfileInitialization.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemInitializationScripts", elemType: LaunchProfileInitializationScript }),
        __metadata("design:type", Array)
    ], LaunchProfileInitialization.prototype, "systemInitializationScripts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInitializationScripts", elemType: LaunchProfileInitializationScript }),
        __metadata("design:type", Array)
    ], LaunchProfileInitialization.prototype, "userInitializationScripts", void 0);
    return LaunchProfileInitialization;
}(SpeakeasyBase));
export { LaunchProfileInitialization };
