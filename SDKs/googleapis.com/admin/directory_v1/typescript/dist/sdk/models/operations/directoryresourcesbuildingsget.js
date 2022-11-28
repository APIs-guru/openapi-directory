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
var DirectoryResourcesBuildingsGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsGetPathParams, _super);
    function DirectoryResourcesBuildingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buildingId" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetPathParams.prototype, "buildingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetPathParams.prototype, "customer", void 0);
    return DirectoryResourcesBuildingsGetPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsGetPathParams };
var DirectoryResourcesBuildingsGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsGetQueryParams, _super);
    function DirectoryResourcesBuildingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesBuildingsGetQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsGetQueryParams };
var DirectoryResourcesBuildingsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsGetSecurityOption1, _super);
    function DirectoryResourcesBuildingsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesBuildingsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesBuildingsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryResourcesBuildingsGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsGetSecurityOption1 };
var DirectoryResourcesBuildingsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsGetSecurityOption2, _super);
    function DirectoryResourcesBuildingsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesBuildingsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesBuildingsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryResourcesBuildingsGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsGetSecurityOption2 };
var DirectoryResourcesBuildingsGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsGetSecurity, _super);
    function DirectoryResourcesBuildingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesBuildingsGetSecurityOption1)
    ], DirectoryResourcesBuildingsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesBuildingsGetSecurityOption2)
    ], DirectoryResourcesBuildingsGetSecurity.prototype, "option2", void 0);
    return DirectoryResourcesBuildingsGetSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsGetSecurity };
var DirectoryResourcesBuildingsGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsGetRequest, _super);
    function DirectoryResourcesBuildingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsGetPathParams)
    ], DirectoryResourcesBuildingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsGetQueryParams)
    ], DirectoryResourcesBuildingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsGetSecurity)
    ], DirectoryResourcesBuildingsGetRequest.prototype, "security", void 0);
    return DirectoryResourcesBuildingsGetRequest;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsGetRequest };
var DirectoryResourcesBuildingsGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsGetResponse, _super);
    function DirectoryResourcesBuildingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Building)
    ], DirectoryResourcesBuildingsGetResponse.prototype, "building", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesBuildingsGetResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesBuildingsGetResponse;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsGetResponse };
