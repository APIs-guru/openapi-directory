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
var Area120tablesWorkspacesGetPathParams = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetPathParams, _super);
    function Area120tablesWorkspacesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetPathParams.prototype, "name", void 0);
    return Area120tablesWorkspacesGetPathParams;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetPathParams };
export var Area120tablesWorkspacesGetViewEnum;
(function (Area120tablesWorkspacesGetViewEnum) {
    Area120tablesWorkspacesGetViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    Area120tablesWorkspacesGetViewEnum["ColumnIdView"] = "COLUMN_ID_VIEW";
})(Area120tablesWorkspacesGetViewEnum || (Area120tablesWorkspacesGetViewEnum = {}));
var Area120tablesWorkspacesGetQueryParams = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetQueryParams, _super);
    function Area120tablesWorkspacesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetQueryParams.prototype, "view", void 0);
    return Area120tablesWorkspacesGetQueryParams;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetQueryParams };
var Area120tablesWorkspacesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetSecurityOption1, _super);
    function Area120tablesWorkspacesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesGetSecurityOption1.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesGetSecurityOption1;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetSecurityOption1 };
var Area120tablesWorkspacesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetSecurityOption2, _super);
    function Area120tablesWorkspacesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesGetSecurityOption2.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesGetSecurityOption2;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetSecurityOption2 };
var Area120tablesWorkspacesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetSecurityOption3, _super);
    function Area120tablesWorkspacesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesGetSecurityOption3.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesGetSecurityOption3;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetSecurityOption3 };
var Area120tablesWorkspacesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetSecurityOption4, _super);
    function Area120tablesWorkspacesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesGetSecurityOption4.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesGetSecurityOption4;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetSecurityOption4 };
var Area120tablesWorkspacesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetSecurityOption5, _super);
    function Area120tablesWorkspacesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesGetSecurityOption5.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesGetSecurityOption5;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetSecurityOption5 };
var Area120tablesWorkspacesGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetSecurityOption6, _super);
    function Area120tablesWorkspacesGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Area120tablesWorkspacesGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Area120tablesWorkspacesGetSecurityOption6.prototype, "oauth2c", void 0);
    return Area120tablesWorkspacesGetSecurityOption6;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetSecurityOption6 };
var Area120tablesWorkspacesGetSecurity = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetSecurity, _super);
    function Area120tablesWorkspacesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesGetSecurityOption1)
    ], Area120tablesWorkspacesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesGetSecurityOption2)
    ], Area120tablesWorkspacesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesGetSecurityOption3)
    ], Area120tablesWorkspacesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesGetSecurityOption4)
    ], Area120tablesWorkspacesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesGetSecurityOption5)
    ], Area120tablesWorkspacesGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Area120tablesWorkspacesGetSecurityOption6)
    ], Area120tablesWorkspacesGetSecurity.prototype, "option6", void 0);
    return Area120tablesWorkspacesGetSecurity;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetSecurity };
var Area120tablesWorkspacesGetRequest = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetRequest, _super);
    function Area120tablesWorkspacesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesWorkspacesGetPathParams)
    ], Area120tablesWorkspacesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesWorkspacesGetQueryParams)
    ], Area120tablesWorkspacesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Area120tablesWorkspacesGetSecurity)
    ], Area120tablesWorkspacesGetRequest.prototype, "security", void 0);
    return Area120tablesWorkspacesGetRequest;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetRequest };
var Area120tablesWorkspacesGetResponse = /** @class */ (function (_super) {
    __extends(Area120tablesWorkspacesGetResponse, _super);
    function Area120tablesWorkspacesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Area120tablesWorkspacesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Area120tablesWorkspacesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Workspace)
    ], Area120tablesWorkspacesGetResponse.prototype, "workspace", void 0);
    return Area120tablesWorkspacesGetResponse;
}(SpeakeasyBase));
export { Area120tablesWorkspacesGetResponse };
