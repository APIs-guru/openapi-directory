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
var Area120tablesTablesListQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListQueryParams, _super);
    function Area120tablesTablesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Area120tablesTablesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesListQueryParams.prototype, "uploadProtocol", void 0);
    return Area120tablesTablesListQueryParams;
}(SpeakeasyBase));
export { Area120tablesTablesListQueryParams };
var Area120tablesTablesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListSecurityOption1, _super);
    function Area120tablesTablesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesListSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesListSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesTablesListSecurityOption1 };
var Area120tablesTablesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListSecurityOption2, _super);
    function Area120tablesTablesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesListSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesListSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesTablesListSecurityOption2 };
var Area120tablesTablesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListSecurityOption3, _super);
    function Area120tablesTablesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesListSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesListSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesTablesListSecurityOption3 };
var Area120tablesTablesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListSecurityOption4, _super);
    function Area120tablesTablesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesListSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesListSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesTablesListSecurityOption4 };
var Area120tablesTablesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListSecurityOption5, _super);
    function Area120tablesTablesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesListSecurityOption5.prototype, "oauth2c", void 0);
    return Area120tablesTablesListSecurityOption5;
}(SpeakeasyBase));
export { Area120tablesTablesListSecurityOption5 };
var Area120tablesTablesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListSecurityOption6, _super);
    function Area120tablesTablesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesListSecurityOption6.prototype, "oauth2c", void 0);
    return Area120tablesTablesListSecurityOption6;
}(SpeakeasyBase));
export { Area120tablesTablesListSecurityOption6 };
var Area120tablesTablesListSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListSecurity, _super);
    function Area120tablesTablesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesListSecurityOption1)
    ], Area120tablesTablesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesListSecurityOption2)
    ], Area120tablesTablesListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesListSecurityOption3)
    ], Area120tablesTablesListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesListSecurityOption4)
    ], Area120tablesTablesListSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesListSecurityOption5)
    ], Area120tablesTablesListSecurity.prototype, "option5", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesListSecurityOption6)
    ], Area120tablesTablesListSecurity.prototype, "option6", void 0);
    return Area120tablesTablesListSecurity;
}(SpeakeasyBase));
export { Area120tablesTablesListSecurity };
var Area120tablesTablesListRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListRequest, _super);
    function Area120tablesTablesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesListQueryParams)
    ], Area120tablesTablesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesListSecurity)
    ], Area120tablesTablesListRequest.prototype, "security", void 0);
    return Area120tablesTablesListRequest;
}(SpeakeasyBase));
export { Area120tablesTablesListRequest };
var Area120tablesTablesListResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesListResponse, _super);
    function Area120tablesTablesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Area120tablesTablesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTablesResponse)
    ], Area120tablesTablesListResponse.prototype, "listTablesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Area120tablesTablesListResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesListResponse;
}(SpeakeasyBase));
export { Area120tablesTablesListResponse };
