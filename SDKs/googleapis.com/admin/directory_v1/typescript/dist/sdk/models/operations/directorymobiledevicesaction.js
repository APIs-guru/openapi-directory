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
var DirectoryMobiledevicesActionPathParams = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesActionPathParams, _super);
    function DirectoryMobiledevicesActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionPathParams.prototype, "resourceId", void 0);
    return DirectoryMobiledevicesActionPathParams;
}(SpeakeasyBase));
export { DirectoryMobiledevicesActionPathParams };
var DirectoryMobiledevicesActionQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesActionQueryParams, _super);
    function DirectoryMobiledevicesActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryMobiledevicesActionQueryParams;
}(SpeakeasyBase));
export { DirectoryMobiledevicesActionQueryParams };
var DirectoryMobiledevicesActionSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesActionSecurityOption1, _super);
    function DirectoryMobiledevicesActionSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesActionSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesActionSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesActionSecurityOption1;
}(SpeakeasyBase));
export { DirectoryMobiledevicesActionSecurityOption1 };
var DirectoryMobiledevicesActionSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesActionSecurityOption2, _super);
    function DirectoryMobiledevicesActionSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesActionSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesActionSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesActionSecurityOption2;
}(SpeakeasyBase));
export { DirectoryMobiledevicesActionSecurityOption2 };
var DirectoryMobiledevicesActionSecurity = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesActionSecurity, _super);
    function DirectoryMobiledevicesActionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesActionSecurityOption1)
    ], DirectoryMobiledevicesActionSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesActionSecurityOption2)
    ], DirectoryMobiledevicesActionSecurity.prototype, "option2", void 0);
    return DirectoryMobiledevicesActionSecurity;
}(SpeakeasyBase));
export { DirectoryMobiledevicesActionSecurity };
var DirectoryMobiledevicesActionRequest = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesActionRequest, _super);
    function DirectoryMobiledevicesActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesActionPathParams)
    ], DirectoryMobiledevicesActionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesActionQueryParams)
    ], DirectoryMobiledevicesActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MobileDeviceAction)
    ], DirectoryMobiledevicesActionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesActionSecurity)
    ], DirectoryMobiledevicesActionRequest.prototype, "security", void 0);
    return DirectoryMobiledevicesActionRequest;
}(SpeakeasyBase));
export { DirectoryMobiledevicesActionRequest };
var DirectoryMobiledevicesActionResponse = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesActionResponse, _super);
    function DirectoryMobiledevicesActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryMobiledevicesActionResponse.prototype, "statusCode", void 0);
    return DirectoryMobiledevicesActionResponse;
}(SpeakeasyBase));
export { DirectoryMobiledevicesActionResponse };
