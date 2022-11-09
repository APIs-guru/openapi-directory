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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AccountUpdateRecoveryRequestBody = /** @class */ (function (_super) {
    __extends(AccountUpdateRecoveryRequestBody, _super);
    function AccountUpdateRecoveryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AccountUpdateRecoveryRequestBody.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "json, name=passwordAgain" }),
        __metadata("design:type", String)
    ], AccountUpdateRecoveryRequestBody.prototype, "passwordAgain", void 0);
    __decorate([
        Metadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], AccountUpdateRecoveryRequestBody.prototype, "secret", void 0);
    __decorate([
        Metadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], AccountUpdateRecoveryRequestBody.prototype, "userId", void 0);
    return AccountUpdateRecoveryRequestBody;
}(SpeakeasyBase));
export { AccountUpdateRecoveryRequestBody };
var AccountUpdateRecoverySecurity = /** @class */ (function (_super) {
    __extends(AccountUpdateRecoverySecurity, _super);
    function AccountUpdateRecoverySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AccountUpdateRecoverySecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountUpdateRecoverySecurity.prototype, "project", void 0);
    return AccountUpdateRecoverySecurity;
}(SpeakeasyBase));
export { AccountUpdateRecoverySecurity };
var AccountUpdateRecoveryRequest = /** @class */ (function (_super) {
    __extends(AccountUpdateRecoveryRequest, _super);
    function AccountUpdateRecoveryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountUpdateRecoveryRequestBody)
    ], AccountUpdateRecoveryRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccountUpdateRecoverySecurity)
    ], AccountUpdateRecoveryRequest.prototype, "security", void 0);
    return AccountUpdateRecoveryRequest;
}(SpeakeasyBase));
export { AccountUpdateRecoveryRequest };
var AccountUpdateRecoveryResponse = /** @class */ (function (_super) {
    __extends(AccountUpdateRecoveryResponse, _super);
    function AccountUpdateRecoveryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccountUpdateRecoveryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccountUpdateRecoveryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Token)
    ], AccountUpdateRecoveryResponse.prototype, "token", void 0);
    return AccountUpdateRecoveryResponse;
}(SpeakeasyBase));
export { AccountUpdateRecoveryResponse };
