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
export var VideosForXmlEnclosureTypeEnum;
(function (VideosForXmlEnclosureTypeEnum) {
    VideosForXmlEnclosureTypeEnum["ApplicationXBittorrent"] = "application/x-bittorrent";
})(VideosForXmlEnclosureTypeEnum || (VideosForXmlEnclosureTypeEnum = {}));
// VideosForXmlEnclosure
/**
 * main streamable file for the video
**/
var VideosForXmlEnclosure = /** @class */ (function (_super) {
    __extends(VideosForXmlEnclosure, _super);
    function VideosForXmlEnclosure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VideosForXmlEnclosure.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXmlEnclosure.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXmlEnclosure.prototype, "url", void 0);
    return VideosForXmlEnclosure;
}(SpeakeasyBase));
export { VideosForXmlEnclosure };
var VideosForXmlMediaCommunityMediaStatistics = /** @class */ (function (_super) {
    __extends(VideosForXmlMediaCommunityMediaStatistics, _super);
    function VideosForXmlMediaCommunityMediaStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VideosForXmlMediaCommunityMediaStatistics.prototype, "views", void 0);
    return VideosForXmlMediaCommunityMediaStatistics;
}(SpeakeasyBase));
export { VideosForXmlMediaCommunityMediaStatistics };
// VideosForXmlMediaCommunity
/**
 * see [media:community](https://www.rssboard.org/media-rss#media-community) (MRSS)
**/
var VideosForXmlMediaCommunity = /** @class */ (function (_super) {
    __extends(VideosForXmlMediaCommunity, _super);
    function VideosForXmlMediaCommunity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideosForXmlMediaCommunityMediaStatistics)
    ], VideosForXmlMediaCommunity.prototype, "mediaStatistics", void 0);
    return VideosForXmlMediaCommunity;
}(SpeakeasyBase));
export { VideosForXmlMediaCommunity };
var VideosForXmlMediaEmbed = /** @class */ (function (_super) {
    __extends(VideosForXmlMediaEmbed, _super);
    function VideosForXmlMediaEmbed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXmlMediaEmbed.prototype, "url", void 0);
    return VideosForXmlMediaEmbed;
}(SpeakeasyBase));
export { VideosForXmlMediaEmbed };
var VideosForXmlMediaPlayer = /** @class */ (function (_super) {
    __extends(VideosForXmlMediaPlayer, _super);
    function VideosForXmlMediaPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXmlMediaPlayer.prototype, "url", void 0);
    return VideosForXmlMediaPlayer;
}(SpeakeasyBase));
export { VideosForXmlMediaPlayer };
export var VideosForXmlMediaRatingEnum;
(function (VideosForXmlMediaRatingEnum) {
    VideosForXmlMediaRatingEnum["Nonadult"] = "nonadult";
    VideosForXmlMediaRatingEnum["Adult"] = "adult";
})(VideosForXmlMediaRatingEnum || (VideosForXmlMediaRatingEnum = {}));
var VideosForXmlMediaThumbnail = /** @class */ (function (_super) {
    __extends(VideosForXmlMediaThumbnail, _super);
    function VideosForXmlMediaThumbnail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VideosForXmlMediaThumbnail.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXmlMediaThumbnail.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VideosForXmlMediaThumbnail.prototype, "width", void 0);
    return VideosForXmlMediaThumbnail;
}(SpeakeasyBase));
export { VideosForXmlMediaThumbnail };
var VideosForXml = /** @class */ (function (_super) {
    __extends(VideosForXml, _super);
    function VideosForXml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "contentEncoded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "dcCreator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideosForXmlEnclosure)
    ], VideosForXml.prototype, "enclosure", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "guid", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VideosForXml.prototype, "mediaCategory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideosForXmlMediaCommunity)
    ], VideosForXml.prototype, "mediaCommunity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "mediaDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideosForXmlMediaEmbed)
    ], VideosForXml.prototype, "mediaEmbed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], VideosForXml.prototype, "mediaGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideosForXmlMediaPlayer)
    ], VideosForXml.prototype, "mediaPlayer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "mediaRating", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideosForXmlMediaThumbnail)
    ], VideosForXml.prototype, "mediaThumbnail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideosForXml.prototype, "mediaTitle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], VideosForXml.prototype, "pubDate", void 0);
    return VideosForXml;
}(SpeakeasyBase));
export { VideosForXml };
