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
var GetMediaByPersonIdQueryParams = /** @class */ (function (_super) {
    __extends(GetMediaByPersonIdQueryParams, _super);
    function GetMediaByPersonIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetMediaByPersonIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content_type" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_taken_date" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "maxTakenDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_upload_date" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "maxUploadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_taken_date" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "minTakenDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_upload_date" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "minUploadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=privacy_filter" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "privacyFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_search" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdQueryParams.prototype, "safeSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", String)
    ], GetMediaByPersonIdQueryParams.prototype, "userId", void 0);
    return GetMediaByPersonIdQueryParams;
}(SpeakeasyBase));
export { GetMediaByPersonIdQueryParams };
var GetMediaByPersonId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMediaByPersonId200ApplicationJson, _super);
    function GetMediaByPersonId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonId200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonId200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perpage" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonId200ApplicationJson.prototype, "perpage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos", elemType: shared.Photo }),
        __metadata("design:type", Array)
    ], GetMediaByPersonId200ApplicationJson.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetMediaByPersonId200ApplicationJson.prototype, "total", void 0);
    return GetMediaByPersonId200ApplicationJson;
}(SpeakeasyBase));
export { GetMediaByPersonId200ApplicationJson };
var GetMediaByPersonIdRequest = /** @class */ (function (_super) {
    __extends(GetMediaByPersonIdRequest, _super);
    function GetMediaByPersonIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMediaByPersonIdQueryParams)
    ], GetMediaByPersonIdRequest.prototype, "queryParams", void 0);
    return GetMediaByPersonIdRequest;
}(SpeakeasyBase));
export { GetMediaByPersonIdRequest };
var GetMediaByPersonIdResponse = /** @class */ (function (_super) {
    __extends(GetMediaByPersonIdResponse, _super);
    function GetMediaByPersonIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMediaByPersonIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMediaByPersonIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMediaByPersonId200ApplicationJson)
    ], GetMediaByPersonIdResponse.prototype, "getMediaByPersonId200ApplicationJsonObject", void 0);
    return GetMediaByPersonIdResponse;
}(SpeakeasyBase));
export { GetMediaByPersonIdResponse };
