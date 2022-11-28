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
import { GoogleCloudApigeeV1SecurityProfileEnvironment } from "./googlecloudapigeev1securityprofileenvironment";
import { GoogleCloudApigeeV1SecurityProfileScoringConfig } from "./googlecloudapigeev1securityprofilescoringconfig";
// GoogleCloudApigeeV1SecurityProfile
/**
 * Represents a SecurityProfile resource.
**/
var GoogleCloudApigeeV1SecurityProfile = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1SecurityProfile, _super);
    function GoogleCloudApigeeV1SecurityProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudApigeeV1SecurityProfileEnvironment }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxScore" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "maxScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minScore" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "minScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "revisionCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionPublishTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "revisionPublishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionUpdateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "revisionUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoringConfigs", elemType: GoogleCloudApigeeV1SecurityProfileScoringConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1SecurityProfile.prototype, "scoringConfigs", void 0);
    return GoogleCloudApigeeV1SecurityProfile;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1SecurityProfile };
