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
var GetUsersSelectedUserHooksPathParams = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserHooksPathParams, _super);
    function GetUsersSelectedUserHooksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" }),
        __metadata("design:type", String)
    ], GetUsersSelectedUserHooksPathParams.prototype, "selectedUser", void 0);
    return GetUsersSelectedUserHooksPathParams;
}(SpeakeasyBase));
export { GetUsersSelectedUserHooksPathParams };
var GetUsersSelectedUserHooksSecurity = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserHooksSecurity, _super);
    function GetUsersSelectedUserHooksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetUsersSelectedUserHooksSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetUsersSelectedUserHooksSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUsersSelectedUserHooksSecurity.prototype, "apiKey", void 0);
    return GetUsersSelectedUserHooksSecurity;
}(SpeakeasyBase));
export { GetUsersSelectedUserHooksSecurity };
var GetUsersSelectedUserHooksRequest = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserHooksRequest, _super);
    function GetUsersSelectedUserHooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersSelectedUserHooksPathParams)
    ], GetUsersSelectedUserHooksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersSelectedUserHooksSecurity)
    ], GetUsersSelectedUserHooksRequest.prototype, "security", void 0);
    return GetUsersSelectedUserHooksRequest;
}(SpeakeasyBase));
export { GetUsersSelectedUserHooksRequest };
var GetUsersSelectedUserHooksResponse = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserHooksResponse, _super);
    function GetUsersSelectedUserHooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersSelectedUserHooksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersSelectedUserHooksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetUsersSelectedUserHooksResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedWebhookSubscriptions)
    ], GetUsersSelectedUserHooksResponse.prototype, "paginatedWebhookSubscriptions", void 0);
    return GetUsersSelectedUserHooksResponse;
}(SpeakeasyBase));
export { GetUsersSelectedUserHooksResponse };
