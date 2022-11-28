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
import { Offer } from "./offer";
import { Theme } from "./theme";
export var ItemSummaryTypeEnum;
(function (ItemSummaryTypeEnum) {
    ItemSummaryTypeEnum["Movie"] = "movie";
    ItemSummaryTypeEnum["Show"] = "show";
    ItemSummaryTypeEnum["Season"] = "season";
    ItemSummaryTypeEnum["Episode"] = "episode";
    ItemSummaryTypeEnum["Program"] = "program";
    ItemSummaryTypeEnum["Link"] = "link";
    ItemSummaryTypeEnum["Trailer"] = "trailer";
    ItemSummaryTypeEnum["Channel"] = "channel";
    ItemSummaryTypeEnum["CustomAsset"] = "customAsset";
})(ItemSummaryTypeEnum || (ItemSummaryTypeEnum = {}));
var ItemSummary = /** @class */ (function (_super) {
    __extends(ItemSummary, _super);
    function ItemSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advisoryText" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "advisoryText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableEpisodeCount" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "availableEpisodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableSeasonCount" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "availableSeasonCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageUserRating" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "averageUserRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "badge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelShortCode" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "channelShortCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", ClassificationSummary)
    ], ItemSummary.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextualTitle" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "contextualTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields" }),
        __metadata("design:type", Map)
    ], ItemSummary.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customId" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "customId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodeCount" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "episodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodeName" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "episodeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodeNumber" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "episodeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genres" }),
        __metadata("design:type", Array)
    ], ItemSummary.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasClosedCaptions" }),
        __metadata("design:type", Boolean)
    ], ItemSummary.prototype, "hasClosedCaptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images" }),
        __metadata("design:type", Map)
    ], ItemSummary.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offers", elemType: Offer }),
        __metadata("design:type", Array)
    ], ItemSummary.prototype, "offers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseYear" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "releaseYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], ItemSummary.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonId" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "seasonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonNumber" }),
        __metadata("design:type", Number)
    ], ItemSummary.prototype, "seasonNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showId" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "showId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showTitle" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "showTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagline" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "tagline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themes", elemType: Theme }),
        __metadata("design:type", Array)
    ], ItemSummary.prototype, "themes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchPath" }),
        __metadata("design:type", String)
    ], ItemSummary.prototype, "watchPath", void 0);
    return ItemSummary;
}(SpeakeasyBase));
export { ItemSummary };
