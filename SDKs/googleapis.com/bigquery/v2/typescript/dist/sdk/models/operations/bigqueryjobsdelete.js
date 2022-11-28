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
var BigqueryJobsDeletePathParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsDeletePathParams, _super);
    function BigqueryJobsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeletePathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeletePathParams.prototype, "projectId", void 0);
    return BigqueryJobsDeletePathParams;
}(SpeakeasyBase));
export { BigqueryJobsDeletePathParams };
var BigqueryJobsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsDeleteQueryParams, _super);
    function BigqueryJobsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryJobsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteQueryParams.prototype, "userIp", void 0);
    return BigqueryJobsDeleteQueryParams;
}(SpeakeasyBase));
export { BigqueryJobsDeleteQueryParams };
var BigqueryJobsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryJobsDeleteSecurityOption1, _super);
    function BigqueryJobsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryJobsDeleteSecurityOption1;
}(SpeakeasyBase));
export { BigqueryJobsDeleteSecurityOption1 };
var BigqueryJobsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryJobsDeleteSecurityOption2, _super);
    function BigqueryJobsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryJobsDeleteSecurityOption2;
}(SpeakeasyBase));
export { BigqueryJobsDeleteSecurityOption2 };
var BigqueryJobsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BigqueryJobsDeleteSecurity, _super);
    function BigqueryJobsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsDeleteSecurityOption1)
    ], BigqueryJobsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsDeleteSecurityOption2)
    ], BigqueryJobsDeleteSecurity.prototype, "option2", void 0);
    return BigqueryJobsDeleteSecurity;
}(SpeakeasyBase));
export { BigqueryJobsDeleteSecurity };
var BigqueryJobsDeleteRequest = /** @class */ (function (_super) {
    __extends(BigqueryJobsDeleteRequest, _super);
    function BigqueryJobsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsDeletePathParams)
    ], BigqueryJobsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsDeleteQueryParams)
    ], BigqueryJobsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsDeleteSecurity)
    ], BigqueryJobsDeleteRequest.prototype, "security", void 0);
    return BigqueryJobsDeleteRequest;
}(SpeakeasyBase));
export { BigqueryJobsDeleteRequest };
var BigqueryJobsDeleteResponse = /** @class */ (function (_super) {
    __extends(BigqueryJobsDeleteResponse, _super);
    function BigqueryJobsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryJobsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryJobsDeleteResponse.prototype, "statusCode", void 0);
    return BigqueryJobsDeleteResponse;
}(SpeakeasyBase));
export { BigqueryJobsDeleteResponse };
