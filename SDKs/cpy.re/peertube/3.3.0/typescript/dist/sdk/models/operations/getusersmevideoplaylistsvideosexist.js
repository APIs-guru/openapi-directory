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
var GetUsersMeVideoPlaylistsVideosExistQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersMeVideoPlaylistsVideosExistQueryParams, _super);
    function GetUsersMeVideoPlaylistsVideosExistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoIds" }),
        __metadata("design:type", Array)
    ], GetUsersMeVideoPlaylistsVideosExistQueryParams.prototype, "videoIds", void 0);
    return GetUsersMeVideoPlaylistsVideosExistQueryParams;
}(SpeakeasyBase));
export { GetUsersMeVideoPlaylistsVideosExistQueryParams };
var GetUsersMeVideoPlaylistsVideosExistSecurity = /** @class */ (function (_super) {
    __extends(GetUsersMeVideoPlaylistsVideosExistSecurity, _super);
    function GetUsersMeVideoPlaylistsVideosExistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetUsersMeVideoPlaylistsVideosExistSecurity.prototype, "oAuth2", void 0);
    return GetUsersMeVideoPlaylistsVideosExistSecurity;
}(SpeakeasyBase));
export { GetUsersMeVideoPlaylistsVideosExistSecurity };
var GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId = /** @class */ (function (_super) {
    __extends(GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId, _super);
    function GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playlistElementId" }),
        __metadata("design:type", Number)
    ], GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId.prototype, "playlistElementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playlistId" }),
        __metadata("design:type", Number)
    ], GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId.prototype, "playlistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimestamp" }),
        __metadata("design:type", Number)
    ], GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId.prototype, "startTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopTimestamp" }),
        __metadata("design:type", Number)
    ], GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId.prototype, "stopTimestamp", void 0);
    return GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId;
}(SpeakeasyBase));
export { GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId };
var GetUsersMeVideoPlaylistsVideosExist200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUsersMeVideoPlaylistsVideosExist200ApplicationJson, _super);
    function GetUsersMeVideoPlaylistsVideosExist200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoId", elemType: GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId }),
        __metadata("design:type", Array)
    ], GetUsersMeVideoPlaylistsVideosExist200ApplicationJson.prototype, "videoId", void 0);
    return GetUsersMeVideoPlaylistsVideosExist200ApplicationJson;
}(SpeakeasyBase));
export { GetUsersMeVideoPlaylistsVideosExist200ApplicationJson };
var GetUsersMeVideoPlaylistsVideosExistRequest = /** @class */ (function (_super) {
    __extends(GetUsersMeVideoPlaylistsVideosExistRequest, _super);
    function GetUsersMeVideoPlaylistsVideosExistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersMeVideoPlaylistsVideosExistQueryParams)
    ], GetUsersMeVideoPlaylistsVideosExistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersMeVideoPlaylistsVideosExistSecurity)
    ], GetUsersMeVideoPlaylistsVideosExistRequest.prototype, "security", void 0);
    return GetUsersMeVideoPlaylistsVideosExistRequest;
}(SpeakeasyBase));
export { GetUsersMeVideoPlaylistsVideosExistRequest };
var GetUsersMeVideoPlaylistsVideosExistResponse = /** @class */ (function (_super) {
    __extends(GetUsersMeVideoPlaylistsVideosExistResponse, _super);
    function GetUsersMeVideoPlaylistsVideosExistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersMeVideoPlaylistsVideosExistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersMeVideoPlaylistsVideosExist200ApplicationJson)
    ], GetUsersMeVideoPlaylistsVideosExistResponse.prototype, "getUsersMeVideoPlaylistsVideosExist200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersMeVideoPlaylistsVideosExistResponse.prototype, "statusCode", void 0);
    return GetUsersMeVideoPlaylistsVideosExistResponse;
}(SpeakeasyBase));
export { GetUsersMeVideoPlaylistsVideosExistResponse };
