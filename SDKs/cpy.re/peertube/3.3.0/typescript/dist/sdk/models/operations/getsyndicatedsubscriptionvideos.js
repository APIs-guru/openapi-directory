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
export var GetSyndicatedSubscriptionVideosFormatEnum;
(function (GetSyndicatedSubscriptionVideosFormatEnum) {
    GetSyndicatedSubscriptionVideosFormatEnum["Xml"] = "xml";
    GetSyndicatedSubscriptionVideosFormatEnum["Rss"] = "rss";
    GetSyndicatedSubscriptionVideosFormatEnum["Rss2"] = "rss2";
    GetSyndicatedSubscriptionVideosFormatEnum["Atom"] = "atom";
    GetSyndicatedSubscriptionVideosFormatEnum["Atom1"] = "atom1";
    GetSyndicatedSubscriptionVideosFormatEnum["Json"] = "json";
    GetSyndicatedSubscriptionVideosFormatEnum["Json1"] = "json1";
})(GetSyndicatedSubscriptionVideosFormatEnum || (GetSyndicatedSubscriptionVideosFormatEnum = {}));
var GetSyndicatedSubscriptionVideosPathParams = /** @class */ (function (_super) {
    __extends(GetSyndicatedSubscriptionVideosPathParams, _super);
    function GetSyndicatedSubscriptionVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetSyndicatedSubscriptionVideosPathParams.prototype, "format", void 0);
    return GetSyndicatedSubscriptionVideosPathParams;
}(SpeakeasyBase));
export { GetSyndicatedSubscriptionVideosPathParams };
var GetSyndicatedSubscriptionVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetSyndicatedSubscriptionVideosQueryParams, _super);
    function GetSyndicatedSubscriptionVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", String)
    ], GetSyndicatedSubscriptionVideosQueryParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetSyndicatedSubscriptionVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nsfw" }),
        __metadata("design:type", String)
    ], GetSyndicatedSubscriptionVideosQueryParams.prototype, "nsfw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSyndicatedSubscriptionVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetSyndicatedSubscriptionVideosQueryParams.prototype, "token", void 0);
    return GetSyndicatedSubscriptionVideosQueryParams;
}(SpeakeasyBase));
export { GetSyndicatedSubscriptionVideosQueryParams };
var GetSyndicatedSubscriptionVideosRequest = /** @class */ (function (_super) {
    __extends(GetSyndicatedSubscriptionVideosRequest, _super);
    function GetSyndicatedSubscriptionVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSyndicatedSubscriptionVideosPathParams)
    ], GetSyndicatedSubscriptionVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSyndicatedSubscriptionVideosQueryParams)
    ], GetSyndicatedSubscriptionVideosRequest.prototype, "queryParams", void 0);
    return GetSyndicatedSubscriptionVideosRequest;
}(SpeakeasyBase));
export { GetSyndicatedSubscriptionVideosRequest };
var GetSyndicatedSubscriptionVideosResponse = /** @class */ (function (_super) {
    __extends(GetSyndicatedSubscriptionVideosResponse, _super);
    function GetSyndicatedSubscriptionVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSyndicatedSubscriptionVideosResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSyndicatedSubscriptionVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSyndicatedSubscriptionVideosResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSyndicatedSubscriptionVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSyndicatedSubscriptionVideosResponse.prototype, "getSyndicatedSubscriptionVideos204ApplicationJsonObject", void 0);
    return GetSyndicatedSubscriptionVideosResponse;
}(SpeakeasyBase));
export { GetSyndicatedSubscriptionVideosResponse };
