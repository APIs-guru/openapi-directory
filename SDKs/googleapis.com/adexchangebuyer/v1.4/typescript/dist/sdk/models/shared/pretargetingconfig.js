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
var PretargetingConfigDimensions = /** @class */ (function (_super) {
    __extends(PretargetingConfigDimensions, _super);
    function PretargetingConfigDimensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", String)
    ], PretargetingConfigDimensions.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", String)
    ], PretargetingConfigDimensions.prototype, "width", void 0);
    return PretargetingConfigDimensions;
}(SpeakeasyBase));
export { PretargetingConfigDimensions };
var PretargetingConfigExcludedPlacements = /** @class */ (function (_super) {
    __extends(PretargetingConfigExcludedPlacements, _super);
    function PretargetingConfigExcludedPlacements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PretargetingConfigExcludedPlacements.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PretargetingConfigExcludedPlacements.prototype, "type", void 0);
    return PretargetingConfigExcludedPlacements;
}(SpeakeasyBase));
export { PretargetingConfigExcludedPlacements };
var PretargetingConfigPlacements = /** @class */ (function (_super) {
    __extends(PretargetingConfigPlacements, _super);
    function PretargetingConfigPlacements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PretargetingConfigPlacements.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PretargetingConfigPlacements.prototype, "type", void 0);
    return PretargetingConfigPlacements;
}(SpeakeasyBase));
export { PretargetingConfigPlacements };
var PretargetingConfigVideoPlayerSizes = /** @class */ (function (_super) {
    __extends(PretargetingConfigVideoPlayerSizes, _super);
    function PretargetingConfigVideoPlayerSizes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aspectRatio" }),
        __metadata("design:type", String)
    ], PretargetingConfigVideoPlayerSizes.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minHeight" }),
        __metadata("design:type", String)
    ], PretargetingConfigVideoPlayerSizes.prototype, "minHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minWidth" }),
        __metadata("design:type", String)
    ], PretargetingConfigVideoPlayerSizes.prototype, "minWidth", void 0);
    return PretargetingConfigVideoPlayerSizes;
}(SpeakeasyBase));
export { PretargetingConfigVideoPlayerSizes };
var PretargetingConfig = /** @class */ (function (_super) {
    __extends(PretargetingConfig, _super);
    function PretargetingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingId" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "billingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configId" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configName" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "configName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeType" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "creativeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: PretargetingConfigDimensions }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedContentLabels" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "excludedContentLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedGeoCriteriaIds" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "excludedGeoCriteriaIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedPlacements", elemType: PretargetingConfigExcludedPlacements }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "excludedPlacements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedUserLists" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "excludedUserLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedVerticals" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "excludedVerticals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoCriteriaIds" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "geoCriteriaIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], PretargetingConfig.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumQps" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "maximumQps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumViewabilityDecile" }),
        __metadata("design:type", Number)
    ], PretargetingConfig.prototype, "minimumViewabilityDecile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileCarriers" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "mobileCarriers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileDevices" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "mobileDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileOperatingSystemVersions" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "mobileOperatingSystemVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placements", elemType: PretargetingConfigPlacements }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "placements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platforms" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "platforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedCreativeAttributes" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "supportedCreativeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userIdentifierDataRequired" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "userIdentifierDataRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLists" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "userLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendorTypes" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "vendorTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticals" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "verticals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoPlayerSizes", elemType: PretargetingConfigVideoPlayerSizes }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "videoPlayerSizes", void 0);
    return PretargetingConfig;
}(SpeakeasyBase));
export { PretargetingConfig };
