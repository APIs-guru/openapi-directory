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
var GetVideoBlocksQueryParams = /** @class */ (function (_super) {
    __extends(GetVideoBlocksQueryParams, _super);
    function GetVideoBlocksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetVideoBlocksQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetVideoBlocksQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideoBlocksQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetVideoBlocksQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Number)
    ], GetVideoBlocksQueryParams.prototype, "type", void 0);
    return GetVideoBlocksQueryParams;
}(SpeakeasyBase));
export { GetVideoBlocksQueryParams };
var GetVideoBlocksSecurity = /** @class */ (function (_super) {
    __extends(GetVideoBlocksSecurity, _super);
    function GetVideoBlocksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetVideoBlocksSecurity.prototype, "oAuth2", void 0);
    return GetVideoBlocksSecurity;
}(SpeakeasyBase));
export { GetVideoBlocksSecurity };
var GetVideoBlocks200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVideoBlocks200ApplicationJson, _super);
    function GetVideoBlocks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetVideoBlocks200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetVideoBlocks200ApplicationJson.prototype, "total", void 0);
    return GetVideoBlocks200ApplicationJson;
}(SpeakeasyBase));
export { GetVideoBlocks200ApplicationJson };
var GetVideoBlocksRequest = /** @class */ (function (_super) {
    __extends(GetVideoBlocksRequest, _super);
    function GetVideoBlocksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoBlocksQueryParams)
    ], GetVideoBlocksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoBlocksSecurity)
    ], GetVideoBlocksRequest.prototype, "security", void 0);
    return GetVideoBlocksRequest;
}(SpeakeasyBase));
export { GetVideoBlocksRequest };
var GetVideoBlocksResponse = /** @class */ (function (_super) {
    __extends(GetVideoBlocksResponse, _super);
    function GetVideoBlocksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideoBlocksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideoBlocksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoBlocks200ApplicationJson)
    ], GetVideoBlocksResponse.prototype, "getVideoBlocks200ApplicationJsonObject", void 0);
    return GetVideoBlocksResponse;
}(SpeakeasyBase));
export { GetVideoBlocksResponse };
