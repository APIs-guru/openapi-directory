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
var BigqueryJobsQueryPathParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsQueryPathParams, _super);
    function BigqueryJobsQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryJobsQueryPathParams.prototype, "projectId", void 0);
    return BigqueryJobsQueryPathParams;
}(SpeakeasyBase));
export { BigqueryJobsQueryPathParams };
var BigqueryJobsQueryQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsQueryQueryParams, _super);
    function BigqueryJobsQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryJobsQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryJobsQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryJobsQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryJobsQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryJobsQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryJobsQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryJobsQueryQueryParams.prototype, "userIp", void 0);
    return BigqueryJobsQueryQueryParams;
}(SpeakeasyBase));
export { BigqueryJobsQueryQueryParams };
var BigqueryJobsQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryJobsQuerySecurityOption1, _super);
    function BigqueryJobsQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsQuerySecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryJobsQuerySecurityOption1;
}(SpeakeasyBase));
export { BigqueryJobsQuerySecurityOption1 };
var BigqueryJobsQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryJobsQuerySecurityOption2, _super);
    function BigqueryJobsQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsQuerySecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryJobsQuerySecurityOption2;
}(SpeakeasyBase));
export { BigqueryJobsQuerySecurityOption2 };
var BigqueryJobsQuerySecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryJobsQuerySecurityOption3, _super);
    function BigqueryJobsQuerySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsQuerySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsQuerySecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryJobsQuerySecurityOption3;
}(SpeakeasyBase));
export { BigqueryJobsQuerySecurityOption3 };
var BigqueryJobsQuerySecurity = /** @class */ (function (_super) {
    __extends(BigqueryJobsQuerySecurity, _super);
    function BigqueryJobsQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsQuerySecurityOption1)
    ], BigqueryJobsQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsQuerySecurityOption2)
    ], BigqueryJobsQuerySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsQuerySecurityOption3)
    ], BigqueryJobsQuerySecurity.prototype, "option3", void 0);
    return BigqueryJobsQuerySecurity;
}(SpeakeasyBase));
export { BigqueryJobsQuerySecurity };
var BigqueryJobsQueryRequest = /** @class */ (function (_super) {
    __extends(BigqueryJobsQueryRequest, _super);
    function BigqueryJobsQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsQueryPathParams)
    ], BigqueryJobsQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsQueryQueryParams)
    ], BigqueryJobsQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QueryRequest)
    ], BigqueryJobsQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsQuerySecurity)
    ], BigqueryJobsQueryRequest.prototype, "security", void 0);
    return BigqueryJobsQueryRequest;
}(SpeakeasyBase));
export { BigqueryJobsQueryRequest };
var BigqueryJobsQueryResponse = /** @class */ (function (_super) {
    __extends(BigqueryJobsQueryResponse, _super);
    function BigqueryJobsQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryJobsQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QueryResponse)
    ], BigqueryJobsQueryResponse.prototype, "queryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryJobsQueryResponse.prototype, "statusCode", void 0);
    return BigqueryJobsQueryResponse;
}(SpeakeasyBase));
export { BigqueryJobsQueryResponse };
