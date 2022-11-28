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
var VerifyUserPathParams = /** @class */ (function (_super) {
    __extends(VerifyUserPathParams, _super);
    function VerifyUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], VerifyUserPathParams.prototype, "id", void 0);
    return VerifyUserPathParams;
}(SpeakeasyBase));
export { VerifyUserPathParams };
var VerifyUserRequestBody = /** @class */ (function (_super) {
    __extends(VerifyUserRequestBody, _super);
    function VerifyUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPendingEmail" }),
        __metadata("design:type", Boolean)
    ], VerifyUserRequestBody.prototype, "isPendingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verificationString" }),
        __metadata("design:type", String)
    ], VerifyUserRequestBody.prototype, "verificationString", void 0);
    return VerifyUserRequestBody;
}(SpeakeasyBase));
export { VerifyUserRequestBody };
var VerifyUserRequest = /** @class */ (function (_super) {
    __extends(VerifyUserRequest, _super);
    function VerifyUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VerifyUserPathParams)
    ], VerifyUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", VerifyUserRequestBody)
    ], VerifyUserRequest.prototype, "request", void 0);
    return VerifyUserRequest;
}(SpeakeasyBase));
export { VerifyUserRequest };
var VerifyUserResponse = /** @class */ (function (_super) {
    __extends(VerifyUserResponse, _super);
    function VerifyUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VerifyUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VerifyUserResponse.prototype, "statusCode", void 0);
    return VerifyUserResponse;
}(SpeakeasyBase));
export { VerifyUserResponse };
