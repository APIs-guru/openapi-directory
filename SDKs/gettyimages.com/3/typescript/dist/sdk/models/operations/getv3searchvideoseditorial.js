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
import * as shared from "../shared";
var GetV3SearchVideosEditorialQueryParams = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosEditorialQueryParams, _super);
    function GetV3SearchVideosEditorialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=age_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "ageOfPeople", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=aspect_ratios" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "aspectRatios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collection_codes" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "collectionCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "collectionsFilterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=compositions" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "compositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download_product" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "downloadProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=editorial_video_types" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "editorialVideoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=entity_uris" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "entityUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "facetFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "facetMaxCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format_available" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "formatAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=frame_rates" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "frameRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=image_techniques" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "imageTechniques", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_facets" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "includeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "includeRelatedSearches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "keywordIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_clip_length" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "maxClipLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_clip_length" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "minClipLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=orientations" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "orientations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "phrase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=release_status" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "releaseStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=specific_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "specificPeople", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=viewpoints" }),
        __metadata("design:type", Array)
    ], GetV3SearchVideosEditorialQueryParams.prototype, "viewpoints", void 0);
    return GetV3SearchVideosEditorialQueryParams;
}(SpeakeasyBase));
export { GetV3SearchVideosEditorialQueryParams };
var GetV3SearchVideosEditorialHeaders = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosEditorialHeaders, _super);
    function GetV3SearchVideosEditorialHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" }),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialHeaders.prototype, "giCountryCode", void 0);
    return GetV3SearchVideosEditorialHeaders;
}(SpeakeasyBase));
export { GetV3SearchVideosEditorialHeaders };
var GetV3SearchVideosEditorialRequest = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosEditorialRequest, _super);
    function GetV3SearchVideosEditorialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3SearchVideosEditorialQueryParams)
    ], GetV3SearchVideosEditorialRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3SearchVideosEditorialHeaders)
    ], GetV3SearchVideosEditorialRequest.prototype, "headers", void 0);
    return GetV3SearchVideosEditorialRequest;
}(SpeakeasyBase));
export { GetV3SearchVideosEditorialRequest };
var GetV3SearchVideosEditorialResponse = /** @class */ (function (_super) {
    __extends(GetV3SearchVideosEditorialResponse, _super);
    function GetV3SearchVideosEditorialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3SearchVideosEditorialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EditorialVideoSearchResults)
    ], GetV3SearchVideosEditorialResponse.prototype, "editorialVideoSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3SearchVideosEditorialResponse.prototype, "statusCode", void 0);
    return GetV3SearchVideosEditorialResponse;
}(SpeakeasyBase));
export { GetV3SearchVideosEditorialResponse };
