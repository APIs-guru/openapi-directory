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
var UsersAddEmailForAuthenticatedRequestBody1 = /** @class */ (function (_super) {
    __extends(UsersAddEmailForAuthenticatedRequestBody1, _super);
    function UsersAddEmailForAuthenticatedRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Array)
    ], UsersAddEmailForAuthenticatedRequestBody1.prototype, "emails", void 0);
    return UsersAddEmailForAuthenticatedRequestBody1;
}(SpeakeasyBase));
export { UsersAddEmailForAuthenticatedRequestBody1 };
var UsersAddEmailForAuthenticatedRequest = /** @class */ (function (_super) {
    __extends(UsersAddEmailForAuthenticatedRequest, _super);
    function UsersAddEmailForAuthenticatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UsersAddEmailForAuthenticatedRequest.prototype, "request", void 0);
    return UsersAddEmailForAuthenticatedRequest;
}(SpeakeasyBase));
export { UsersAddEmailForAuthenticatedRequest };
var UsersAddEmailForAuthenticatedResponse = /** @class */ (function (_super) {
    __extends(UsersAddEmailForAuthenticatedResponse, _super);
    function UsersAddEmailForAuthenticatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersAddEmailForAuthenticatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersAddEmailForAuthenticatedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], UsersAddEmailForAuthenticatedResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Email }),
        __metadata("design:type", Array)
    ], UsersAddEmailForAuthenticatedResponse.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], UsersAddEmailForAuthenticatedResponse.prototype, "validationError", void 0);
    return UsersAddEmailForAuthenticatedResponse;
}(SpeakeasyBase));
export { UsersAddEmailForAuthenticatedResponse };
