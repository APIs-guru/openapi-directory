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
var BigtableadminOperationsProjectsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListPathParams, _super);
    function BigtableadminOperationsProjectsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListPathParams.prototype, "name", void 0);
    return BigtableadminOperationsProjectsOperationsListPathParams;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListPathParams };
var BigtableadminOperationsProjectsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListQueryParams, _super);
    function BigtableadminOperationsProjectsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminOperationsProjectsOperationsListQueryParams;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListQueryParams };
var BigtableadminOperationsProjectsOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurityOption1, _super);
    function BigtableadminOperationsProjectsOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurityOption1 };
var BigtableadminOperationsProjectsOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurityOption2, _super);
    function BigtableadminOperationsProjectsOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurityOption2 };
var BigtableadminOperationsProjectsOperationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurityOption3, _super);
    function BigtableadminOperationsProjectsOperationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurityOption3 };
var BigtableadminOperationsProjectsOperationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurityOption4, _super);
    function BigtableadminOperationsProjectsOperationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurityOption4 };
var BigtableadminOperationsProjectsOperationsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurityOption5, _super);
    function BigtableadminOperationsProjectsOperationsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurityOption5 };
var BigtableadminOperationsProjectsOperationsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurityOption6, _super);
    function BigtableadminOperationsProjectsOperationsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurityOption6 };
var BigtableadminOperationsProjectsOperationsListSecurityOption7 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurityOption7, _super);
    function BigtableadminOperationsProjectsOperationsListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsProjectsOperationsListSecurityOption7.prototype, "oauth2c", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurityOption7;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurityOption7 };
var BigtableadminOperationsProjectsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListSecurity, _super);
    function BigtableadminOperationsProjectsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurityOption1)
    ], BigtableadminOperationsProjectsOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurityOption2)
    ], BigtableadminOperationsProjectsOperationsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurityOption3)
    ], BigtableadminOperationsProjectsOperationsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurityOption4)
    ], BigtableadminOperationsProjectsOperationsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurityOption5)
    ], BigtableadminOperationsProjectsOperationsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurityOption6)
    ], BigtableadminOperationsProjectsOperationsListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurityOption7)
    ], BigtableadminOperationsProjectsOperationsListSecurity.prototype, "option7", void 0);
    return BigtableadminOperationsProjectsOperationsListSecurity;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListSecurity };
var BigtableadminOperationsProjectsOperationsListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListRequest, _super);
    function BigtableadminOperationsProjectsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListPathParams)
    ], BigtableadminOperationsProjectsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListQueryParams)
    ], BigtableadminOperationsProjectsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminOperationsProjectsOperationsListSecurity)
    ], BigtableadminOperationsProjectsOperationsListRequest.prototype, "security", void 0);
    return BigtableadminOperationsProjectsOperationsListRequest;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListRequest };
var BigtableadminOperationsProjectsOperationsListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsProjectsOperationsListResponse, _super);
    function BigtableadminOperationsProjectsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminOperationsProjectsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], BigtableadminOperationsProjectsOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminOperationsProjectsOperationsListResponse.prototype, "statusCode", void 0);
    return BigtableadminOperationsProjectsOperationsListResponse;
}(SpeakeasyBase));
export { BigtableadminOperationsProjectsOperationsListResponse };
