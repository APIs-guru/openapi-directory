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
export var GetSyndicatedVideosFormatEnum;
(function (GetSyndicatedVideosFormatEnum) {
    GetSyndicatedVideosFormatEnum["Xml"] = "xml";
    GetSyndicatedVideosFormatEnum["Rss"] = "rss";
    GetSyndicatedVideosFormatEnum["Rss2"] = "rss2";
    GetSyndicatedVideosFormatEnum["Atom"] = "atom";
    GetSyndicatedVideosFormatEnum["Atom1"] = "atom1";
    GetSyndicatedVideosFormatEnum["Json"] = "json";
    GetSyndicatedVideosFormatEnum["Json1"] = "json1";
})(GetSyndicatedVideosFormatEnum || (GetSyndicatedVideosFormatEnum = {}));
var GetSyndicatedVideosPathParams = /** @class */ (function (_super) {
    __extends(GetSyndicatedVideosPathParams, _super);
    function GetSyndicatedVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosPathParams.prototype, "format", void 0);
    return GetSyndicatedVideosPathParams;
}(SpeakeasyBase));
export { GetSyndicatedVideosPathParams };
var GetSyndicatedVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetSyndicatedVideosQueryParams, _super);
    function GetSyndicatedVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosQueryParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountName" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosQueryParams.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nsfw" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosQueryParams.prototype, "nsfw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelId" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosQueryParams.prototype, "videoChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelName" }),
        __metadata("design:type", String)
    ], GetSyndicatedVideosQueryParams.prototype, "videoChannelName", void 0);
    return GetSyndicatedVideosQueryParams;
}(SpeakeasyBase));
export { GetSyndicatedVideosQueryParams };
var GetSyndicatedVideosRequest = /** @class */ (function (_super) {
    __extends(GetSyndicatedVideosRequest, _super);
    function GetSyndicatedVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSyndicatedVideosPathParams)
    ], GetSyndicatedVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSyndicatedVideosQueryParams)
    ], GetSyndicatedVideosRequest.prototype, "queryParams", void 0);
    return GetSyndicatedVideosRequest;
}(SpeakeasyBase));
export { GetSyndicatedVideosRequest };
var GetSyndicatedVideosResponse = /** @class */ (function (_super) {
    __extends(GetSyndicatedVideosResponse, _super);
    function GetSyndicatedVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSyndicatedVideosResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSyndicatedVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSyndicatedVideosResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSyndicatedVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSyndicatedVideosResponse.prototype, "getSyndicatedVideos204ApplicationJsonObject", void 0);
    return GetSyndicatedVideosResponse;
}(SpeakeasyBase));
export { GetSyndicatedVideosResponse };
