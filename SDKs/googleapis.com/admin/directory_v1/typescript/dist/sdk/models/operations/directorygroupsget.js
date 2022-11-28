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
var DirectoryGroupsGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryGroupsGetPathParams, _super);
    function DirectoryGroupsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupKey" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetPathParams.prototype, "groupKey", void 0);
    return DirectoryGroupsGetPathParams;
}(SpeakeasyBase));
export { DirectoryGroupsGetPathParams };
var DirectoryGroupsGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryGroupsGetQueryParams, _super);
    function DirectoryGroupsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryGroupsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryGroupsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryGroupsGetQueryParams;
}(SpeakeasyBase));
export { DirectoryGroupsGetQueryParams };
var DirectoryGroupsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryGroupsGetSecurityOption1, _super);
    function DirectoryGroupsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryGroupsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryGroupsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryGroupsGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryGroupsGetSecurityOption1 };
var DirectoryGroupsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryGroupsGetSecurityOption2, _super);
    function DirectoryGroupsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryGroupsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryGroupsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryGroupsGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryGroupsGetSecurityOption2 };
var DirectoryGroupsGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryGroupsGetSecurity, _super);
    function DirectoryGroupsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryGroupsGetSecurityOption1)
    ], DirectoryGroupsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryGroupsGetSecurityOption2)
    ], DirectoryGroupsGetSecurity.prototype, "option2", void 0);
    return DirectoryGroupsGetSecurity;
}(SpeakeasyBase));
export { DirectoryGroupsGetSecurity };
var DirectoryGroupsGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryGroupsGetRequest, _super);
    function DirectoryGroupsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryGroupsGetPathParams)
    ], DirectoryGroupsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryGroupsGetQueryParams)
    ], DirectoryGroupsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryGroupsGetSecurity)
    ], DirectoryGroupsGetRequest.prototype, "security", void 0);
    return DirectoryGroupsGetRequest;
}(SpeakeasyBase));
export { DirectoryGroupsGetRequest };
var DirectoryGroupsGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryGroupsGetResponse, _super);
    function DirectoryGroupsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryGroupsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Group)
    ], DirectoryGroupsGetResponse.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryGroupsGetResponse.prototype, "statusCode", void 0);
    return DirectoryGroupsGetResponse;
}(SpeakeasyBase));
export { DirectoryGroupsGetResponse };
