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
var Area120tablesTablesRowsPatchPathParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchPathParams, _super);
    function Area120tablesTablesRowsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchPathParams.prototype, "name", void 0);
    return Area120tablesTablesRowsPatchPathParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchPathParams };
export var Area120tablesTablesRowsPatchViewEnum;
(function (Area120tablesTablesRowsPatchViewEnum) {
    Area120tablesTablesRowsPatchViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    Area120tablesTablesRowsPatchViewEnum["ColumnIdView"] = "COLUMN_ID_VIEW";
})(Area120tablesTablesRowsPatchViewEnum || (Area120tablesTablesRowsPatchViewEnum = {}));
var Area120tablesTablesRowsPatchQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchQueryParams, _super);
    function Area120tablesTablesRowsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchQueryParams.prototype, "view", void 0);
    return Area120tablesTablesRowsPatchQueryParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchQueryParams };
var Area120tablesTablesRowsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchSecurityOption1, _super);
    function Area120tablesTablesRowsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsPatchSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchSecurityOption1 };
var Area120tablesTablesRowsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchSecurityOption2, _super);
    function Area120tablesTablesRowsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsPatchSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchSecurityOption2 };
var Area120tablesTablesRowsPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchSecurityOption3, _super);
    function Area120tablesTablesRowsPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsPatchSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsPatchSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchSecurityOption3 };
var Area120tablesTablesRowsPatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchSecurityOption4, _super);
    function Area120tablesTablesRowsPatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsPatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsPatchSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsPatchSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchSecurityOption4 };
var Area120tablesTablesRowsPatchSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchSecurity, _super);
    function Area120tablesTablesRowsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsPatchSecurityOption1)
    ], Area120tablesTablesRowsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsPatchSecurityOption2)
    ], Area120tablesTablesRowsPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsPatchSecurityOption3)
    ], Area120tablesTablesRowsPatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsPatchSecurityOption4)
    ], Area120tablesTablesRowsPatchSecurity.prototype, "option4", void 0);
    return Area120tablesTablesRowsPatchSecurity;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchSecurity };
var Area120tablesTablesRowsPatchRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchRequest, _super);
    function Area120tablesTablesRowsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsPatchPathParams)
    ], Area120tablesTablesRowsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsPatchQueryParams)
    ], Area120tablesTablesRowsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Row)
    ], Area120tablesTablesRowsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsPatchSecurity)
    ], Area120tablesTablesRowsPatchRequest.prototype, "security", void 0);
    return Area120tablesTablesRowsPatchRequest;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchRequest };
var Area120tablesTablesRowsPatchResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsPatchResponse, _super);
    function Area120tablesTablesRowsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Row)
    ], Area120tablesTablesRowsPatchResponse.prototype, "row", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsPatchResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesRowsPatchResponse;
}(SpeakeasyBase));
export { Area120tablesTablesRowsPatchResponse };
