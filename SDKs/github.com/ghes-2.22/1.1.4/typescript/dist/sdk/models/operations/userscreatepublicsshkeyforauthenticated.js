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
var UsersCreatePublicSshKeyForAuthenticatedRequestBody = /** @class */ (function (_super) {
    __extends(UsersCreatePublicSshKeyForAuthenticatedRequestBody, _super);
    function UsersCreatePublicSshKeyForAuthenticatedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], UsersCreatePublicSshKeyForAuthenticatedRequestBody.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UsersCreatePublicSshKeyForAuthenticatedRequestBody.prototype, "title", void 0);
    return UsersCreatePublicSshKeyForAuthenticatedRequestBody;
}(SpeakeasyBase));
export { UsersCreatePublicSshKeyForAuthenticatedRequestBody };
var UsersCreatePublicSshKeyForAuthenticatedRequest = /** @class */ (function (_super) {
    __extends(UsersCreatePublicSshKeyForAuthenticatedRequest, _super);
    function UsersCreatePublicSshKeyForAuthenticatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UsersCreatePublicSshKeyForAuthenticatedRequestBody)
    ], UsersCreatePublicSshKeyForAuthenticatedRequest.prototype, "request", void 0);
    return UsersCreatePublicSshKeyForAuthenticatedRequest;
}(SpeakeasyBase));
export { UsersCreatePublicSshKeyForAuthenticatedRequest };
var UsersCreatePublicSshKeyForAuthenticatedResponse = /** @class */ (function (_super) {
    __extends(UsersCreatePublicSshKeyForAuthenticatedResponse, _super);
    function UsersCreatePublicSshKeyForAuthenticatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersCreatePublicSshKeyForAuthenticatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersCreatePublicSshKeyForAuthenticatedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], UsersCreatePublicSshKeyForAuthenticatedResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Key)
    ], UsersCreatePublicSshKeyForAuthenticatedResponse.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], UsersCreatePublicSshKeyForAuthenticatedResponse.prototype, "validationError", void 0);
    return UsersCreatePublicSshKeyForAuthenticatedResponse;
}(SpeakeasyBase));
export { UsersCreatePublicSshKeyForAuthenticatedResponse };
