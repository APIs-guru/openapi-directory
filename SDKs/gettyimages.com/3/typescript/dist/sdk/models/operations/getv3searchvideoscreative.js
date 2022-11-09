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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetV3SearchVideosCreativeQueryParams = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosCreativeQueryParams, _super);
    function GetV3SearchVideosCreativeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=age_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "ageOfPeople", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=artists" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "artists", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=aspect_ratios" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "aspectRatios", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=collection_codes" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "collectionCodes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "collectionsFilterType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=compositions" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "compositions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=download_product" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "downloadProduct", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=exclude_editorial_use_only" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "excludeEditorialUseOnly", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=exclude_nudity" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "excludeNudity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "facetFields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "facetMaxCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format_available" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "formatAvailable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=frame_rates" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "frameRates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=image_techniques" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "imageTechniques", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=include_facets" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "includeFacets", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "includeRelatedSearches", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "keywordIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=license_models" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "licenseModels", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max_clip_length" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "maxClipLength", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=min_clip_length" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "minClipLength", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=orientations" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "orientations", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=phrase" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "phrase", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=release_status" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "releaseStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=safe_search" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "safeSearch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=viewpoints" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosCreativeQueryParams.prototype, "viewpoints", void 0);
    return GetV3SearchVideosCreativeQueryParams;
}(SpeakeasyBase));
export { GetV3SearchVideosCreativeQueryParams };
var GetV3SearchVideosCreativeHeaders = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosCreativeHeaders, _super);
    function GetV3SearchVideosCreativeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeHeaders.prototype, "giCountryCode", void 0);
    return GetV3SearchVideosCreativeHeaders;
}(SpeakeasyBase));
export { GetV3SearchVideosCreativeHeaders };
var GetV3SearchVideosCreativeRequest = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosCreativeRequest, _super);
    function GetV3SearchVideosCreativeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3SearchVideosCreativeQueryParams)
    ], GetV3SearchVideosCreativeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3SearchVideosCreativeHeaders)
    ], GetV3SearchVideosCreativeRequest.prototype, "headers", void 0);
    return GetV3SearchVideosCreativeRequest;
}(SpeakeasyBase));
export { GetV3SearchVideosCreativeRequest };
var GetV3SearchVideosCreativeResponse = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosCreativeResponse, _super);
    function GetV3SearchVideosCreativeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3SearchVideosCreativeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreativeVideoSearchResults)
    ], GetV3SearchVideosCreativeResponse.prototype, "creativeVideoSearchResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3SearchVideosCreativeResponse.prototype, "statusCode", void 0);
    return GetV3SearchVideosCreativeResponse;
}(SpeakeasyBase));
export { GetV3SearchVideosCreativeResponse };
