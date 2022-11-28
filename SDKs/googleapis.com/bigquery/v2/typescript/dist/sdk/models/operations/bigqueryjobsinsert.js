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
var BigqueryJobsInsertPathParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertPathParams, _super);
    function BigqueryJobsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryJobsInsertPathParams.prototype, "projectId", void 0);
    return BigqueryJobsInsertPathParams;
}(SpeakeasyBase));
export { BigqueryJobsInsertPathParams };
var BigqueryJobsInsertQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertQueryParams, _super);
    function BigqueryJobsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryJobsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryJobsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryJobsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryJobsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryJobsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryJobsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryJobsInsertQueryParams.prototype, "userIp", void 0);
    return BigqueryJobsInsertQueryParams;
}(SpeakeasyBase));
export { BigqueryJobsInsertQueryParams };
var BigqueryJobsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertSecurityOption1, _super);
    function BigqueryJobsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryJobsInsertSecurityOption1;
}(SpeakeasyBase));
export { BigqueryJobsInsertSecurityOption1 };
var BigqueryJobsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertSecurityOption2, _super);
    function BigqueryJobsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryJobsInsertSecurityOption2;
}(SpeakeasyBase));
export { BigqueryJobsInsertSecurityOption2 };
var BigqueryJobsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertSecurityOption3, _super);
    function BigqueryJobsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryJobsInsertSecurityOption3;
}(SpeakeasyBase));
export { BigqueryJobsInsertSecurityOption3 };
var BigqueryJobsInsertSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertSecurityOption4, _super);
    function BigqueryJobsInsertSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsInsertSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsInsertSecurityOption4.prototype, "oauth2c", void 0);
    return BigqueryJobsInsertSecurityOption4;
}(SpeakeasyBase));
export { BigqueryJobsInsertSecurityOption4 };
var BigqueryJobsInsertSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertSecurityOption5, _super);
    function BigqueryJobsInsertSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsInsertSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsInsertSecurityOption5.prototype, "oauth2c", void 0);
    return BigqueryJobsInsertSecurityOption5;
}(SpeakeasyBase));
export { BigqueryJobsInsertSecurityOption5 };
var BigqueryJobsInsertSecurity = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertSecurity, _super);
    function BigqueryJobsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsInsertSecurityOption1)
    ], BigqueryJobsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsInsertSecurityOption2)
    ], BigqueryJobsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsInsertSecurityOption3)
    ], BigqueryJobsInsertSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsInsertSecurityOption4)
    ], BigqueryJobsInsertSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsInsertSecurityOption5)
    ], BigqueryJobsInsertSecurity.prototype, "option5", void 0);
    return BigqueryJobsInsertSecurity;
}(SpeakeasyBase));
export { BigqueryJobsInsertSecurity };
var BigqueryJobsInsertRequest = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertRequest, _super);
    function BigqueryJobsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsInsertPathParams)
    ], BigqueryJobsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsInsertQueryParams)
    ], BigqueryJobsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], BigqueryJobsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsInsertSecurity)
    ], BigqueryJobsInsertRequest.prototype, "security", void 0);
    return BigqueryJobsInsertRequest;
}(SpeakeasyBase));
export { BigqueryJobsInsertRequest };
var BigqueryJobsInsertResponse = /** @class */ (function (_super) {
    __extends(BigqueryJobsInsertResponse, _super);
    function BigqueryJobsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryJobsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], BigqueryJobsInsertResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryJobsInsertResponse.prototype, "statusCode", void 0);
    return BigqueryJobsInsertResponse;
}(SpeakeasyBase));
export { BigqueryJobsInsertResponse };
