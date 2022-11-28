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
var Area120tablesTablesRowsListPathParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListPathParams, _super);
    function Area120tablesTablesRowsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListPathParams.prototype, "parent", void 0);
    return Area120tablesTablesRowsListPathParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListPathParams };
export var Area120tablesTablesRowsListViewEnum;
(function (Area120tablesTablesRowsListViewEnum) {
    Area120tablesTablesRowsListViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    Area120tablesTablesRowsListViewEnum["ColumnIdView"] = "COLUMN_ID_VIEW";
})(Area120tablesTablesRowsListViewEnum || (Area120tablesTablesRowsListViewEnum = {}));
var Area120tablesTablesRowsListQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListQueryParams, _super);
    function Area120tablesTablesRowsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesTablesRowsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListQueryParams.prototype, "view", void 0);
    return Area120tablesTablesRowsListQueryParams;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListQueryParams };
var Area120tablesTablesRowsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListSecurityOption1, _super);
    function Area120tablesTablesRowsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsListSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsListSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListSecurityOption1 };
var Area120tablesTablesRowsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListSecurityOption2, _super);
    function Area120tablesTablesRowsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsListSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsListSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListSecurityOption2 };
var Area120tablesTablesRowsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListSecurityOption3, _super);
    function Area120tablesTablesRowsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsListSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsListSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListSecurityOption3 };
var Area120tablesTablesRowsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListSecurityOption4, _super);
    function Area120tablesTablesRowsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsListSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsListSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListSecurityOption4 };
var Area120tablesTablesRowsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListSecurityOption5, _super);
    function Area120tablesTablesRowsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsListSecurityOption5.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsListSecurityOption5;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListSecurityOption5 };
var Area120tablesTablesRowsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListSecurityOption6, _super);
    function Area120tablesTablesRowsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesTablesRowsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesTablesRowsListSecurityOption6.prototype, "oauth2c", void 0);
    return Area120tablesTablesRowsListSecurityOption6;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListSecurityOption6 };
var Area120tablesTablesRowsListSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListSecurity, _super);
    function Area120tablesTablesRowsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsListSecurityOption1)
    ], Area120tablesTablesRowsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsListSecurityOption2)
    ], Area120tablesTablesRowsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsListSecurityOption3)
    ], Area120tablesTablesRowsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsListSecurityOption4)
    ], Area120tablesTablesRowsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsListSecurityOption5)
    ], Area120tablesTablesRowsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesTablesRowsListSecurityOption6)
    ], Area120tablesTablesRowsListSecurity.prototype, "option6", void 0);
    return Area120tablesTablesRowsListSecurity;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListSecurity };
var Area120tablesTablesRowsListRequest = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListRequest, _super);
    function Area120tablesTablesRowsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsListPathParams)
    ], Area120tablesTablesRowsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsListQueryParams)
    ], Area120tablesTablesRowsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesTablesRowsListSecurity)
    ], Area120tablesTablesRowsListRequest.prototype, "security", void 0);
    return Area120tablesTablesRowsListRequest;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListRequest };
var Area120tablesTablesRowsListResponse = /** @class */ (function (_super) {
    __extends(Area120tablesTablesRowsListResponse, _super);
    function Area120tablesTablesRowsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Area120tablesTablesRowsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRowsResponse)
    ], Area120tablesTablesRowsListResponse.prototype, "listRowsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Area120tablesTablesRowsListResponse.prototype, "statusCode", void 0);
    return Area120tablesTablesRowsListResponse;
}(SpeakeasyBase));
export { Area120tablesTablesRowsListResponse };
