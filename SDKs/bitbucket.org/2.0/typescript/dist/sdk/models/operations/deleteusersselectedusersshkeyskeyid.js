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
var DeleteUsersSelectedUserSshKeysKeyIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteUsersSelectedUserSshKeysKeyIdPathParams, _super);
    function DeleteUsersSelectedUserSshKeysKeyIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" }),
        __metadata("design:type", String)
    ], DeleteUsersSelectedUserSshKeysKeyIdPathParams.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" }),
        __metadata("design:type", String)
    ], DeleteUsersSelectedUserSshKeysKeyIdPathParams.prototype, "selectedUser", void 0);
    return DeleteUsersSelectedUserSshKeysKeyIdPathParams;
}(SpeakeasyBase));
export { DeleteUsersSelectedUserSshKeysKeyIdPathParams };
var DeleteUsersSelectedUserSshKeysKeyIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteUsersSelectedUserSshKeysKeyIdSecurity, _super);
    function DeleteUsersSelectedUserSshKeysKeyIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteUsersSelectedUserSshKeysKeyIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], DeleteUsersSelectedUserSshKeysKeyIdSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteUsersSelectedUserSshKeysKeyIdSecurity.prototype, "apiKey", void 0);
    return DeleteUsersSelectedUserSshKeysKeyIdSecurity;
}(SpeakeasyBase));
export { DeleteUsersSelectedUserSshKeysKeyIdSecurity };
var DeleteUsersSelectedUserSshKeysKeyIdRequest = /** @class */ (function (_super) {
    __extends(DeleteUsersSelectedUserSshKeysKeyIdRequest, _super);
    function DeleteUsersSelectedUserSshKeysKeyIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUsersSelectedUserSshKeysKeyIdPathParams)
    ], DeleteUsersSelectedUserSshKeysKeyIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUsersSelectedUserSshKeysKeyIdSecurity)
    ], DeleteUsersSelectedUserSshKeysKeyIdRequest.prototype, "security", void 0);
    return DeleteUsersSelectedUserSshKeysKeyIdRequest;
}(SpeakeasyBase));
export { DeleteUsersSelectedUserSshKeysKeyIdRequest };
var DeleteUsersSelectedUserSshKeysKeyIdResponse = /** @class */ (function (_super) {
    __extends(DeleteUsersSelectedUserSshKeysKeyIdResponse, _super);
    function DeleteUsersSelectedUserSshKeysKeyIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteUsersSelectedUserSshKeysKeyIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteUsersSelectedUserSshKeysKeyIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteUsersSelectedUserSshKeysKeyIdResponse.prototype, "error", void 0);
    return DeleteUsersSelectedUserSshKeysKeyIdResponse;
}(SpeakeasyBase));
export { DeleteUsersSelectedUserSshKeysKeyIdResponse };
