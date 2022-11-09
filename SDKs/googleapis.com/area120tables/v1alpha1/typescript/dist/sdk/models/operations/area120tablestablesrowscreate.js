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
var Area120tablesTablesRowsCreatePathParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreatePathParams, _super);
    function Area120tablesTablesRowsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreatePathParams.prototype, "parent", void 0);
    return Area120tablesTablesRowsCreatePathParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreatePathParams };
export var Area120tablesTablesRowsCreateViewEnum;
(function (Area120tablesTablesRowsCreateViewEnum) {
    Area120tablesTablesRowsCreateViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    Area120tablesTablesRowsCreateViewEnum["ColumnIdView"] = "COLUMN_ID_VIEW";
})(Area120tablesTablesRowsCreateViewEnum || (Area120tablesTablesRowsCreateViewEnum = {}));
var Area120tablesTablesRowsCreateQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateQueryParams, _super);
    function Area120tablesTablesRowsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateQueryParams.prototype, "view", void 0);
    return Area120tablesTablesRowsCreateQueryParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateQueryParams };
var Area120tablesTablesRowsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateSecurityOption1, _super);
    function Area120tablesTablesRowsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsCreateSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateSecurityOption1 };
var Area120tablesTablesRowsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateSecurityOption2, _super);
    function Area120tablesTablesRowsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsCreateSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateSecurityOption2 };
var Area120tablesTablesRowsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateSecurityOption3, _super);
    function Area120tablesTablesRowsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsCreateSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateSecurityOption3 };
var Area120tablesTablesRowsCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateSecurityOption4, _super);
    function Area120tablesTablesRowsCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsCreateSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsCreateSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateSecurityOption4 };
var Area120tablesTablesRowsCreateSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateSecurity, _super);
    function Area120tablesTablesRowsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsCreateSecurityOption1)
    ], Area120tablesTablesRowsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsCreateSecurityOption2)
    ], Area120tablesTablesRowsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsCreateSecurityOption3)
    ], Area120tablesTablesRowsCreateSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsCreateSecurityOption4)
    ], Area120tablesTablesRowsCreateSecurity.prototype, "option4", void 0);
    return Area120tablesTablesRowsCreateSecurity;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateSecurity };
var Area120tablesTablesRowsCreateRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateRequest, _super);
    function Area120tablesTablesRowsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesRowsCreatePathParams)
    ], Area120tablesTablesRowsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesRowsCreateQueryParams)
    ], Area120tablesTablesRowsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Row)
    ], Area120tablesTablesRowsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesRowsCreateSecurity)
    ], Area120tablesTablesRowsCreateRequest.prototype, "security", void 0);
    return Area120tablesTablesRowsCreateRequest;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateRequest };
var Area120tablesTablesRowsCreateResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsCreateResponse, _super);
    function Area120tablesTablesRowsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Row)
    ], Area120tablesTablesRowsCreateResponse.prototype, "row", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsCreateResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesRowsCreateResponse;
}(SpeakeasyBase));
export { Area120tablesTablesRowsCreateResponse };
