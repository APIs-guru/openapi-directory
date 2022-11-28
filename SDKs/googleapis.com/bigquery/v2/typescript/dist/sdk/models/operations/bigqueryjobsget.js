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
var BigqueryJobsGetPathParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetPathParams, _super);
    function BigqueryJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetPathParams.prototype, "projectId", void 0);
    return BigqueryJobsGetPathParams;
}(SpeakeasyBase));
export { BigqueryJobsGetPathParams };
var BigqueryJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetQueryParams, _super);
    function BigqueryJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryJobsGetQueryParams.prototype, "userIp", void 0);
    return BigqueryJobsGetQueryParams;
}(SpeakeasyBase));
export { BigqueryJobsGetQueryParams };
var BigqueryJobsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetSecurityOption1, _super);
    function BigqueryJobsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryJobsGetSecurityOption1;
}(SpeakeasyBase));
export { BigqueryJobsGetSecurityOption1 };
var BigqueryJobsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetSecurityOption2, _super);
    function BigqueryJobsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryJobsGetSecurityOption2;
}(SpeakeasyBase));
export { BigqueryJobsGetSecurityOption2 };
var BigqueryJobsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetSecurityOption3, _super);
    function BigqueryJobsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsGetSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryJobsGetSecurityOption3;
}(SpeakeasyBase));
export { BigqueryJobsGetSecurityOption3 };
var BigqueryJobsGetSecurity = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetSecurity, _super);
    function BigqueryJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsGetSecurityOption1)
    ], BigqueryJobsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsGetSecurityOption2)
    ], BigqueryJobsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsGetSecurityOption3)
    ], BigqueryJobsGetSecurity.prototype, "option3", void 0);
    return BigqueryJobsGetSecurity;
}(SpeakeasyBase));
export { BigqueryJobsGetSecurity };
var BigqueryJobsGetRequest = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetRequest, _super);
    function BigqueryJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsGetPathParams)
    ], BigqueryJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsGetQueryParams)
    ], BigqueryJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsGetSecurity)
    ], BigqueryJobsGetRequest.prototype, "security", void 0);
    return BigqueryJobsGetRequest;
}(SpeakeasyBase));
export { BigqueryJobsGetRequest };
var BigqueryJobsGetResponse = /** @class */ (function (_super) {
    __extends(BigqueryJobsGetResponse, _super);
    function BigqueryJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], BigqueryJobsGetResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryJobsGetResponse.prototype, "statusCode", void 0);
    return BigqueryJobsGetResponse;
}(SpeakeasyBase));
export { BigqueryJobsGetResponse };
