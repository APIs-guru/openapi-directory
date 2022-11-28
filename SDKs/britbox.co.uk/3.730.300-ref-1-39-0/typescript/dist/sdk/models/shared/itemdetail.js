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
import { Credit } from "./credit";
import { ItemCustomMetadata } from "./itemcustommetadata";
import { ItemList } from "./itemlist";
import { Offer } from "./offer";
import { Theme } from "./theme";
import { ItemSummary } from "./itemsummary";
export var ItemDetailTypeEnum;
(function (ItemDetailTypeEnum) {
    ItemDetailTypeEnum["Movie"] = "movie";
    ItemDetailTypeEnum["Show"] = "show";
    ItemDetailTypeEnum["Season"] = "season";
    ItemDetailTypeEnum["Episode"] = "episode";
    ItemDetailTypeEnum["Program"] = "program";
    ItemDetailTypeEnum["Link"] = "link";
    ItemDetailTypeEnum["Trailer"] = "trailer";
    ItemDetailTypeEnum["Channel"] = "channel";
    ItemDetailTypeEnum["CustomAsset"] = "customAsset";
})(ItemDetailTypeEnum || (ItemDetailTypeEnum = {}));
var ItemDetail = /** @class */ (function (_super) {
    __extends(ItemDetail, _super);
    function ItemDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advisoryText" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "advisoryText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableEpisodeCount" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "availableEpisodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableSeasonCount" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "availableSeasonCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageUserRating" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "averageUserRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "badge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelShortCode" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "channelShortCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", ClassificationSummary)
    ], ItemDetail.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextualTitle" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "contextualTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credits", elemType: Credit }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields" }),
        __metadata("design:type", Map)
    ], ItemDetail.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customId" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "customId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMetadata", elemType: ItemCustomMetadata }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "customMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributor" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "distributor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodeCount" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "episodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodeName" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "episodeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodeNumber" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "episodeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodes" }),
        __metadata("design:type", ItemList)
    ], ItemDetail.prototype, "episodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDate" }),
        __metadata("design:type", Date)
    ], ItemDetail.prototype, "eventDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genrePaths" }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "genrePaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genres" }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasClosedCaptions" }),
        __metadata("design:type", Boolean)
    ], ItemDetail.prototype, "hasClosedCaptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images" }),
        __metadata("design:type", Map)
    ], ItemDetail.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offers", elemType: Offer }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "offers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseYear" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "releaseYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", ItemDetail)
    ], ItemDetail.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonId" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "seasonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonNumber" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "seasonNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasons" }),
        __metadata("design:type", ItemList)
    ], ItemDetail.prototype, "seasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show" }),
        __metadata("design:type", ItemDetail)
    ], ItemDetail.prototype, "show", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showId" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "showId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showTitle" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "showTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagline" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "tagline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themes", elemType: Theme }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "themes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalUserRatings" }),
        __metadata("design:type", Number)
    ], ItemDetail.prototype, "totalUserRatings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trailers", elemType: ItemSummary }),
        __metadata("design:type", Array)
    ], ItemDetail.prototype, "trailers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venue" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "venue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchPath" }),
        __metadata("design:type", String)
    ], ItemDetail.prototype, "watchPath", void 0);
    return ItemDetail;
}(SpeakeasyBase));
export { ItemDetail };
