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
var GetV3SearchImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesQueryParams, _super);
    function GetV3SearchImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=age_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "ageOfPeople", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collection_codes" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "collectionCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "collectionsFilterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=compositions" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "compositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download_product" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "downloadProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed_content_only" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesQueryParams.prototype, "embedContentOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ethnicity" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "ethnicity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=event_ids" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "eventIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_nudity" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesQueryParams.prototype, "excludeNudity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=file_types" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "fileTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=graphical_styles" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "graphicalStyles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=graphical_styles_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "graphicalStylesFilterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesQueryParams.prototype, "includeRelatedSearches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "keywordIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimum_size" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "minimumSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=number_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "numberOfPeople", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=orientations" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "orientations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "phrase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=specific_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesQueryParams.prototype, "specificPeople", void 0);
    return GetV3SearchImagesQueryParams;
}(SpeakeasyBase));
export { GetV3SearchImagesQueryParams };
var GetV3SearchImagesHeaders = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesHeaders, _super);
    function GetV3SearchImagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesHeaders.prototype, "giCountryCode", void 0);
    return GetV3SearchImagesHeaders;
}(SpeakeasyBase));
export { GetV3SearchImagesHeaders };
var GetV3SearchImagesRequest = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesRequest, _super);
    function GetV3SearchImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3SearchImagesQueryParams)
    ], GetV3SearchImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3SearchImagesHeaders)
    ], GetV3SearchImagesRequest.prototype, "headers", void 0);
    return GetV3SearchImagesRequest;
}(SpeakeasyBase));
export { GetV3SearchImagesRequest };
var GetV3SearchImagesResponse = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesResponse, _super);
    function GetV3SearchImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3SearchImagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImageSearchItemSearchResults)
    ], GetV3SearchImagesResponse.prototype, "imageSearchItemSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3SearchImagesResponse.prototype, "statusCode", void 0);
    return GetV3SearchImagesResponse;
}(SpeakeasyBase));
export { GetV3SearchImagesResponse };
