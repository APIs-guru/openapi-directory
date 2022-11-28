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
// UsersDeleteEmailForAuthenticatedRequestBody1
/**
 * Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
**/
var UsersDeleteEmailForAuthenticatedRequestBody1 = /** @class */ (function (_super) {
    __extends(UsersDeleteEmailForAuthenticatedRequestBody1, _super);
    function UsersDeleteEmailForAuthenticatedRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Array)
    ], UsersDeleteEmailForAuthenticatedRequestBody1.prototype, "emails", void 0);
    return UsersDeleteEmailForAuthenticatedRequestBody1;
}(SpeakeasyBase));
export { UsersDeleteEmailForAuthenticatedRequestBody1 };
var UsersDeleteEmailForAuthenticatedRequest = /** @class */ (function (_super) {
    __extends(UsersDeleteEmailForAuthenticatedRequest, _super);
    function UsersDeleteEmailForAuthenticatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UsersDeleteEmailForAuthenticatedRequest.prototype, "request", void 0);
    return UsersDeleteEmailForAuthenticatedRequest;
}(SpeakeasyBase));
export { UsersDeleteEmailForAuthenticatedRequest };
var UsersDeleteEmailForAuthenticatedResponse = /** @class */ (function (_super) {
    __extends(UsersDeleteEmailForAuthenticatedResponse, _super);
    function UsersDeleteEmailForAuthenticatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersDeleteEmailForAuthenticatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersDeleteEmailForAuthenticatedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], UsersDeleteEmailForAuthenticatedResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], UsersDeleteEmailForAuthenticatedResponse.prototype, "validationError", void 0);
    return UsersDeleteEmailForAuthenticatedResponse;
}(SpeakeasyBase));
export { UsersDeleteEmailForAuthenticatedResponse };
