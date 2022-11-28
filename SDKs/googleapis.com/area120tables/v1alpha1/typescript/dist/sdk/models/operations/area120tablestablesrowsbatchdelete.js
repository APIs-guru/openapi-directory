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
var Area120tablesTablesRowsBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeletePathParams, _super);
    function Area120tablesTablesRowsBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeletePathParams.prototype, "parent", void 0);
    return Area120tablesTablesRowsBatchDeletePathParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeletePathParams };
var Area120tablesTablesRowsBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteQueryParams, _super);
    function Area120tablesTablesRowsBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return Area120tablesTablesRowsBatchDeleteQueryParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteQueryParams };
var Area120tablesTablesRowsBatchDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteSecurityOption1, _super);
    function Area120tablesTablesRowsBatchDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchDeleteSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteSecurityOption1 };
var Area120tablesTablesRowsBatchDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteSecurityOption2, _super);
    function Area120tablesTablesRowsBatchDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchDeleteSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteSecurityOption2 };
var Area120tablesTablesRowsBatchDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteSecurityOption3, _super);
    function Area120tablesTablesRowsBatchDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchDeleteSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteSecurityOption3 };
var Area120tablesTablesRowsBatchDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteSecurityOption4, _super);
    function Area120tablesTablesRowsBatchDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchDeleteSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteSecurityOption4 };
var Area120tablesTablesRowsBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteSecurity, _super);
    function Area120tablesTablesRowsBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchDeleteSecurityOption1)
    ], Area120tablesTablesRowsBatchDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchDeleteSecurityOption2)
    ], Area120tablesTablesRowsBatchDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchDeleteSecurityOption3)
    ], Area120tablesTablesRowsBatchDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchDeleteSecurityOption4)
    ], Area120tablesTablesRowsBatchDeleteSecurity.prototype, "option4", void 0);
    return Area120tablesTablesRowsBatchDeleteSecurity;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteSecurity };
var Area120tablesTablesRowsBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteRequest, _super);
    function Area120tablesTablesRowsBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsBatchDeletePathParams)
    ], Area120tablesTablesRowsBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsBatchDeleteQueryParams)
    ], Area120tablesTablesRowsBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchDeleteRowsRequest)
    ], Area120tablesTablesRowsBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsBatchDeleteSecurity)
    ], Area120tablesTablesRowsBatchDeleteRequest.prototype, "security", void 0);
    return Area120tablesTablesRowsBatchDeleteRequest;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteRequest };
var Area120tablesTablesRowsBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchDeleteResponse, _super);
    function Area120tablesTablesRowsBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], Area120tablesTablesRowsBatchDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsBatchDeleteResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesRowsBatchDeleteResponse;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchDeleteResponse };
