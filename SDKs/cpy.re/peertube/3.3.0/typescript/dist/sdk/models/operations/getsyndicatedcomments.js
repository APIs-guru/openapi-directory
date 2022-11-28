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
export var GetSyndicatedCommentsFormatEnum;
(function (GetSyndicatedCommentsFormatEnum) {
    GetSyndicatedCommentsFormatEnum["Xml"] = "xml";
    GetSyndicatedCommentsFormatEnum["Rss"] = "rss";
    GetSyndicatedCommentsFormatEnum["Rss2"] = "rss2";
    GetSyndicatedCommentsFormatEnum["Atom"] = "atom";
    GetSyndicatedCommentsFormatEnum["Atom1"] = "atom1";
    GetSyndicatedCommentsFormatEnum["Json"] = "json";
    GetSyndicatedCommentsFormatEnum["Json1"] = "json1";
})(GetSyndicatedCommentsFormatEnum || (GetSyndicatedCommentsFormatEnum = {}));
var GetSyndicatedCommentsPathParams = /** @class */ (function (_super) {
    __extends(GetSyndicatedCommentsPathParams, _super);
    function GetSyndicatedCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetSyndicatedCommentsPathParams.prototype, "format", void 0);
    return GetSyndicatedCommentsPathParams;
}(SpeakeasyBase));
export { GetSyndicatedCommentsPathParams };
var GetSyndicatedCommentsQueryParams = /** @class */ (function (_super) {
    __extends(GetSyndicatedCommentsQueryParams, _super);
    function GetSyndicatedCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", String)
    ], GetSyndicatedCommentsQueryParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountName" }),
        __metadata("design:type", String)
    ], GetSyndicatedCommentsQueryParams.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelId" }),
        __metadata("design:type", String)
    ], GetSyndicatedCommentsQueryParams.prototype, "videoChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelName" }),
        __metadata("design:type", String)
    ], GetSyndicatedCommentsQueryParams.prototype, "videoChannelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoId" }),
        __metadata("design:type", String)
    ], GetSyndicatedCommentsQueryParams.prototype, "videoId", void 0);
    return GetSyndicatedCommentsQueryParams;
}(SpeakeasyBase));
export { GetSyndicatedCommentsQueryParams };
var GetSyndicatedCommentsRequest = /** @class */ (function (_super) {
    __extends(GetSyndicatedCommentsRequest, _super);
    function GetSyndicatedCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSyndicatedCommentsPathParams)
    ], GetSyndicatedCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSyndicatedCommentsQueryParams)
    ], GetSyndicatedCommentsRequest.prototype, "queryParams", void 0);
    return GetSyndicatedCommentsRequest;
}(SpeakeasyBase));
export { GetSyndicatedCommentsRequest };
var GetSyndicatedCommentsResponse = /** @class */ (function (_super) {
    __extends(GetSyndicatedCommentsResponse, _super);
    function GetSyndicatedCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSyndicatedCommentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSyndicatedCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSyndicatedCommentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSyndicatedCommentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSyndicatedCommentsResponse.prototype, "getSyndicatedComments204ApplicationJsonObject", void 0);
    return GetSyndicatedCommentsResponse;
}(SpeakeasyBase));
export { GetSyndicatedCommentsResponse };
