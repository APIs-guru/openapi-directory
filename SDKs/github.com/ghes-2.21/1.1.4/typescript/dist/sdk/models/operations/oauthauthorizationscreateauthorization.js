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
var OauthAuthorizationsCreateAuthorizationRequestBody = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsCreateAuthorizationRequestBody, _super);
    function OauthAuthorizationsCreateAuthorizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsCreateAuthorizationRequestBody.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsCreateAuthorizationRequestBody.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsCreateAuthorizationRequestBody.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsCreateAuthorizationRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note_url" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsCreateAuthorizationRequestBody.prototype, "noteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], OauthAuthorizationsCreateAuthorizationRequestBody.prototype, "scopes", void 0);
    return OauthAuthorizationsCreateAuthorizationRequestBody;
}(SpeakeasyBase));
export { OauthAuthorizationsCreateAuthorizationRequestBody };
var OauthAuthorizationsCreateAuthorizationRequest = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsCreateAuthorizationRequest, _super);
    function OauthAuthorizationsCreateAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OauthAuthorizationsCreateAuthorizationRequestBody)
    ], OauthAuthorizationsCreateAuthorizationRequest.prototype, "request", void 0);
    return OauthAuthorizationsCreateAuthorizationRequest;
}(SpeakeasyBase));
export { OauthAuthorizationsCreateAuthorizationRequest };
var OauthAuthorizationsCreateAuthorizationResponse = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsCreateAuthorizationResponse, _super);
    function OauthAuthorizationsCreateAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OauthAuthorizationsCreateAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OauthAuthorizationsCreateAuthorizationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OauthAuthorizationsCreateAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorization)
    ], OauthAuthorizationsCreateAuthorizationResponse.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OauthAuthorizationsCreateAuthorizationResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OauthAuthorizationsCreateAuthorizationResponse.prototype, "validationError", void 0);
    return OauthAuthorizationsCreateAuthorizationResponse;
}(SpeakeasyBase));
export { OauthAuthorizationsCreateAuthorizationResponse };
