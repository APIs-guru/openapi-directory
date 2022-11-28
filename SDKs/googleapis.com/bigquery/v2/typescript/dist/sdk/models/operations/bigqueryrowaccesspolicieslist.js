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
var BigqueryRowAccessPoliciesListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListPathParams, _super);
    function BigqueryRowAccessPoliciesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListPathParams.prototype, "tableId", void 0);
    return BigqueryRowAccessPoliciesListPathParams;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListPathParams };
var BigqueryRowAccessPoliciesListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListQueryParams, _super);
    function BigqueryRowAccessPoliciesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListQueryParams.prototype, "userIp", void 0);
    return BigqueryRowAccessPoliciesListQueryParams;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListQueryParams };
var BigqueryRowAccessPoliciesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListSecurityOption1, _super);
    function BigqueryRowAccessPoliciesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRowAccessPoliciesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRowAccessPoliciesListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryRowAccessPoliciesListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListSecurityOption1 };
var BigqueryRowAccessPoliciesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListSecurityOption2, _super);
    function BigqueryRowAccessPoliciesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRowAccessPoliciesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRowAccessPoliciesListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryRowAccessPoliciesListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListSecurityOption2 };
var BigqueryRowAccessPoliciesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListSecurityOption3, _super);
    function BigqueryRowAccessPoliciesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRowAccessPoliciesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRowAccessPoliciesListSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryRowAccessPoliciesListSecurityOption3;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListSecurityOption3 };
var BigqueryRowAccessPoliciesListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListSecurity, _super);
    function BigqueryRowAccessPoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRowAccessPoliciesListSecurityOption1)
    ], BigqueryRowAccessPoliciesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRowAccessPoliciesListSecurityOption2)
    ], BigqueryRowAccessPoliciesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRowAccessPoliciesListSecurityOption3)
    ], BigqueryRowAccessPoliciesListSecurity.prototype, "option3", void 0);
    return BigqueryRowAccessPoliciesListSecurity;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListSecurity };
var BigqueryRowAccessPoliciesListRequest = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListRequest, _super);
    function BigqueryRowAccessPoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRowAccessPoliciesListPathParams)
    ], BigqueryRowAccessPoliciesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRowAccessPoliciesListQueryParams)
    ], BigqueryRowAccessPoliciesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRowAccessPoliciesListSecurity)
    ], BigqueryRowAccessPoliciesListRequest.prototype, "security", void 0);
    return BigqueryRowAccessPoliciesListRequest;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListRequest };
var BigqueryRowAccessPoliciesListResponse = /** @class */ (function (_super) {
    __extends(BigqueryRowAccessPoliciesListResponse, _super);
    function BigqueryRowAccessPoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryRowAccessPoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRowAccessPoliciesResponse)
    ], BigqueryRowAccessPoliciesListResponse.prototype, "listRowAccessPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryRowAccessPoliciesListResponse.prototype, "statusCode", void 0);
    return BigqueryRowAccessPoliciesListResponse;
}(SpeakeasyBase));
export { BigqueryRowAccessPoliciesListResponse };
