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
var DirectoryMembersHasMemberPathParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberPathParams, _super);
    function DirectoryMembersHasMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupKey" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberPathParams.prototype, "groupKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberKey" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberPathParams.prototype, "memberKey", void 0);
    return DirectoryMembersHasMemberPathParams;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberPathParams };
var DirectoryMembersHasMemberQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberQueryParams, _super);
    function DirectoryMembersHasMemberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryMembersHasMemberQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryMembersHasMemberQueryParams;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberQueryParams };
var DirectoryMembersHasMemberSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberSecurityOption1, _super);
    function DirectoryMembersHasMemberSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersHasMemberSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersHasMemberSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryMembersHasMemberSecurityOption1;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberSecurityOption1 };
var DirectoryMembersHasMemberSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberSecurityOption2, _super);
    function DirectoryMembersHasMemberSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersHasMemberSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersHasMemberSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryMembersHasMemberSecurityOption2;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberSecurityOption2 };
var DirectoryMembersHasMemberSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberSecurityOption3, _super);
    function DirectoryMembersHasMemberSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersHasMemberSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersHasMemberSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryMembersHasMemberSecurityOption3;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberSecurityOption3 };
var DirectoryMembersHasMemberSecurityOption4 = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberSecurityOption4, _super);
    function DirectoryMembersHasMemberSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersHasMemberSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersHasMemberSecurityOption4.prototype, "oauth2c", void 0);
    return DirectoryMembersHasMemberSecurityOption4;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberSecurityOption4 };
var DirectoryMembersHasMemberSecurity = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberSecurity, _super);
    function DirectoryMembersHasMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersHasMemberSecurityOption1)
    ], DirectoryMembersHasMemberSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersHasMemberSecurityOption2)
    ], DirectoryMembersHasMemberSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersHasMemberSecurityOption3)
    ], DirectoryMembersHasMemberSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersHasMemberSecurityOption4)
    ], DirectoryMembersHasMemberSecurity.prototype, "option4", void 0);
    return DirectoryMembersHasMemberSecurity;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberSecurity };
var DirectoryMembersHasMemberRequest = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberRequest, _super);
    function DirectoryMembersHasMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersHasMemberPathParams)
    ], DirectoryMembersHasMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersHasMemberQueryParams)
    ], DirectoryMembersHasMemberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersHasMemberSecurity)
    ], DirectoryMembersHasMemberRequest.prototype, "security", void 0);
    return DirectoryMembersHasMemberRequest;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberRequest };
var DirectoryMembersHasMemberResponse = /** @class */ (function (_super) {
    __extends(DirectoryMembersHasMemberResponse, _super);
    function DirectoryMembersHasMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryMembersHasMemberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MembersHasMember)
    ], DirectoryMembersHasMemberResponse.prototype, "membersHasMember", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryMembersHasMemberResponse.prototype, "statusCode", void 0);
    return DirectoryMembersHasMemberResponse;
}(SpeakeasyBase));
export { DirectoryMembersHasMemberResponse };
