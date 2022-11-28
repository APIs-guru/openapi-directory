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
var PostAbusesRequestBodyAccount = /** @class */ (function (_super) {
    __extends(PostAbusesRequestBodyAccount, _super);
    function PostAbusesRequestBodyAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostAbusesRequestBodyAccount.prototype, "id", void 0);
    return PostAbusesRequestBodyAccount;
}(SpeakeasyBase));
export { PostAbusesRequestBodyAccount };
var PostAbusesRequestBodyComment = /** @class */ (function (_super) {
    __extends(PostAbusesRequestBodyComment, _super);
    function PostAbusesRequestBodyComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostAbusesRequestBodyComment.prototype, "id", void 0);
    return PostAbusesRequestBodyComment;
}(SpeakeasyBase));
export { PostAbusesRequestBodyComment };
var PostAbusesRequestBodyVideo = /** @class */ (function (_super) {
    __extends(PostAbusesRequestBodyVideo, _super);
    function PostAbusesRequestBodyVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endAt" }),
        __metadata("design:type", Number)
    ], PostAbusesRequestBodyVideo.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostAbusesRequestBodyVideo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAt" }),
        __metadata("design:type", Number)
    ], PostAbusesRequestBodyVideo.prototype, "startAt", void 0);
    return PostAbusesRequestBodyVideo;
}(SpeakeasyBase));
export { PostAbusesRequestBodyVideo };
var PostAbusesRequestBody = /** @class */ (function (_super) {
    __extends(PostAbusesRequestBody, _super);
    function PostAbusesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", PostAbusesRequestBodyAccount)
    ], PostAbusesRequestBody.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", PostAbusesRequestBodyComment)
    ], PostAbusesRequestBody.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predefinedReasons" }),
        __metadata("design:type", Array)
    ], PostAbusesRequestBody.prototype, "predefinedReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PostAbusesRequestBody.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video" }),
        __metadata("design:type", PostAbusesRequestBodyVideo)
    ], PostAbusesRequestBody.prototype, "video", void 0);
    return PostAbusesRequestBody;
}(SpeakeasyBase));
export { PostAbusesRequestBody };
var PostAbusesSecurity = /** @class */ (function (_super) {
    __extends(PostAbusesSecurity, _super);
    function PostAbusesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PostAbusesSecurity.prototype, "oAuth2", void 0);
    return PostAbusesSecurity;
}(SpeakeasyBase));
export { PostAbusesSecurity };
var PostAbuses200ApplicationJsonAbuse = /** @class */ (function (_super) {
    __extends(PostAbuses200ApplicationJsonAbuse, _super);
    function PostAbuses200ApplicationJsonAbuse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostAbuses200ApplicationJsonAbuse.prototype, "id", void 0);
    return PostAbuses200ApplicationJsonAbuse;
}(SpeakeasyBase));
export { PostAbuses200ApplicationJsonAbuse };
var PostAbuses200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAbuses200ApplicationJson, _super);
    function PostAbuses200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abuse" }),
        __metadata("design:type", PostAbuses200ApplicationJsonAbuse)
    ], PostAbuses200ApplicationJson.prototype, "abuse", void 0);
    return PostAbuses200ApplicationJson;
}(SpeakeasyBase));
export { PostAbuses200ApplicationJson };
var PostAbusesRequest = /** @class */ (function (_super) {
    __extends(PostAbusesRequest, _super);
    function PostAbusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAbusesRequestBody)
    ], PostAbusesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAbusesSecurity)
    ], PostAbusesRequest.prototype, "security", void 0);
    return PostAbusesRequest;
}(SpeakeasyBase));
export { PostAbusesRequest };
var PostAbusesResponse = /** @class */ (function (_super) {
    __extends(PostAbusesResponse, _super);
    function PostAbusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAbusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAbuses200ApplicationJson)
    ], PostAbusesResponse.prototype, "postAbuses200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAbusesResponse.prototype, "statusCode", void 0);
    return PostAbusesResponse;
}(SpeakeasyBase));
export { PostAbusesResponse };
