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
var FetchFieldByIdPathParams = /** @class */ (function (_super) {
    __extends(FetchFieldByIdPathParams, _super);
    function FetchFieldByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fieldId" }),
        __metadata("design:type", String)
    ], FetchFieldByIdPathParams.prototype, "fieldId", void 0);
    return FetchFieldByIdPathParams;
}(SpeakeasyBase));
export { FetchFieldByIdPathParams };
var FetchFieldByIdSecurity = /** @class */ (function (_super) {
    __extends(FetchFieldByIdSecurity, _super);
    function FetchFieldByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FetchFieldByIdSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], FetchFieldByIdSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return FetchFieldByIdSecurity;
}(SpeakeasyBase));
export { FetchFieldByIdSecurity };
var FetchFieldByIdRequest = /** @class */ (function (_super) {
    __extends(FetchFieldByIdRequest, _super);
    function FetchFieldByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFieldByIdPathParams)
    ], FetchFieldByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFieldByIdSecurity)
    ], FetchFieldByIdRequest.prototype, "security", void 0);
    return FetchFieldByIdRequest;
}(SpeakeasyBase));
export { FetchFieldByIdRequest };
var FetchFieldByIdResponse = /** @class */ (function (_super) {
    __extends(FetchFieldByIdResponse, _super);
    function FetchFieldByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFieldByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], FetchFieldByIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FetchFieldByIdResponse.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FetchFieldByIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchFieldByIdResponse.prototype, "statusCode", void 0);
    return FetchFieldByIdResponse;
}(SpeakeasyBase));
export { FetchFieldByIdResponse };
