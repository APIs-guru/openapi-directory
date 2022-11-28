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
var ReorderVideoPlaylistPathParams = /** @class */ (function (_super) {
    __extends(ReorderVideoPlaylistPathParams, _super);
    function ReorderVideoPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" }),
        __metadata("design:type", Number)
    ], ReorderVideoPlaylistPathParams.prototype, "playlistId", void 0);
    return ReorderVideoPlaylistPathParams;
}(SpeakeasyBase));
export { ReorderVideoPlaylistPathParams };
var ReorderVideoPlaylistRequestBody = /** @class */ (function (_super) {
    __extends(ReorderVideoPlaylistRequestBody, _super);
    function ReorderVideoPlaylistRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertAfterPosition" }),
        __metadata("design:type", Number)
    ], ReorderVideoPlaylistRequestBody.prototype, "insertAfterPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reorderLength" }),
        __metadata("design:type", Number)
    ], ReorderVideoPlaylistRequestBody.prototype, "reorderLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startPosition" }),
        __metadata("design:type", Number)
    ], ReorderVideoPlaylistRequestBody.prototype, "startPosition", void 0);
    return ReorderVideoPlaylistRequestBody;
}(SpeakeasyBase));
export { ReorderVideoPlaylistRequestBody };
var ReorderVideoPlaylistSecurity = /** @class */ (function (_super) {
    __extends(ReorderVideoPlaylistSecurity, _super);
    function ReorderVideoPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], ReorderVideoPlaylistSecurity.prototype, "oAuth2", void 0);
    return ReorderVideoPlaylistSecurity;
}(SpeakeasyBase));
export { ReorderVideoPlaylistSecurity };
var ReorderVideoPlaylistRequest = /** @class */ (function (_super) {
    __extends(ReorderVideoPlaylistRequest, _super);
    function ReorderVideoPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReorderVideoPlaylistPathParams)
    ], ReorderVideoPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReorderVideoPlaylistRequestBody)
    ], ReorderVideoPlaylistRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReorderVideoPlaylistSecurity)
    ], ReorderVideoPlaylistRequest.prototype, "security", void 0);
    return ReorderVideoPlaylistRequest;
}(SpeakeasyBase));
export { ReorderVideoPlaylistRequest };
var ReorderVideoPlaylistResponse = /** @class */ (function (_super) {
    __extends(ReorderVideoPlaylistResponse, _super);
    function ReorderVideoPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReorderVideoPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReorderVideoPlaylistResponse.prototype, "statusCode", void 0);
    return ReorderVideoPlaylistResponse;
}(SpeakeasyBase));
export { ReorderVideoPlaylistResponse };
