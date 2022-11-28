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
var GetMediaBySearchQueryParams = /** @class */ (function (_super) {
    __extends(GetMediaBySearchQueryParams, _super);
    function GetMediaBySearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accuracy" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "accuracy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contacts" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content_type" }),
        __metadata("design:type", Number)
    ], GetMediaBySearchQueryParams.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geo_context" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "geoContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_geo" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "hasGeo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=in_gallery" }),
        __metadata("design:type", Boolean)
    ], GetMediaBySearchQueryParams.prototype, "inGallery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_commons" }),
        __metadata("design:type", Boolean)
    ], GetMediaBySearchQueryParams.prototype, "isCommons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_getty" }),
        __metadata("design:type", Boolean)
    ], GetMediaBySearchQueryParams.prototype, "isGetty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=machine_tag_mode" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "machineTagMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=machine_tags" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "machineTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_taken_date" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "maxTakenDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_upload_date" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "maxUploadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=media" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_taken_date" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "minTakenDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_upload_date" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "minUploadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMediaBySearchQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetMediaBySearchQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=place_id" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "placeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=privacy_filter" }),
        __metadata("design:type", Number)
    ], GetMediaBySearchQueryParams.prototype, "privacyFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetMediaBySearchQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius_units" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "radiusUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_search" }),
        __metadata("design:type", Number)
    ], GetMediaBySearchQueryParams.prototype, "safeSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=woe_id" }),
        __metadata("design:type", String)
    ], GetMediaBySearchQueryParams.prototype, "woeId", void 0);
    return GetMediaBySearchQueryParams;
}(SpeakeasyBase));
export { GetMediaBySearchQueryParams };
var GetMediaBySearch200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMediaBySearch200ApplicationJson, _super);
    function GetMediaBySearch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetMediaBySearch200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetMediaBySearch200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perpage" }),
        __metadata("design:type", Number)
    ], GetMediaBySearch200ApplicationJson.prototype, "perpage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos", elemType: shared.Photo }),
        __metadata("design:type", Array)
    ], GetMediaBySearch200ApplicationJson.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetMediaBySearch200ApplicationJson.prototype, "total", void 0);
    return GetMediaBySearch200ApplicationJson;
}(SpeakeasyBase));
export { GetMediaBySearch200ApplicationJson };
var GetMediaBySearchRequest = /** @class */ (function (_super) {
    __extends(GetMediaBySearchRequest, _super);
    function GetMediaBySearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMediaBySearchQueryParams)
    ], GetMediaBySearchRequest.prototype, "queryParams", void 0);
    return GetMediaBySearchRequest;
}(SpeakeasyBase));
export { GetMediaBySearchRequest };
var GetMediaBySearchResponse = /** @class */ (function (_super) {
    __extends(GetMediaBySearchResponse, _super);
    function GetMediaBySearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMediaBySearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMediaBySearchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMediaBySearch200ApplicationJson)
    ], GetMediaBySearchResponse.prototype, "getMediaBySearch200ApplicationJsonObject", void 0);
    return GetMediaBySearchResponse;
}(SpeakeasyBase));
export { GetMediaBySearchResponse };
