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
var AccountCreateOAuth2SessionPathParams = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionPathParams, _super);
    function AccountCreateOAuth2SessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionPathParams.prototype, "provider", void 0);
    return AccountCreateOAuth2SessionPathParams;
}(SpeakeasyBase));
export { AccountCreateOAuth2SessionPathParams };
var AccountCreateOAuth2SessionQueryParams = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionQueryParams, _super);
    function AccountCreateOAuth2SessionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failure" }),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionQueryParams.prototype, "failure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scopes" }),
        __metadata("design:type", Array)
    ], AccountCreateOAuth2SessionQueryParams.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=success" }),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionQueryParams.prototype, "success", void 0);
    return AccountCreateOAuth2SessionQueryParams;
}(SpeakeasyBase));
export { AccountCreateOAuth2SessionQueryParams };
var AccountCreateOAuth2SessionSecurity = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionSecurity, _super);
    function AccountCreateOAuth2SessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountCreateOAuth2SessionSecurity.prototype, "project", void 0);
    return AccountCreateOAuth2SessionSecurity;
}(SpeakeasyBase));
export { AccountCreateOAuth2SessionSecurity };
var AccountCreateOAuth2SessionRequest = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionRequest, _super);
    function AccountCreateOAuth2SessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountCreateOAuth2SessionPathParams)
    ], AccountCreateOAuth2SessionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountCreateOAuth2SessionQueryParams)
    ], AccountCreateOAuth2SessionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountCreateOAuth2SessionSecurity)
    ], AccountCreateOAuth2SessionRequest.prototype, "security", void 0);
    return AccountCreateOAuth2SessionRequest;
}(SpeakeasyBase));
export { AccountCreateOAuth2SessionRequest };
var AccountCreateOAuth2SessionResponse = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionResponse, _super);
    function AccountCreateOAuth2SessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountCreateOAuth2SessionResponse.prototype, "statusCode", void 0);
    return AccountCreateOAuth2SessionResponse;
}(SpeakeasyBase));
export { AccountCreateOAuth2SessionResponse };
