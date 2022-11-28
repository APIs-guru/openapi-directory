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
var DirectoryResourcesFeaturesGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesGetPathParams, _super);
    function DirectoryResourcesFeaturesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetPathParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=featureKey" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetPathParams.prototype, "featureKey", void 0);
    return DirectoryResourcesFeaturesGetPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesGetPathParams };
var DirectoryResourcesFeaturesGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesGetQueryParams, _super);
    function DirectoryResourcesFeaturesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesFeaturesGetQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesGetQueryParams };
var DirectoryResourcesFeaturesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesGetSecurityOption1, _super);
    function DirectoryResourcesFeaturesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesFeaturesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesFeaturesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryResourcesFeaturesGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesGetSecurityOption1 };
var DirectoryResourcesFeaturesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesGetSecurityOption2, _super);
    function DirectoryResourcesFeaturesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesFeaturesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesFeaturesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryResourcesFeaturesGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesGetSecurityOption2 };
var DirectoryResourcesFeaturesGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesGetSecurity, _super);
    function DirectoryResourcesFeaturesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesFeaturesGetSecurityOption1)
    ], DirectoryResourcesFeaturesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesFeaturesGetSecurityOption2)
    ], DirectoryResourcesFeaturesGetSecurity.prototype, "option2", void 0);
    return DirectoryResourcesFeaturesGetSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesGetSecurity };
var DirectoryResourcesFeaturesGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesGetRequest, _super);
    function DirectoryResourcesFeaturesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesGetPathParams)
    ], DirectoryResourcesFeaturesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesGetQueryParams)
    ], DirectoryResourcesFeaturesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesGetSecurity)
    ], DirectoryResourcesFeaturesGetRequest.prototype, "security", void 0);
    return DirectoryResourcesFeaturesGetRequest;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesGetRequest };
var DirectoryResourcesFeaturesGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesGetResponse, _super);
    function DirectoryResourcesFeaturesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Feature)
    ], DirectoryResourcesFeaturesGetResponse.prototype, "feature", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesFeaturesGetResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesFeaturesGetResponse;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesGetResponse };
