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
var PutUsersSelectedUserSshKeysKeyIdPathParams = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserSshKeysKeyIdPathParams, _super);
    function PutUsersSelectedUserSshKeysKeyIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" }),
        __metadata("design:type", String)
    ], PutUsersSelectedUserSshKeysKeyIdPathParams.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" }),
        __metadata("design:type", String)
    ], PutUsersSelectedUserSshKeysKeyIdPathParams.prototype, "selectedUser", void 0);
    return PutUsersSelectedUserSshKeysKeyIdPathParams;
}(SpeakeasyBase));
export { PutUsersSelectedUserSshKeysKeyIdPathParams };
var PutUsersSelectedUserSshKeysKeyIdSecurity = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserSshKeysKeyIdSecurity, _super);
    function PutUsersSelectedUserSshKeysKeyIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutUsersSelectedUserSshKeysKeyIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PutUsersSelectedUserSshKeysKeyIdSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutUsersSelectedUserSshKeysKeyIdSecurity.prototype, "apiKey", void 0);
    return PutUsersSelectedUserSshKeysKeyIdSecurity;
}(SpeakeasyBase));
export { PutUsersSelectedUserSshKeysKeyIdSecurity };
var PutUsersSelectedUserSshKeysKeyIdRequest = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserSshKeysKeyIdRequest, _super);
    function PutUsersSelectedUserSshKeysKeyIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutUsersSelectedUserSshKeysKeyIdPathParams)
    ], PutUsersSelectedUserSshKeysKeyIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PutUsersSelectedUserSshKeysKeyIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutUsersSelectedUserSshKeysKeyIdSecurity)
    ], PutUsersSelectedUserSshKeysKeyIdRequest.prototype, "security", void 0);
    return PutUsersSelectedUserSshKeysKeyIdRequest;
}(SpeakeasyBase));
export { PutUsersSelectedUserSshKeysKeyIdRequest };
var PutUsersSelectedUserSshKeysKeyIdResponse = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserSshKeysKeyIdResponse, _super);
    function PutUsersSelectedUserSshKeysKeyIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutUsersSelectedUserSshKeysKeyIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutUsersSelectedUserSshKeysKeyIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutUsersSelectedUserSshKeysKeyIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutUsersSelectedUserSshKeysKeyIdResponse.prototype, "sshAccountKey", void 0);
    return PutUsersSelectedUserSshKeysKeyIdResponse;
}(SpeakeasyBase));
export { PutUsersSelectedUserSshKeysKeyIdResponse };
