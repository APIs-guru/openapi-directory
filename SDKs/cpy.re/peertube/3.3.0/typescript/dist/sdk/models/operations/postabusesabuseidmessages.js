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
var PostAbusesAbuseIdMessagesPathParams = /** @class */ (function (_super) {
    __extends(PostAbusesAbuseIdMessagesPathParams, _super);
    function PostAbusesAbuseIdMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" }),
        __metadata("design:type", Number)
    ], PostAbusesAbuseIdMessagesPathParams.prototype, "abuseId", void 0);
    return PostAbusesAbuseIdMessagesPathParams;
}(SpeakeasyBase));
export { PostAbusesAbuseIdMessagesPathParams };
var PostAbusesAbuseIdMessagesRequestBody = /** @class */ (function (_super) {
    __extends(PostAbusesAbuseIdMessagesRequestBody, _super);
    function PostAbusesAbuseIdMessagesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAbusesAbuseIdMessagesRequestBody.prototype, "message", void 0);
    return PostAbusesAbuseIdMessagesRequestBody;
}(SpeakeasyBase));
export { PostAbusesAbuseIdMessagesRequestBody };
var PostAbusesAbuseIdMessagesSecurity = /** @class */ (function (_super) {
    __extends(PostAbusesAbuseIdMessagesSecurity, _super);
    function PostAbusesAbuseIdMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PostAbusesAbuseIdMessagesSecurity.prototype, "oAuth2", void 0);
    return PostAbusesAbuseIdMessagesSecurity;
}(SpeakeasyBase));
export { PostAbusesAbuseIdMessagesSecurity };
var PostAbusesAbuseIdMessagesRequest = /** @class */ (function (_super) {
    __extends(PostAbusesAbuseIdMessagesRequest, _super);
    function PostAbusesAbuseIdMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAbusesAbuseIdMessagesPathParams)
    ], PostAbusesAbuseIdMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAbusesAbuseIdMessagesRequestBody)
    ], PostAbusesAbuseIdMessagesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAbusesAbuseIdMessagesSecurity)
    ], PostAbusesAbuseIdMessagesRequest.prototype, "security", void 0);
    return PostAbusesAbuseIdMessagesRequest;
}(SpeakeasyBase));
export { PostAbusesAbuseIdMessagesRequest };
var PostAbusesAbuseIdMessagesResponse = /** @class */ (function (_super) {
    __extends(PostAbusesAbuseIdMessagesResponse, _super);
    function PostAbusesAbuseIdMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAbusesAbuseIdMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAbusesAbuseIdMessagesResponse.prototype, "statusCode", void 0);
    return PostAbusesAbuseIdMessagesResponse;
}(SpeakeasyBase));
export { PostAbusesAbuseIdMessagesResponse };
