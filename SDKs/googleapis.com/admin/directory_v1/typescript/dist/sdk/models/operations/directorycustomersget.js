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
var DirectoryCustomersGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryCustomersGetPathParams, _super);
    function DirectoryCustomersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerKey" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetPathParams.prototype, "customerKey", void 0);
    return DirectoryCustomersGetPathParams;
}(SpeakeasyBase));
export { DirectoryCustomersGetPathParams };
var DirectoryCustomersGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryCustomersGetQueryParams, _super);
    function DirectoryCustomersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryCustomersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryCustomersGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryCustomersGetQueryParams;
}(SpeakeasyBase));
export { DirectoryCustomersGetQueryParams };
var DirectoryCustomersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryCustomersGetSecurityOption1, _super);
    function DirectoryCustomersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryCustomersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryCustomersGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryCustomersGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryCustomersGetSecurityOption1 };
var DirectoryCustomersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryCustomersGetSecurityOption2, _super);
    function DirectoryCustomersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryCustomersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryCustomersGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryCustomersGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryCustomersGetSecurityOption2 };
var DirectoryCustomersGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryCustomersGetSecurity, _super);
    function DirectoryCustomersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryCustomersGetSecurityOption1)
    ], DirectoryCustomersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryCustomersGetSecurityOption2)
    ], DirectoryCustomersGetSecurity.prototype, "option2", void 0);
    return DirectoryCustomersGetSecurity;
}(SpeakeasyBase));
export { DirectoryCustomersGetSecurity };
var DirectoryCustomersGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryCustomersGetRequest, _super);
    function DirectoryCustomersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryCustomersGetPathParams)
    ], DirectoryCustomersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryCustomersGetQueryParams)
    ], DirectoryCustomersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryCustomersGetSecurity)
    ], DirectoryCustomersGetRequest.prototype, "security", void 0);
    return DirectoryCustomersGetRequest;
}(SpeakeasyBase));
export { DirectoryCustomersGetRequest };
var DirectoryCustomersGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryCustomersGetResponse, _super);
    function DirectoryCustomersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryCustomersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Customer)
    ], DirectoryCustomersGetResponse.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryCustomersGetResponse.prototype, "statusCode", void 0);
    return DirectoryCustomersGetResponse;
}(SpeakeasyBase));
export { DirectoryCustomersGetResponse };
