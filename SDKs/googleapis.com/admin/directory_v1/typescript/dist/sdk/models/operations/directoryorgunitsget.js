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
var DirectoryOrgunitsGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsGetPathParams, _super);
    function DirectoryOrgunitsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orgUnitPath" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetPathParams.prototype, "orgUnitPath", void 0);
    return DirectoryOrgunitsGetPathParams;
}(SpeakeasyBase));
export { DirectoryOrgunitsGetPathParams };
var DirectoryOrgunitsGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsGetQueryParams, _super);
    function DirectoryOrgunitsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryOrgunitsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryOrgunitsGetQueryParams;
}(SpeakeasyBase));
export { DirectoryOrgunitsGetQueryParams };
var DirectoryOrgunitsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsGetSecurityOption1, _super);
    function DirectoryOrgunitsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryOrgunitsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryOrgunitsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryOrgunitsGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryOrgunitsGetSecurityOption1 };
var DirectoryOrgunitsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsGetSecurityOption2, _super);
    function DirectoryOrgunitsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryOrgunitsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryOrgunitsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryOrgunitsGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryOrgunitsGetSecurityOption2 };
var DirectoryOrgunitsGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsGetSecurity, _super);
    function DirectoryOrgunitsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryOrgunitsGetSecurityOption1)
    ], DirectoryOrgunitsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryOrgunitsGetSecurityOption2)
    ], DirectoryOrgunitsGetSecurity.prototype, "option2", void 0);
    return DirectoryOrgunitsGetSecurity;
}(SpeakeasyBase));
export { DirectoryOrgunitsGetSecurity };
var DirectoryOrgunitsGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsGetRequest, _super);
    function DirectoryOrgunitsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryOrgunitsGetPathParams)
    ], DirectoryOrgunitsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryOrgunitsGetQueryParams)
    ], DirectoryOrgunitsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryOrgunitsGetSecurity)
    ], DirectoryOrgunitsGetRequest.prototype, "security", void 0);
    return DirectoryOrgunitsGetRequest;
}(SpeakeasyBase));
export { DirectoryOrgunitsGetRequest };
var DirectoryOrgunitsGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsGetResponse, _super);
    function DirectoryOrgunitsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryOrgunitsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrgUnit)
    ], DirectoryOrgunitsGetResponse.prototype, "orgUnit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryOrgunitsGetResponse.prototype, "statusCode", void 0);
    return DirectoryOrgunitsGetResponse;
}(SpeakeasyBase));
export { DirectoryOrgunitsGetResponse };
