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
var AddVideoPlaylistVideoPathParams = /** @class */ (function (_super) {
    __extends(AddVideoPlaylistVideoPathParams, _super);
    function AddVideoPlaylistVideoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" }),
        __metadata("design:type", Number)
    ], AddVideoPlaylistVideoPathParams.prototype, "playlistId", void 0);
    return AddVideoPlaylistVideoPathParams;
}(SpeakeasyBase));
export { AddVideoPlaylistVideoPathParams };
var AddVideoPlaylistVideoRequestBody = /** @class */ (function (_super) {
    __extends(AddVideoPlaylistVideoRequestBody, _super);
    function AddVideoPlaylistVideoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimestamp" }),
        __metadata("design:type", Number)
    ], AddVideoPlaylistVideoRequestBody.prototype, "startTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopTimestamp" }),
        __metadata("design:type", Number)
    ], AddVideoPlaylistVideoRequestBody.prototype, "stopTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoId" }),
        __metadata("design:type", Object)
    ], AddVideoPlaylistVideoRequestBody.prototype, "videoId", void 0);
    return AddVideoPlaylistVideoRequestBody;
}(SpeakeasyBase));
export { AddVideoPlaylistVideoRequestBody };
var AddVideoPlaylistVideoSecurity = /** @class */ (function (_super) {
    __extends(AddVideoPlaylistVideoSecurity, _super);
    function AddVideoPlaylistVideoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], AddVideoPlaylistVideoSecurity.prototype, "oAuth2", void 0);
    return AddVideoPlaylistVideoSecurity;
}(SpeakeasyBase));
export { AddVideoPlaylistVideoSecurity };
var AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement = /** @class */ (function (_super) {
    __extends(AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement, _super);
    function AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement.prototype, "id", void 0);
    return AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement;
}(SpeakeasyBase));
export { AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement };
var AddVideoPlaylistVideo200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddVideoPlaylistVideo200ApplicationJson, _super);
    function AddVideoPlaylistVideo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoPlaylistElement" }),
        __metadata("design:type", AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement)
    ], AddVideoPlaylistVideo200ApplicationJson.prototype, "videoPlaylistElement", void 0);
    return AddVideoPlaylistVideo200ApplicationJson;
}(SpeakeasyBase));
export { AddVideoPlaylistVideo200ApplicationJson };
var AddVideoPlaylistVideoRequest = /** @class */ (function (_super) {
    __extends(AddVideoPlaylistVideoRequest, _super);
    function AddVideoPlaylistVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoPlaylistVideoPathParams)
    ], AddVideoPlaylistVideoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddVideoPlaylistVideoRequestBody)
    ], AddVideoPlaylistVideoRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoPlaylistVideoSecurity)
    ], AddVideoPlaylistVideoRequest.prototype, "security", void 0);
    return AddVideoPlaylistVideoRequest;
}(SpeakeasyBase));
export { AddVideoPlaylistVideoRequest };
var AddVideoPlaylistVideoResponse = /** @class */ (function (_super) {
    __extends(AddVideoPlaylistVideoResponse, _super);
    function AddVideoPlaylistVideoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideoPlaylistVideoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideoPlaylistVideoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoPlaylistVideo200ApplicationJson)
    ], AddVideoPlaylistVideoResponse.prototype, "addVideoPlaylistVideo200ApplicationJsonObject", void 0);
    return AddVideoPlaylistVideoResponse;
}(SpeakeasyBase));
export { AddVideoPlaylistVideoResponse };
