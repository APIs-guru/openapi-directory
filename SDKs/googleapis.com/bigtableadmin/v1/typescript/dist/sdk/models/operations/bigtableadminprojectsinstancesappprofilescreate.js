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
var BigtableadminProjectsInstancesAppProfilesCreatePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreatePathParams, _super);
    function BigtableadminProjectsInstancesAppProfilesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreatePathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreatePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreatePathParams };
var BigtableadminProjectsInstancesAppProfilesCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateQueryParams, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appProfileId" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "appProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreWarnings" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "ignoreWarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateQueryParams };
var BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1 };
var BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2 };
var BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3 };
var BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4 };
var BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5 };
var BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6 };
var BigtableadminProjectsInstancesAppProfilesCreateSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateSecurity, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6)
    ], BigtableadminProjectsInstancesAppProfilesCreateSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateSecurity };
var BigtableadminProjectsInstancesAppProfilesCreateRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateRequest, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreatePathParams)
    ], BigtableadminProjectsInstancesAppProfilesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateQueryParams)
    ], BigtableadminProjectsInstancesAppProfilesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AppProfile)
    ], BigtableadminProjectsInstancesAppProfilesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesCreateSecurity)
    ], BigtableadminProjectsInstancesAppProfilesCreateRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateRequest };
var BigtableadminProjectsInstancesAppProfilesCreateResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesCreateResponse, _super);
    function BigtableadminProjectsInstancesAppProfilesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AppProfile)
    ], BigtableadminProjectsInstancesAppProfilesCreateResponse.prototype, "appProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesAppProfilesCreateResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesAppProfilesCreateResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesCreateResponse };
