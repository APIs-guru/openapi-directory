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
var GetUsersMeVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersMeVideosQueryParams, _super);
    function GetUsersMeVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetUsersMeVideosQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersMeVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetUsersMeVideosQueryParams.prototype, "start", void 0);
    return GetUsersMeVideosQueryParams;
}(SpeakeasyBase));
export { GetUsersMeVideosQueryParams };
var GetUsersMeVideosSecurity = /** @class */ (function (_super) {
    __extends(GetUsersMeVideosSecurity, _super);
    function GetUsersMeVideosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetUsersMeVideosSecurity.prototype, "oAuth2", void 0);
    return GetUsersMeVideosSecurity;
}(SpeakeasyBase));
export { GetUsersMeVideosSecurity };
var GetUsersMeVideosRequest = /** @class */ (function (_super) {
    __extends(GetUsersMeVideosRequest, _super);
    function GetUsersMeVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersMeVideosQueryParams)
    ], GetUsersMeVideosRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersMeVideosSecurity)
    ], GetUsersMeVideosRequest.prototype, "security", void 0);
    return GetUsersMeVideosRequest;
}(SpeakeasyBase));
export { GetUsersMeVideosRequest };
var GetUsersMeVideosResponse = /** @class */ (function (_super) {
    __extends(GetUsersMeVideosResponse, _super);
    function GetUsersMeVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersMeVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersMeVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsersMeVideosResponse.prototype, "videoListResponse", void 0);
    return GetUsersMeVideosResponse;
}(SpeakeasyBase));
export { GetUsersMeVideosResponse };
