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
var DirectoryChromeosdevicesGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesGetPathParams, _super);
    function DirectoryChromeosdevicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetPathParams.prototype, "deviceId", void 0);
    return DirectoryChromeosdevicesGetPathParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesGetPathParams };
export var DirectoryChromeosdevicesGetProjectionEnum;
(function (DirectoryChromeosdevicesGetProjectionEnum) {
    DirectoryChromeosdevicesGetProjectionEnum["Basic"] = "BASIC";
    DirectoryChromeosdevicesGetProjectionEnum["Full"] = "FULL";
})(DirectoryChromeosdevicesGetProjectionEnum || (DirectoryChromeosdevicesGetProjectionEnum = {}));
var DirectoryChromeosdevicesGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesGetQueryParams, _super);
    function DirectoryChromeosdevicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryChromeosdevicesGetQueryParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesGetQueryParams };
var DirectoryChromeosdevicesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesGetSecurityOption1, _super);
    function DirectoryChromeosdevicesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryChromeosdevicesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryChromeosdevicesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryChromeosdevicesGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesGetSecurityOption1 };
var DirectoryChromeosdevicesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesGetSecurityOption2, _super);
    function DirectoryChromeosdevicesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryChromeosdevicesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryChromeosdevicesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryChromeosdevicesGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesGetSecurityOption2 };
var DirectoryChromeosdevicesGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesGetSecurity, _super);
    function DirectoryChromeosdevicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryChromeosdevicesGetSecurityOption1)
    ], DirectoryChromeosdevicesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryChromeosdevicesGetSecurityOption2)
    ], DirectoryChromeosdevicesGetSecurity.prototype, "option2", void 0);
    return DirectoryChromeosdevicesGetSecurity;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesGetSecurity };
var DirectoryChromeosdevicesGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesGetRequest, _super);
    function DirectoryChromeosdevicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesGetPathParams)
    ], DirectoryChromeosdevicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesGetQueryParams)
    ], DirectoryChromeosdevicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesGetSecurity)
    ], DirectoryChromeosdevicesGetRequest.prototype, "security", void 0);
    return DirectoryChromeosdevicesGetRequest;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesGetRequest };
var DirectoryChromeosdevicesGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesGetResponse, _super);
    function DirectoryChromeosdevicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChromeOsDevice)
    ], DirectoryChromeosdevicesGetResponse.prototype, "chromeOsDevice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryChromeosdevicesGetResponse.prototype, "statusCode", void 0);
    return DirectoryChromeosdevicesGetResponse;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesGetResponse };
