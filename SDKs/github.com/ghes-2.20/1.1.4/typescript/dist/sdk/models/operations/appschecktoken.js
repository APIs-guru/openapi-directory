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
var AppsCheckTokenPathParams = /** @class */ (function (_super) {
    __extends(AppsCheckTokenPathParams, _super);
    function AppsCheckTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], AppsCheckTokenPathParams.prototype, "clientId", void 0);
    return AppsCheckTokenPathParams;
}(SpeakeasyBase));
export { AppsCheckTokenPathParams };
var AppsCheckTokenRequestBody = /** @class */ (function (_super) {
    __extends(AppsCheckTokenRequestBody, _super);
    function AppsCheckTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], AppsCheckTokenRequestBody.prototype, "accessToken", void 0);
    return AppsCheckTokenRequestBody;
}(SpeakeasyBase));
export { AppsCheckTokenRequestBody };
var AppsCheckTokenRequest = /** @class */ (function (_super) {
    __extends(AppsCheckTokenRequest, _super);
    function AppsCheckTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsCheckTokenPathParams)
    ], AppsCheckTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AppsCheckTokenRequestBody)
    ], AppsCheckTokenRequest.prototype, "request", void 0);
    return AppsCheckTokenRequest;
}(SpeakeasyBase));
export { AppsCheckTokenRequest };
var AppsCheckTokenResponse = /** @class */ (function (_super) {
    __extends(AppsCheckTokenResponse, _super);
    function AppsCheckTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsCheckTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsCheckTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorization)
    ], AppsCheckTokenResponse.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsCheckTokenResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], AppsCheckTokenResponse.prototype, "validationError", void 0);
    return AppsCheckTokenResponse;
}(SpeakeasyBase));
export { AppsCheckTokenResponse };
