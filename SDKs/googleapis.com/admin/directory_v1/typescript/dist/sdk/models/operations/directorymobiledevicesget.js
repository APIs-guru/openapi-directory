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
var DirectoryMobiledevicesGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetPathParams, _super);
    function DirectoryMobiledevicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetPathParams.prototype, "resourceId", void 0);
    return DirectoryMobiledevicesGetPathParams;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetPathParams };
export var DirectoryMobiledevicesGetProjectionEnum;
(function (DirectoryMobiledevicesGetProjectionEnum) {
    DirectoryMobiledevicesGetProjectionEnum["Basic"] = "BASIC";
    DirectoryMobiledevicesGetProjectionEnum["Full"] = "FULL";
})(DirectoryMobiledevicesGetProjectionEnum || (DirectoryMobiledevicesGetProjectionEnum = {}));
var DirectoryMobiledevicesGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetQueryParams, _super);
    function DirectoryMobiledevicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryMobiledevicesGetQueryParams;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetQueryParams };
var DirectoryMobiledevicesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetSecurityOption1, _super);
    function DirectoryMobiledevicesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetSecurityOption1 };
var DirectoryMobiledevicesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetSecurityOption2, _super);
    function DirectoryMobiledevicesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetSecurityOption2 };
var DirectoryMobiledevicesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetSecurityOption3, _super);
    function DirectoryMobiledevicesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesGetSecurityOption3;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetSecurityOption3 };
var DirectoryMobiledevicesGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetSecurity, _super);
    function DirectoryMobiledevicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesGetSecurityOption1)
    ], DirectoryMobiledevicesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesGetSecurityOption2)
    ], DirectoryMobiledevicesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesGetSecurityOption3)
    ], DirectoryMobiledevicesGetSecurity.prototype, "option3", void 0);
    return DirectoryMobiledevicesGetSecurity;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetSecurity };
var DirectoryMobiledevicesGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetRequest, _super);
    function DirectoryMobiledevicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesGetPathParams)
    ], DirectoryMobiledevicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesGetQueryParams)
    ], DirectoryMobiledevicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesGetSecurity)
    ], DirectoryMobiledevicesGetRequest.prototype, "security", void 0);
    return DirectoryMobiledevicesGetRequest;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetRequest };
var DirectoryMobiledevicesGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesGetResponse, _super);
    function DirectoryMobiledevicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MobileDevice)
    ], DirectoryMobiledevicesGetResponse.prototype, "mobileDevice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryMobiledevicesGetResponse.prototype, "statusCode", void 0);
    return DirectoryMobiledevicesGetResponse;
}(SpeakeasyBase));
export { DirectoryMobiledevicesGetResponse };
