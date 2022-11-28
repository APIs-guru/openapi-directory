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
var DirectoryMembersPatchPathParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersPatchPathParams, _super);
    function DirectoryMembersPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupKey" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchPathParams.prototype, "groupKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberKey" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchPathParams.prototype, "memberKey", void 0);
    return DirectoryMembersPatchPathParams;
}(SpeakeasyBase));
export { DirectoryMembersPatchPathParams };
var DirectoryMembersPatchQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersPatchQueryParams, _super);
    function DirectoryMembersPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryMembersPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryMembersPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryMembersPatchQueryParams;
}(SpeakeasyBase));
export { DirectoryMembersPatchQueryParams };
var DirectoryMembersPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryMembersPatchSecurityOption1, _super);
    function DirectoryMembersPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryMembersPatchSecurityOption1;
}(SpeakeasyBase));
export { DirectoryMembersPatchSecurityOption1 };
var DirectoryMembersPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryMembersPatchSecurityOption2, _super);
    function DirectoryMembersPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryMembersPatchSecurityOption2;
}(SpeakeasyBase));
export { DirectoryMembersPatchSecurityOption2 };
var DirectoryMembersPatchSecurity = /** @class */ (function (_super) {
    __extends(DirectoryMembersPatchSecurity, _super);
    function DirectoryMembersPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersPatchSecurityOption1)
    ], DirectoryMembersPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersPatchSecurityOption2)
    ], DirectoryMembersPatchSecurity.prototype, "option2", void 0);
    return DirectoryMembersPatchSecurity;
}(SpeakeasyBase));
export { DirectoryMembersPatchSecurity };
var DirectoryMembersPatchRequest = /** @class */ (function (_super) {
    __extends(DirectoryMembersPatchRequest, _super);
    function DirectoryMembersPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersPatchPathParams)
    ], DirectoryMembersPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersPatchQueryParams)
    ], DirectoryMembersPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Member)
    ], DirectoryMembersPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersPatchSecurity)
    ], DirectoryMembersPatchRequest.prototype, "security", void 0);
    return DirectoryMembersPatchRequest;
}(SpeakeasyBase));
export { DirectoryMembersPatchRequest };
var DirectoryMembersPatchResponse = /** @class */ (function (_super) {
    __extends(DirectoryMembersPatchResponse, _super);
    function DirectoryMembersPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryMembersPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Member)
    ], DirectoryMembersPatchResponse.prototype, "member", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryMembersPatchResponse.prototype, "statusCode", void 0);
    return DirectoryMembersPatchResponse;
}(SpeakeasyBase));
export { DirectoryMembersPatchResponse };
