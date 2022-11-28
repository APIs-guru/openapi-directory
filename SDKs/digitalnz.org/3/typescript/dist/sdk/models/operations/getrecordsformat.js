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
var GetRecordsFormatPathParams = /** @class */ (function (_super) {
    __extends(GetRecordsFormatPathParams, _super);
    function GetRecordsFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetRecordsFormatPathParams.prototype, "format", void 0);
    return GetRecordsFormatPathParams;
}(SpeakeasyBase));
export { GetRecordsFormatPathParams };
export var GetRecordsFormatAndCategoryEnum;
(function (GetRecordsFormatAndCategoryEnum) {
    GetRecordsFormatAndCategoryEnum["Newspapers"] = "Newspapers";
    GetRecordsFormatAndCategoryEnum["Images"] = "Images";
    GetRecordsFormatAndCategoryEnum["Books"] = "Books";
    GetRecordsFormatAndCategoryEnum["Articles"] = "Articles";
    GetRecordsFormatAndCategoryEnum["Journals"] = "Journals";
    GetRecordsFormatAndCategoryEnum["Archives"] = "Archives";
    GetRecordsFormatAndCategoryEnum["Audio"] = "Audio";
    GetRecordsFormatAndCategoryEnum["Other"] = "Other";
    GetRecordsFormatAndCategoryEnum["Manuscripts"] = "Manuscripts";
    GetRecordsFormatAndCategoryEnum["ReferenceSources"] = "Reference sources";
    GetRecordsFormatAndCategoryEnum["ResearchPapers"] = "Research papers";
    GetRecordsFormatAndCategoryEnum["Videos"] = "Videos";
    GetRecordsFormatAndCategoryEnum["MusicScore"] = "Music Score";
    GetRecordsFormatAndCategoryEnum["Groups"] = "Groups";
    GetRecordsFormatAndCategoryEnum["Data"] = "Data";
    GetRecordsFormatAndCategoryEnum["Websites"] = "Websites";
    GetRecordsFormatAndCategoryEnum["Sets"] = "Sets";
})(GetRecordsFormatAndCategoryEnum || (GetRecordsFormatAndCategoryEnum = {}));
export var GetRecordsFormatAndHasLargeThumbnailUrlEnum;
(function (GetRecordsFormatAndHasLargeThumbnailUrlEnum) {
    GetRecordsFormatAndHasLargeThumbnailUrlEnum["Y"] = "Y";
})(GetRecordsFormatAndHasLargeThumbnailUrlEnum || (GetRecordsFormatAndHasLargeThumbnailUrlEnum = {}));
export var GetRecordsFormatAndUsageEnum;
(function (GetRecordsFormatAndUsageEnum) {
    GetRecordsFormatAndUsageEnum["Share"] = "Share";
    GetRecordsFormatAndUsageEnum["Modify"] = "Modify";
    GetRecordsFormatAndUsageEnum["UseCommercially"] = "Use commercially";
    GetRecordsFormatAndUsageEnum["AllRightsReserved"] = "All rights reserved";
    GetRecordsFormatAndUsageEnum["Unknown"] = "Unknown";
})(GetRecordsFormatAndUsageEnum || (GetRecordsFormatAndUsageEnum = {}));
export var GetRecordsFormatDirectionEnum;
(function (GetRecordsFormatDirectionEnum) {
    GetRecordsFormatDirectionEnum["Asc"] = "asc";
    GetRecordsFormatDirectionEnum["Desc"] = "desc";
})(GetRecordsFormatDirectionEnum || (GetRecordsFormatDirectionEnum = {}));
export var GetRecordsFormatFacetsEnum;
(function (GetRecordsFormatFacetsEnum) {
    GetRecordsFormatFacetsEnum["Category"] = "category";
    GetRecordsFormatFacetsEnum["ContentPartner"] = "content_partner";
    GetRecordsFormatFacetsEnum["DisplayCollection"] = "display_collection";
    GetRecordsFormatFacetsEnum["Collection"] = "collection";
    GetRecordsFormatFacetsEnum["Creator"] = "creator";
    GetRecordsFormatFacetsEnum["Placename"] = "placename";
    GetRecordsFormatFacetsEnum["Date"] = "date";
    GetRecordsFormatFacetsEnum["Year"] = "year";
    GetRecordsFormatFacetsEnum["Decade"] = "decade";
    GetRecordsFormatFacetsEnum["Century"] = "century";
    GetRecordsFormatFacetsEnum["Language"] = "language";
    GetRecordsFormatFacetsEnum["Rights"] = "rights";
    GetRecordsFormatFacetsEnum["Usage"] = "usage";
    GetRecordsFormatFacetsEnum["Copyright"] = "copyright";
    GetRecordsFormatFacetsEnum["Subject"] = "subject";
    GetRecordsFormatFacetsEnum["Format"] = "format";
    GetRecordsFormatFacetsEnum["DcType"] = "dc_type";
})(GetRecordsFormatFacetsEnum || (GetRecordsFormatFacetsEnum = {}));
export var GetRecordsFormatSortEnum;
(function (GetRecordsFormatSortEnum) {
    GetRecordsFormatSortEnum["SyndicationDate"] = "syndication_date";
    GetRecordsFormatSortEnum["Date"] = "date";
})(GetRecordsFormatSortEnum || (GetRecordsFormatSortEnum = {}));
var GetRecordsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordsFormatQueryParams, _super);
    function GetRecordsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[category][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[century]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCentury", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[collection][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCollection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[content_partner][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andContentPartner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[creator][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[date]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[dc_type][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andDcType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[decade]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andDecade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[format][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[has_large_thumbnail_url]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andHasLargeThumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[has_lat_lng]" }),
        __metadata("design:type", Boolean)
    ], GetRecordsFormatQueryParams.prototype, "andHasLatLng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[is_commercial_use]" }),
        __metadata("design:type", Boolean)
    ], GetRecordsFormatQueryParams.prototype, "andIsCommercialUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[or][{filter_field}][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andOrFilterField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[placename][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andPlacename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[primary_collection][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andPrimaryCollection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[subject][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[title][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[usage][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[year]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_filters_from_facets" }),
        __metadata("design:type", Boolean)
    ], GetRecordsFormatQueryParams.prototype, "excludeFiltersFromFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facets" }),
        __metadata("design:type", Array)
    ], GetRecordsFormatQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "facetsPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets_per_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "facetsPerPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geo_bbox" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "geoBbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=without[{filter_field}]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "withoutFilterField", void 0);
    return GetRecordsFormatQueryParams;
}(SpeakeasyBase));
export { GetRecordsFormatQueryParams };
var GetRecordsFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRecordsFormat200ApplicationJson, _super);
    function GetRecordsFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facets" }),
        __metadata("design:type", Map)
    ], GetRecordsFormat200ApplicationJson.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormat200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormat200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=records", elemType: shared.Record }),
        __metadata("design:type", Array)
    ], GetRecordsFormat200ApplicationJson.prototype, "records", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], GetRecordsFormat200ApplicationJson.prototype, "requestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result_count" }),
        __metadata("design:type", Number)
    ], GetRecordsFormat200ApplicationJson.prototype, "resultCount", void 0);
    return GetRecordsFormat200ApplicationJson;
}(SpeakeasyBase));
export { GetRecordsFormat200ApplicationJson };
var GetRecordsFormatRequest = /** @class */ (function (_super) {
    __extends(GetRecordsFormatRequest, _super);
    function GetRecordsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordsFormatPathParams)
    ], GetRecordsFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordsFormatQueryParams)
    ], GetRecordsFormatRequest.prototype, "queryParams", void 0);
    return GetRecordsFormatRequest;
}(SpeakeasyBase));
export { GetRecordsFormatRequest };
var GetRecordsFormatResponse = /** @class */ (function (_super) {
    __extends(GetRecordsFormatResponse, _super);
    function GetRecordsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRecordsFormatResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRecordsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordsFormat200ApplicationJson)
    ], GetRecordsFormatResponse.prototype, "getRecordsFormat200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRecordsFormatResponse.prototype, "getRecordsFormat400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRecordsFormatResponse.prototype, "getRecordsFormat403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRecordsFormatResponse.prototype, "statusCode", void 0);
    return GetRecordsFormatResponse;
}(SpeakeasyBase));
export { GetRecordsFormatResponse };
