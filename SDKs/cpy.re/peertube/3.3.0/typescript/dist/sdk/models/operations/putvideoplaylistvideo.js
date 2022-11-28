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
var PutVideoPlaylistVideoPathParams = /** @class */ (function (_super) {
    __extends(PutVideoPlaylistVideoPathParams, _super);
    function PutVideoPlaylistVideoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistElementId" }),
        __metadata("design:type", Number)
    ], PutVideoPlaylistVideoPathParams.prototype, "playlistElementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" }),
        __metadata("design:type", Number)
    ], PutVideoPlaylistVideoPathParams.prototype, "playlistId", void 0);
    return PutVideoPlaylistVideoPathParams;
}(SpeakeasyBase));
export { PutVideoPlaylistVideoPathParams };
var PutVideoPlaylistVideoRequestBody = /** @class */ (function (_super) {
    __extends(PutVideoPlaylistVideoRequestBody, _super);
    function PutVideoPlaylistVideoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimestamp" }),
        __metadata("design:type", Number)
    ], PutVideoPlaylistVideoRequestBody.prototype, "startTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopTimestamp" }),
        __metadata("design:type", Number)
    ], PutVideoPlaylistVideoRequestBody.prototype, "stopTimestamp", void 0);
    return PutVideoPlaylistVideoRequestBody;
}(SpeakeasyBase));
export { PutVideoPlaylistVideoRequestBody };
var PutVideoPlaylistVideoSecurity = /** @class */ (function (_super) {
    __extends(PutVideoPlaylistVideoSecurity, _super);
    function PutVideoPlaylistVideoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PutVideoPlaylistVideoSecurity.prototype, "oAuth2", void 0);
    return PutVideoPlaylistVideoSecurity;
}(SpeakeasyBase));
export { PutVideoPlaylistVideoSecurity };
var PutVideoPlaylistVideoRequest = /** @class */ (function (_super) {
    __extends(PutVideoPlaylistVideoRequest, _super);
    function PutVideoPlaylistVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutVideoPlaylistVideoPathParams)
    ], PutVideoPlaylistVideoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutVideoPlaylistVideoRequestBody)
    ], PutVideoPlaylistVideoRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutVideoPlaylistVideoSecurity)
    ], PutVideoPlaylistVideoRequest.prototype, "security", void 0);
    return PutVideoPlaylistVideoRequest;
}(SpeakeasyBase));
export { PutVideoPlaylistVideoRequest };
var PutVideoPlaylistVideoResponse = /** @class */ (function (_super) {
    __extends(PutVideoPlaylistVideoResponse, _super);
    function PutVideoPlaylistVideoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutVideoPlaylistVideoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutVideoPlaylistVideoResponse.prototype, "statusCode", void 0);
    return PutVideoPlaylistVideoResponse;
}(SpeakeasyBase));
export { PutVideoPlaylistVideoResponse };
