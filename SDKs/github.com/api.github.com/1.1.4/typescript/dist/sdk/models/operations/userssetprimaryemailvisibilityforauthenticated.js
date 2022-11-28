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
export var UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum;
(function (UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum) {
    UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum["Public"] = "public";
    UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum["Private"] = "private";
})(UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum || (UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum = {}));
var UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody = /** @class */ (function (_super) {
    __extends(UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody, _super);
    function UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody.prototype, "visibility", void 0);
    return UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody;
}(SpeakeasyBase));
export { UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody };
var UsersSetPrimaryEmailVisibilityForAuthenticatedRequest = /** @class */ (function (_super) {
    __extends(UsersSetPrimaryEmailVisibilityForAuthenticatedRequest, _super);
    function UsersSetPrimaryEmailVisibilityForAuthenticatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedRequest.prototype, "request", void 0);
    return UsersSetPrimaryEmailVisibilityForAuthenticatedRequest;
}(SpeakeasyBase));
export { UsersSetPrimaryEmailVisibilityForAuthenticatedRequest };
var UsersSetPrimaryEmailVisibilityForAuthenticatedResponse = /** @class */ (function (_super) {
    __extends(UsersSetPrimaryEmailVisibilityForAuthenticatedResponse, _super);
    function UsersSetPrimaryEmailVisibilityForAuthenticatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Email }),
        __metadata("design:type", Array)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedResponse.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], UsersSetPrimaryEmailVisibilityForAuthenticatedResponse.prototype, "validationError", void 0);
    return UsersSetPrimaryEmailVisibilityForAuthenticatedResponse;
}(SpeakeasyBase));
export { UsersSetPrimaryEmailVisibilityForAuthenticatedResponse };
