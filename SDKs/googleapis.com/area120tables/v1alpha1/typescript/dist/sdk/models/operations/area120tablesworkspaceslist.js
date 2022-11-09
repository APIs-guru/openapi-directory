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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var Area120tablesWorkspacesListQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListQueryParams, _super);
    function Area120tablesWorkspacesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Area120tablesWorkspacesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesWorkspacesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListQueryParams.prototype, "uploadProtocol", void 0);
    return Area120tablesWorkspacesListQueryParams;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListQueryParams };
var Area120tablesWorkspacesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListSecurityOption1, _super);
    function Area120tablesWorkspacesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesListSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesListSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListSecurityOption1 };
var Area120tablesWorkspacesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListSecurityOption2, _super);
    function Area120tablesWorkspacesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesListSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesListSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListSecurityOption2 };
var Area120tablesWorkspacesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListSecurityOption3, _super);
    function Area120tablesWorkspacesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesListSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesListSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListSecurityOption3 };
var Area120tablesWorkspacesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListSecurityOption4, _super);
    function Area120tablesWorkspacesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesListSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesListSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListSecurityOption4 };
var Area120tablesWorkspacesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListSecurityOption5, _super);
    function Area120tablesWorkspacesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesListSecurityOption5.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesListSecurityOption5;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListSecurityOption5 };
var Area120tablesWorkspacesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListSecurityOption6, _super);
    function Area120tablesWorkspacesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesListSecurityOption6.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesListSecurityOption6;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListSecurityOption6 };
var Area120tablesWorkspacesListSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListSecurity, _super);
    function Area120tablesWorkspacesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesListSecurityOption1)
    ], Area120tablesWorkspacesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesListSecurityOption2)
    ], Area120tablesWorkspacesListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesListSecurityOption3)
    ], Area120tablesWorkspacesListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesListSecurityOption4)
    ], Area120tablesWorkspacesListSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesListSecurityOption5)
    ], Area120tablesWorkspacesListSecurity.prototype, "option5", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesListSecurityOption6)
    ], Area120tablesWorkspacesListSecurity.prototype, "option6", void 0);
    return Area120tablesWorkspacesListSecurity;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListSecurity };
var Area120tablesWorkspacesListRequest = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListRequest, _super);
    function Area120tablesWorkspacesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesWorkspacesListQueryParams)
    ], Area120tablesWorkspacesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesWorkspacesListSecurity)
    ], Area120tablesWorkspacesListRequest.prototype, "security", void 0);
    return Area120tablesWorkspacesListRequest;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListRequest };
var Area120tablesWorkspacesListResponse = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesListResponse, _super);
    function Area120tablesWorkspacesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListWorkspacesResponse)
    ], Area120tablesWorkspacesListResponse.prototype, "listWorkspacesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Area120tablesWorkspacesListResponse.prototype, "statusCode", void 0);
    return Area120tablesWorkspacesListResponse;
}(SpeakeasyBase));
export { Area120tablesWorkspacesListResponse };
