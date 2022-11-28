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
var OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams.prototype, "fingerprint", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams };
var OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note_url" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody.prototype, "noteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody.prototype, "scopes", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody };
var OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest.prototype, "request", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest };
var OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse, _super);
    function OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorization)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse.prototype, "validationError", void 0);
    return OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse;
}(SpeakeasyBase));
export { OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse };
