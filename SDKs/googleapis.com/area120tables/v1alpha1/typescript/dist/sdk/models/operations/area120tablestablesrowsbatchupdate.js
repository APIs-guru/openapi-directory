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
var Area120tablesTablesRowsBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdatePathParams, _super);
    function Area120tablesTablesRowsBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdatePathParams.prototype, "parent", void 0);
    return Area120tablesTablesRowsBatchUpdatePathParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdatePathParams };
var Area120tablesTablesRowsBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateQueryParams, _super);
    function Area120tablesTablesRowsBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return Area120tablesTablesRowsBatchUpdateQueryParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateQueryParams };
var Area120tablesTablesRowsBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateSecurityOption1, _super);
    function Area120tablesTablesRowsBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateSecurityOption1 };
var Area120tablesTablesRowsBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateSecurityOption2, _super);
    function Area120tablesTablesRowsBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateSecurityOption2 };
var Area120tablesTablesRowsBatchUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateSecurityOption3, _super);
    function Area120tablesTablesRowsBatchUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchUpdateSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateSecurityOption3 };
var Area120tablesTablesRowsBatchUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateSecurityOption4, _super);
    function Area120tablesTablesRowsBatchUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsBatchUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsBatchUpdateSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateSecurityOption4 };
var Area120tablesTablesRowsBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateSecurity, _super);
    function Area120tablesTablesRowsBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchUpdateSecurityOption1)
    ], Area120tablesTablesRowsBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchUpdateSecurityOption2)
    ], Area120tablesTablesRowsBatchUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchUpdateSecurityOption3)
    ], Area120tablesTablesRowsBatchUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsBatchUpdateSecurityOption4)
    ], Area120tablesTablesRowsBatchUpdateSecurity.prototype, "option4", void 0);
    return Area120tablesTablesRowsBatchUpdateSecurity;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateSecurity };
var Area120tablesTablesRowsBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateRequest, _super);
    function Area120tablesTablesRowsBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesRowsBatchUpdatePathParams)
    ], Area120tablesTablesRowsBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesRowsBatchUpdateQueryParams)
    ], Area120tablesTablesRowsBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateRowsRequest)
    ], Area120tablesTablesRowsBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Area120tablesTablesRowsBatchUpdateSecurity)
    ], Area120tablesTablesRowsBatchUpdateRequest.prototype, "security", void 0);
    return Area120tablesTablesRowsBatchUpdateRequest;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateRequest };
var Area120tablesTablesRowsBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsBatchUpdateResponse, _super);
    function Area120tablesTablesRowsBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchUpdateRowsResponse)
    ], Area120tablesTablesRowsBatchUpdateResponse.prototype, "batchUpdateRowsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsBatchUpdateResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesRowsBatchUpdateResponse;
}(SpeakeasyBase));
export { Area120tablesTablesRowsBatchUpdateResponse };
