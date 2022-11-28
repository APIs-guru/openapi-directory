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
var OauthAuthorizationsUpdateAuthorizationPathParams = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsUpdateAuthorizationPathParams, _super);
    function OauthAuthorizationsUpdateAuthorizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" }),
        __metadata("design:type", Number)
    ], OauthAuthorizationsUpdateAuthorizationPathParams.prototype, "authorizationId", void 0);
    return OauthAuthorizationsUpdateAuthorizationPathParams;
}(SpeakeasyBase));
export { OauthAuthorizationsUpdateAuthorizationPathParams };
var OauthAuthorizationsUpdateAuthorizationRequestBody = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsUpdateAuthorizationRequestBody, _super);
    function OauthAuthorizationsUpdateAuthorizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_scopes" }),
        __metadata("design:type", Array)
    ], OauthAuthorizationsUpdateAuthorizationRequestBody.prototype, "addScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsUpdateAuthorizationRequestBody.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsUpdateAuthorizationRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note_url" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsUpdateAuthorizationRequestBody.prototype, "noteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remove_scopes" }),
        __metadata("design:type", Array)
    ], OauthAuthorizationsUpdateAuthorizationRequestBody.prototype, "removeScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], OauthAuthorizationsUpdateAuthorizationRequestBody.prototype, "scopes", void 0);
    return OauthAuthorizationsUpdateAuthorizationRequestBody;
}(SpeakeasyBase));
export { OauthAuthorizationsUpdateAuthorizationRequestBody };
var OauthAuthorizationsUpdateAuthorizationRequest = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsUpdateAuthorizationRequest, _super);
    function OauthAuthorizationsUpdateAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OauthAuthorizationsUpdateAuthorizationPathParams)
    ], OauthAuthorizationsUpdateAuthorizationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OauthAuthorizationsUpdateAuthorizationRequestBody)
    ], OauthAuthorizationsUpdateAuthorizationRequest.prototype, "request", void 0);
    return OauthAuthorizationsUpdateAuthorizationRequest;
}(SpeakeasyBase));
export { OauthAuthorizationsUpdateAuthorizationRequest };
var OauthAuthorizationsUpdateAuthorizationResponse = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsUpdateAuthorizationResponse, _super);
    function OauthAuthorizationsUpdateAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OauthAuthorizationsUpdateAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OauthAuthorizationsUpdateAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorization)
    ], OauthAuthorizationsUpdateAuthorizationResponse.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OauthAuthorizationsUpdateAuthorizationResponse.prototype, "validationError", void 0);
    return OauthAuthorizationsUpdateAuthorizationResponse;
}(SpeakeasyBase));
export { OauthAuthorizationsUpdateAuthorizationResponse };
