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
var Area120tablesTablesRowsDeletePathParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeletePathParams, _super);
    function Area120tablesTablesRowsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeletePathParams.prototype, "name", void 0);
    return Area120tablesTablesRowsDeletePathParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeletePathParams };
var Area120tablesTablesRowsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteQueryParams, _super);
    function Area120tablesTablesRowsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return Area120tablesTablesRowsDeleteQueryParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteQueryParams };
var Area120tablesTablesRowsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteSecurityOption1, _super);
    function Area120tablesTablesRowsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsDeleteSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteSecurityOption1 };
var Area120tablesTablesRowsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteSecurityOption2, _super);
    function Area120tablesTablesRowsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsDeleteSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteSecurityOption2 };
var Area120tablesTablesRowsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteSecurityOption3, _super);
    function Area120tablesTablesRowsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsDeleteSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteSecurityOption3 };
var Area120tablesTablesRowsDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteSecurityOption4, _super);
    function Area120tablesTablesRowsDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsDeleteSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteSecurityOption4 };
var Area120tablesTablesRowsDeleteSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteSecurity, _super);
    function Area120tablesTablesRowsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsDeleteSecurityOption1)
    ], Area120tablesTablesRowsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsDeleteSecurityOption2)
    ], Area120tablesTablesRowsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsDeleteSecurityOption3)
    ], Area120tablesTablesRowsDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsDeleteSecurityOption4)
    ], Area120tablesTablesRowsDeleteSecurity.prototype, "option4", void 0);
    return Area120tablesTablesRowsDeleteSecurity;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteSecurity };
var Area120tablesTablesRowsDeleteRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteRequest, _super);
    function Area120tablesTablesRowsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsDeletePathParams)
    ], Area120tablesTablesRowsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsDeleteQueryParams)
    ], Area120tablesTablesRowsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsDeleteSecurity)
    ], Area120tablesTablesRowsDeleteRequest.prototype, "security", void 0);
    return Area120tablesTablesRowsDeleteRequest;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteRequest };
var Area120tablesTablesRowsDeleteResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsDeleteResponse, _super);
    function Area120tablesTablesRowsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], Area120tablesTablesRowsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsDeleteResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesRowsDeleteResponse;
}(SpeakeasyBase));
export { Area120tablesTablesRowsDeleteResponse };
