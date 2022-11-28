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
var PutUsersSelectedUserHooksUidPathParams = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserHooksUidPathParams, _super);
    function PutUsersSelectedUserHooksUidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" }),
        __metadata("design:type", String)
    ], PutUsersSelectedUserHooksUidPathParams.prototype, "selectedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uid" }),
        __metadata("design:type", String)
    ], PutUsersSelectedUserHooksUidPathParams.prototype, "uid", void 0);
    return PutUsersSelectedUserHooksUidPathParams;
}(SpeakeasyBase));
export { PutUsersSelectedUserHooksUidPathParams };
var PutUsersSelectedUserHooksUidSecurity = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserHooksUidSecurity, _super);
    function PutUsersSelectedUserHooksUidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutUsersSelectedUserHooksUidSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PutUsersSelectedUserHooksUidSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutUsersSelectedUserHooksUidSecurity.prototype, "apiKey", void 0);
    return PutUsersSelectedUserHooksUidSecurity;
}(SpeakeasyBase));
export { PutUsersSelectedUserHooksUidSecurity };
var PutUsersSelectedUserHooksUidRequest = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserHooksUidRequest, _super);
    function PutUsersSelectedUserHooksUidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutUsersSelectedUserHooksUidPathParams)
    ], PutUsersSelectedUserHooksUidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutUsersSelectedUserHooksUidSecurity)
    ], PutUsersSelectedUserHooksUidRequest.prototype, "security", void 0);
    return PutUsersSelectedUserHooksUidRequest;
}(SpeakeasyBase));
export { PutUsersSelectedUserHooksUidRequest };
var PutUsersSelectedUserHooksUidResponse = /** @class */ (function (_super) {
    __extends(PutUsersSelectedUserHooksUidResponse, _super);
    function PutUsersSelectedUserHooksUidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutUsersSelectedUserHooksUidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutUsersSelectedUserHooksUidResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutUsersSelectedUserHooksUidResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutUsersSelectedUserHooksUidResponse.prototype, "webhookSubscription", void 0);
    return PutUsersSelectedUserHooksUidResponse;
}(SpeakeasyBase));
export { PutUsersSelectedUserHooksUidResponse };
