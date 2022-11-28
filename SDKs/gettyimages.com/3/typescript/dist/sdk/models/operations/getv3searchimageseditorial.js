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
var GetV3SearchImagesEditorialQueryParams = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesEditorialQueryParams, _super);
    function GetV3SearchImagesEditorialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=age_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "ageOfPeople", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collection_codes" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "collectionCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collections_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "collectionsFilterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=compositions" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "compositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" }),
        __metadata("design:type", Date)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" }),
        __metadata("design:type", Date)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download_product" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "downloadProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=editorial_segments" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "editorialSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed_content_only" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "embedContentOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=entity_uris" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "entityUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ethnicity" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "ethnicity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=event_ids" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "eventIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "facetFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_max_count" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "facetMaxCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=file_types" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "fileTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=graphical_styles" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "graphicalStyles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=graphical_styles_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "graphicalStylesFilterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_facets" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "includeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_related_searches" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "includeRelatedSearches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=keyword_ids" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "keywordIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimum_quality_rank" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "minimumQualityRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimum_size" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "minimumSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=number_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "numberOfPeople", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=orientations" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "orientations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "phrase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=specific_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesEditorialQueryParams.prototype, "specificPeople", void 0);
    return GetV3SearchImagesEditorialQueryParams;
}(SpeakeasyBase));
export { GetV3SearchImagesEditorialQueryParams };
var GetV3SearchImagesEditorialHeaders = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesEditorialHeaders, _super);
    function GetV3SearchImagesEditorialHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialHeaders.prototype, "giCountryCode", void 0);
    return GetV3SearchImagesEditorialHeaders;
}(SpeakeasyBase));
export { GetV3SearchImagesEditorialHeaders };
var GetV3SearchImagesEditorialRequest = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesEditorialRequest, _super);
    function GetV3SearchImagesEditorialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3SearchImagesEditorialQueryParams)
    ], GetV3SearchImagesEditorialRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3SearchImagesEditorialHeaders)
    ], GetV3SearchImagesEditorialRequest.prototype, "headers", void 0);
    return GetV3SearchImagesEditorialRequest;
}(SpeakeasyBase));
export { GetV3SearchImagesEditorialRequest };
var GetV3SearchImagesEditorialResponse = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesEditorialResponse, _super);
    function GetV3SearchImagesEditorialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3SearchImagesEditorialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EditorialImageSearchResults)
    ], GetV3SearchImagesEditorialResponse.prototype, "editorialImageSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3SearchImagesEditorialResponse.prototype, "statusCode", void 0);
    return GetV3SearchImagesEditorialResponse;
}(SpeakeasyBase));
export { GetV3SearchImagesEditorialResponse };
