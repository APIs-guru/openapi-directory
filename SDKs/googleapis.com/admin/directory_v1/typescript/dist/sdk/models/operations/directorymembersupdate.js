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
var DirectoryMembersUpdatePathParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersUpdatePathParams, _super);
    function DirectoryMembersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupKey" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdatePathParams.prototype, "groupKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberKey" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdatePathParams.prototype, "memberKey", void 0);
    return DirectoryMembersUpdatePathParams;
}(SpeakeasyBase));
export { DirectoryMembersUpdatePathParams };
var DirectoryMembersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersUpdateQueryParams, _super);
    function DirectoryMembersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryMembersUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryMembersUpdateQueryParams;
}(SpeakeasyBase));
export { DirectoryMembersUpdateQueryParams };
var DirectoryMembersUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryMembersUpdateSecurityOption1, _super);
    function DirectoryMembersUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryMembersUpdateSecurityOption1;
}(SpeakeasyBase));
export { DirectoryMembersUpdateSecurityOption1 };
var DirectoryMembersUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryMembersUpdateSecurityOption2, _super);
    function DirectoryMembersUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryMembersUpdateSecurityOption2;
}(SpeakeasyBase));
export { DirectoryMembersUpdateSecurityOption2 };
var DirectoryMembersUpdateSecurity = /** @class */ (function (_super) {
    __extends(DirectoryMembersUpdateSecurity, _super);
    function DirectoryMembersUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersUpdateSecurityOption1)
    ], DirectoryMembersUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersUpdateSecurityOption2)
    ], DirectoryMembersUpdateSecurity.prototype, "option2", void 0);
    return DirectoryMembersUpdateSecurity;
}(SpeakeasyBase));
export { DirectoryMembersUpdateSecurity };
var DirectoryMembersUpdateRequest = /** @class */ (function (_super) {
    __extends(DirectoryMembersUpdateRequest, _super);
    function DirectoryMembersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersUpdatePathParams)
    ], DirectoryMembersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersUpdateQueryParams)
    ], DirectoryMembersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Member)
    ], DirectoryMembersUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersUpdateSecurity)
    ], DirectoryMembersUpdateRequest.prototype, "security", void 0);
    return DirectoryMembersUpdateRequest;
}(SpeakeasyBase));
export { DirectoryMembersUpdateRequest };
var DirectoryMembersUpdateResponse = /** @class */ (function (_super) {
    __extends(DirectoryMembersUpdateResponse, _super);
    function DirectoryMembersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryMembersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Member)
    ], DirectoryMembersUpdateResponse.prototype, "member", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryMembersUpdateResponse.prototype, "statusCode", void 0);
    return DirectoryMembersUpdateResponse;
}(SpeakeasyBase));
export { DirectoryMembersUpdateResponse };
