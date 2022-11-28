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
import { CommonModelsCoreSetting } from "./commonmodelscoresetting";
import { CommonModelsDestiny2CoreSettings } from "./commonmodelsdestiny2coresettings";
import { UserEmailSettings } from "./useremailsettings";
import { CommonModelsCoreSystem } from "./commonmodelscoresystem";
var CommonModelsCoreSettingsConfiguration = /** @class */ (function (_super) {
    __extends(CommonModelsCoreSettingsConfiguration, _super);
    function CommonModelsCoreSettingsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "clanBannerDecalColors", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "clanBannerDecals", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "clanBannerGonfalonColors", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "clanBannerGonfalonDetailColors", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "clanBannerGonfalonDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "clanBannerGonfalons", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "clanBannerStandards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CommonModelsDestiny2CoreSettings)
    ], CommonModelsCoreSettingsConfiguration.prototype, "destiny2CoreSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "destinyMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserEmailSettings)
    ], CommonModelsCoreSettingsConfiguration.prototype, "emailSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CommonModelsCoreSettingsConfiguration.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "fireteamActivities", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "forumCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "groupAvatars", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "ignoreReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "recruitmentActivities", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "recruitmentMiscTags", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "recruitmentPlatformTags", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "systemContentLocales", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSystem }),
        __metadata("design:type", Map)
    ], CommonModelsCoreSettingsConfiguration.prototype, "systems", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CommonModelsCoreSetting }),
        __metadata("design:type", Array)
    ], CommonModelsCoreSettingsConfiguration.prototype, "userContentLocales", void 0);
    return CommonModelsCoreSettingsConfiguration;
}(SpeakeasyBase));
export { CommonModelsCoreSettingsConfiguration };
