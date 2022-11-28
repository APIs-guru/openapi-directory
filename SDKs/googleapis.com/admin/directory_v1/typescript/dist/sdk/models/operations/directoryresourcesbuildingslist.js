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
var DirectoryResourcesBuildingsListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsListPathParams, _super);
    function DirectoryResourcesBuildingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListPathParams.prototype, "customer", void 0);
    return DirectoryResourcesBuildingsListPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsListPathParams };
var DirectoryResourcesBuildingsListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsListQueryParams, _super);
    function DirectoryResourcesBuildingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesBuildingsListQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsListQueryParams };
var DirectoryResourcesBuildingsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsListSecurityOption1, _super);
    function DirectoryResourcesBuildingsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesBuildingsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesBuildingsListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryResourcesBuildingsListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsListSecurityOption1 };
var DirectoryResourcesBuildingsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsListSecurityOption2, _super);
    function DirectoryResourcesBuildingsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesBuildingsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesBuildingsListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryResourcesBuildingsListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsListSecurityOption2 };
var DirectoryResourcesBuildingsListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsListSecurity, _super);
    function DirectoryResourcesBuildingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesBuildingsListSecurityOption1)
    ], DirectoryResourcesBuildingsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesBuildingsListSecurityOption2)
    ], DirectoryResourcesBuildingsListSecurity.prototype, "option2", void 0);
    return DirectoryResourcesBuildingsListSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsListSecurity };
var DirectoryResourcesBuildingsListRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsListRequest, _super);
    function DirectoryResourcesBuildingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsListPathParams)
    ], DirectoryResourcesBuildingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsListQueryParams)
    ], DirectoryResourcesBuildingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsListSecurity)
    ], DirectoryResourcesBuildingsListRequest.prototype, "security", void 0);
    return DirectoryResourcesBuildingsListRequest;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsListRequest };
var DirectoryResourcesBuildingsListResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsListResponse, _super);
    function DirectoryResourcesBuildingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Buildings)
    ], DirectoryResourcesBuildingsListResponse.prototype, "buildings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesBuildingsListResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesBuildingsListResponse;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsListResponse };
