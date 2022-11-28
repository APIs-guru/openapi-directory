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
var GetUsersSelectedUserSshKeysPathParams = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSshKeysPathParams, _super);
    function GetUsersSelectedUserSshKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" }),
        __metadata("design:type", String)
    ], GetUsersSelectedUserSshKeysPathParams.prototype, "selectedUser", void 0);
    return GetUsersSelectedUserSshKeysPathParams;
}(SpeakeasyBase));
export { GetUsersSelectedUserSshKeysPathParams };
var GetUsersSelectedUserSshKeysSecurity = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSshKeysSecurity, _super);
    function GetUsersSelectedUserSshKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetUsersSelectedUserSshKeysSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetUsersSelectedUserSshKeysSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUsersSelectedUserSshKeysSecurity.prototype, "apiKey", void 0);
    return GetUsersSelectedUserSshKeysSecurity;
}(SpeakeasyBase));
export { GetUsersSelectedUserSshKeysSecurity };
var GetUsersSelectedUserSshKeysRequest = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSshKeysRequest, _super);
    function GetUsersSelectedUserSshKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersSelectedUserSshKeysPathParams)
    ], GetUsersSelectedUserSshKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersSelectedUserSshKeysSecurity)
    ], GetUsersSelectedUserSshKeysRequest.prototype, "security", void 0);
    return GetUsersSelectedUserSshKeysRequest;
}(SpeakeasyBase));
export { GetUsersSelectedUserSshKeysRequest };
var GetUsersSelectedUserSshKeysResponse = /** @class */ (function (_super) {
    __extends(GetUsersSelectedUserSshKeysResponse, _super);
    function GetUsersSelectedUserSshKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersSelectedUserSshKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersSelectedUserSshKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetUsersSelectedUserSshKeysResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedSshUserKeys)
    ], GetUsersSelectedUserSshKeysResponse.prototype, "paginatedSshUserKeys", void 0);
    return GetUsersSelectedUserSshKeysResponse;
}(SpeakeasyBase));
export { GetUsersSelectedUserSshKeysResponse };
