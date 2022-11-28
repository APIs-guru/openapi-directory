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
var RemoveOAuthAuthorizationsPathParams = /** @class */ (function (_super) {
    __extends(RemoveOAuthAuthorizationsPathParams, _super);
    function RemoveOAuthAuthorizationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], RemoveOAuthAuthorizationsPathParams.prototype, "clientId", void 0);
    return RemoveOAuthAuthorizationsPathParams;
}(SpeakeasyBase));
export { RemoveOAuthAuthorizationsPathParams };
var RemoveOAuthAuthorizationsHeaders = /** @class */ (function (_super) {
    __extends(RemoveOAuthAuthorizationsHeaders, _super);
    function RemoveOAuthAuthorizationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RemoveOAuthAuthorizationsHeaders.prototype, "xSdsAuthToken", void 0);
    return RemoveOAuthAuthorizationsHeaders;
}(SpeakeasyBase));
export { RemoveOAuthAuthorizationsHeaders };
var RemoveOAuthAuthorizationsRequest = /** @class */ (function (_super) {
    __extends(RemoveOAuthAuthorizationsRequest, _super);
    function RemoveOAuthAuthorizationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveOAuthAuthorizationsPathParams)
    ], RemoveOAuthAuthorizationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveOAuthAuthorizationsHeaders)
    ], RemoveOAuthAuthorizationsRequest.prototype, "headers", void 0);
    return RemoveOAuthAuthorizationsRequest;
}(SpeakeasyBase));
export { RemoveOAuthAuthorizationsRequest };
var RemoveOAuthAuthorizationsResponse = /** @class */ (function (_super) {
    __extends(RemoveOAuthAuthorizationsResponse, _super);
    function RemoveOAuthAuthorizationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveOAuthAuthorizationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveOAuthAuthorizationsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveOAuthAuthorizationsResponse.prototype, "statusCode", void 0);
    return RemoveOAuthAuthorizationsResponse;
}(SpeakeasyBase));
export { RemoveOAuthAuthorizationsResponse };
