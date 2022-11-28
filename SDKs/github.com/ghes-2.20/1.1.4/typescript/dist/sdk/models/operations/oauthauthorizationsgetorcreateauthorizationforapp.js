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
var OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams.prototype, "clientId", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams };
var OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note_url" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody.prototype, "noteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody.prototype, "scopes", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody };
var OauthAuthorizationsGetOrCreateAuthorizationForAppRequest = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppRequest, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppRequest.prototype, "request", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppRequest;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppRequest };
var OauthAuthorizationsGetOrCreateAuthorizationForAppResponse = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppResponse, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorization)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppResponse.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppResponse.prototype, "validationError", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppResponse;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppResponse };
