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
var AccountCreateSessionRequestBody = /** @class */ (function (_super) {
    __extends(AccountCreateSessionRequestBody, _super);
    function AccountCreateSessionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountCreateSessionRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AccountCreateSessionRequestBody.prototype, "password", void 0);
    return AccountCreateSessionRequestBody;
}(SpeakeasyBase));
export { AccountCreateSessionRequestBody };
var AccountCreateSessionSecurity = /** @class */ (function (_super) {
    __extends(AccountCreateSessionSecurity, _super);
    function AccountCreateSessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountCreateSessionSecurity.prototype, "project", void 0);
    return AccountCreateSessionSecurity;
}(SpeakeasyBase));
export { AccountCreateSessionSecurity };
var AccountCreateSessionRequest = /** @class */ (function (_super) {
    __extends(AccountCreateSessionRequest, _super);
    function AccountCreateSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountCreateSessionRequestBody)
    ], AccountCreateSessionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountCreateSessionSecurity)
    ], AccountCreateSessionRequest.prototype, "security", void 0);
    return AccountCreateSessionRequest;
}(SpeakeasyBase));
export { AccountCreateSessionRequest };
var AccountCreateSessionResponse = /** @class */ (function (_super) {
    __extends(AccountCreateSessionResponse, _super);
    function AccountCreateSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountCreateSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountCreateSessionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Session)
    ], AccountCreateSessionResponse.prototype, "session", void 0);
    return AccountCreateSessionResponse;
}(SpeakeasyBase));
export { AccountCreateSessionResponse };
