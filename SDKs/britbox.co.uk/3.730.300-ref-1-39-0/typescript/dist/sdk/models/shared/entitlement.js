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
import { ClassificationSummary } from "./classificationsummary";
import { ExclusionRule } from "./exclusionrule";
export var EntitlementDeliveryTypeEnum;
(function (EntitlementDeliveryTypeEnum) {
    EntitlementDeliveryTypeEnum["Stream"] = "Stream";
    EntitlementDeliveryTypeEnum["Download"] = "Download";
    EntitlementDeliveryTypeEnum["StreamOrDownload"] = "StreamOrDownload";
    EntitlementDeliveryTypeEnum["ProgressiveDownload"] = "ProgressiveDownload";
    EntitlementDeliveryTypeEnum["None"] = "None";
})(EntitlementDeliveryTypeEnum || (EntitlementDeliveryTypeEnum = {}));
export var EntitlementItemTypeEnum;
(function (EntitlementItemTypeEnum) {
    EntitlementItemTypeEnum["Movie"] = "movie";
    EntitlementItemTypeEnum["Show"] = "show";
    EntitlementItemTypeEnum["Season"] = "season";
    EntitlementItemTypeEnum["Episode"] = "episode";
    EntitlementItemTypeEnum["Program"] = "program";
    EntitlementItemTypeEnum["Link"] = "link";
    EntitlementItemTypeEnum["Trailer"] = "trailer";
    EntitlementItemTypeEnum["Channel"] = "channel";
    EntitlementItemTypeEnum["CustomAsset"] = "customAsset";
})(EntitlementItemTypeEnum || (EntitlementItemTypeEnum = {}));
export var EntitlementOwnershipEnum;
(function (EntitlementOwnershipEnum) {
    EntitlementOwnershipEnum["Subscription"] = "Subscription";
    EntitlementOwnershipEnum["Free"] = "Free";
    EntitlementOwnershipEnum["Rent"] = "Rent";
    EntitlementOwnershipEnum["Own"] = "Own";
    EntitlementOwnershipEnum["None"] = "None";
})(EntitlementOwnershipEnum || (EntitlementOwnershipEnum = {}));
export var EntitlementResolutionEnum;
(function (EntitlementResolutionEnum) {
    EntitlementResolutionEnum["Sd"] = "SD";
    EntitlementResolutionEnum["Hd720"] = "HD-720";
    EntitlementResolutionEnum["Hd1080"] = "HD-1080";
    EntitlementResolutionEnum["Hd4K"] = "HD-4K";
    EntitlementResolutionEnum["External"] = "External";
    EntitlementResolutionEnum["Unknown"] = "Unknown";
})(EntitlementResolutionEnum || (EntitlementResolutionEnum = {}));
var Entitlement = /** @class */ (function (_super) {
    __extends(Entitlement, _super);
    function Entitlement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationDate" }),
        __metadata("design:type", Date)
    ], Entitlement.prototype, "activationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", ClassificationSummary)
    ], Entitlement.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], Entitlement.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryType" }),
        __metadata("design:type", String)
    ], Entitlement.prototype, "deliveryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusionRules", elemType: ExclusionRule }),
        __metadata("design:type", Array)
    ], Entitlement.prototype, "exclusionRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], Entitlement.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], Entitlement.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemType" }),
        __metadata("design:type", String)
    ], Entitlement.prototype, "itemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDownloads" }),
        __metadata("design:type", Number)
    ], Entitlement.prototype, "maxDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPlays" }),
        __metadata("design:type", Number)
    ], Entitlement.prototype, "maxPlays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaDuration" }),
        __metadata("design:type", Number)
    ], Entitlement.prototype, "mediaDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownership" }),
        __metadata("design:type", String)
    ], Entitlement.prototype, "ownership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planId" }),
        __metadata("design:type", String)
    ], Entitlement.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playCount" }),
        __metadata("design:type", Number)
    ], Entitlement.prototype, "playCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playPeriod" }),
        __metadata("design:type", Number)
    ], Entitlement.prototype, "playPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingDownloads" }),
        __metadata("design:type", Number)
    ], Entitlement.prototype, "remainingDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rentalPeriod" }),
        __metadata("design:type", Number)
    ], Entitlement.prototype, "rentalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], Entitlement.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], Entitlement.prototype, "scopes", void 0);
    return Entitlement;
}(SpeakeasyBase));
export { Entitlement };
