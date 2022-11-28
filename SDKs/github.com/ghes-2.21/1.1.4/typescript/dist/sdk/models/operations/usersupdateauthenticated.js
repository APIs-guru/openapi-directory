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
var UsersUpdateAuthenticatedRequestBody = /** @class */ (function (_super) {
    __extends(UsersUpdateAuthenticatedRequestBody, _super);
    function UsersUpdateAuthenticatedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blog" }),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hireable" }),
        __metadata("design:type", Boolean)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "hireable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twitter_username" }),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedRequestBody.prototype, "twitterUsername", void 0);
    return UsersUpdateAuthenticatedRequestBody;
}(SpeakeasyBase));
export { UsersUpdateAuthenticatedRequestBody };
var UsersUpdateAuthenticatedRequest = /** @class */ (function (_super) {
    __extends(UsersUpdateAuthenticatedRequest, _super);
    function UsersUpdateAuthenticatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UsersUpdateAuthenticatedRequestBody)
    ], UsersUpdateAuthenticatedRequest.prototype, "request", void 0);
    return UsersUpdateAuthenticatedRequest;
}(SpeakeasyBase));
export { UsersUpdateAuthenticatedRequest };
var UsersUpdateAuthenticatedResponse = /** @class */ (function (_super) {
    __extends(UsersUpdateAuthenticatedResponse, _super);
    function UsersUpdateAuthenticatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersUpdateAuthenticatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersUpdateAuthenticatedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], UsersUpdateAuthenticatedResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PrivateUser)
    ], UsersUpdateAuthenticatedResponse.prototype, "privateUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], UsersUpdateAuthenticatedResponse.prototype, "validationError", void 0);
    return UsersUpdateAuthenticatedResponse;
}(SpeakeasyBase));
export { UsersUpdateAuthenticatedResponse };
