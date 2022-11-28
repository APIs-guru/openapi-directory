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
var GetAccountVideosPathParams = /** @class */ (function (_super) {
    __extends(GetAccountVideosPathParams, _super);
    function GetAccountVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetAccountVideosPathParams.prototype, "name", void 0);
    return GetAccountVideosPathParams;
}(SpeakeasyBase));
export { GetAccountVideosPathParams };
var GetAccountVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountVideosQueryParams, _super);
    function GetAccountVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=categoryOneOf" }),
        __metadata("design:type", Object)
    ], GetAccountVideosQueryParams.prototype, "categoryOneOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetAccountVideosQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAccountVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLive" }),
        __metadata("design:type", Boolean)
    ], GetAccountVideosQueryParams.prototype, "isLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageOneOf" }),
        __metadata("design:type", Object)
    ], GetAccountVideosQueryParams.prototype, "languageOneOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=licenceOneOf" }),
        __metadata("design:type", Object)
    ], GetAccountVideosQueryParams.prototype, "licenceOneOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nsfw" }),
        __metadata("design:type", String)
    ], GetAccountVideosQueryParams.prototype, "nsfw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skipCount" }),
        __metadata("design:type", String)
    ], GetAccountVideosQueryParams.prototype, "skipCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAccountVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetAccountVideosQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagsAllOf" }),
        __metadata("design:type", Object)
    ], GetAccountVideosQueryParams.prototype, "tagsAllOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagsOneOf" }),
        __metadata("design:type", Object)
    ], GetAccountVideosQueryParams.prototype, "tagsOneOf", void 0);
    return GetAccountVideosQueryParams;
}(SpeakeasyBase));
export { GetAccountVideosQueryParams };
var GetAccountVideosRequest = /** @class */ (function (_super) {
    __extends(GetAccountVideosRequest, _super);
    function GetAccountVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountVideosPathParams)
    ], GetAccountVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountVideosQueryParams)
    ], GetAccountVideosRequest.prototype, "queryParams", void 0);
    return GetAccountVideosRequest;
}(SpeakeasyBase));
export { GetAccountVideosRequest };
var GetAccountVideosResponse = /** @class */ (function (_super) {
    __extends(GetAccountVideosResponse, _super);
    function GetAccountVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAccountVideosResponse.prototype, "videoListResponse", void 0);
    return GetAccountVideosResponse;
}(SpeakeasyBase));
export { GetAccountVideosResponse };
