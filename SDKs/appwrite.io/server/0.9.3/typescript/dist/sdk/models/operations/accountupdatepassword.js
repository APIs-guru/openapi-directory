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
var AccountUpdatePasswordRequestBody = /** @class */ (function (_super) {
    __extends(AccountUpdatePasswordRequestBody, _super);
    function AccountUpdatePasswordRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oldPassword" }),
        __metadata("design:type", String)
    ], AccountUpdatePasswordRequestBody.prototype, "oldPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AccountUpdatePasswordRequestBody.prototype, "password", void 0);
    return AccountUpdatePasswordRequestBody;
}(SpeakeasyBase));
export { AccountUpdatePasswordRequestBody };
var AccountUpdatePasswordSecurity = /** @class */ (function (_super) {
    __extends(AccountUpdatePasswordSecurity, _super);
    function AccountUpdatePasswordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AccountUpdatePasswordSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountUpdatePasswordSecurity.prototype, "project", void 0);
    return AccountUpdatePasswordSecurity;
}(SpeakeasyBase));
export { AccountUpdatePasswordSecurity };
var AccountUpdatePasswordRequest = /** @class */ (function (_super) {
    __extends(AccountUpdatePasswordRequest, _super);
    function AccountUpdatePasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountUpdatePasswordRequestBody)
    ], AccountUpdatePasswordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountUpdatePasswordSecurity)
    ], AccountUpdatePasswordRequest.prototype, "security", void 0);
    return AccountUpdatePasswordRequest;
}(SpeakeasyBase));
export { AccountUpdatePasswordRequest };
var AccountUpdatePasswordResponse = /** @class */ (function (_super) {
    __extends(AccountUpdatePasswordResponse, _super);
    function AccountUpdatePasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountUpdatePasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountUpdatePasswordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.User)
    ], AccountUpdatePasswordResponse.prototype, "user", void 0);
    return AccountUpdatePasswordResponse;
}(SpeakeasyBase));
export { AccountUpdatePasswordResponse };
