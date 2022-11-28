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
var BigqueryJobsCancelPathParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsCancelPathParams, _super);
    function BigqueryJobsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelPathParams.prototype, "projectId", void 0);
    return BigqueryJobsCancelPathParams;
}(SpeakeasyBase));
export { BigqueryJobsCancelPathParams };
var BigqueryJobsCancelQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsCancelQueryParams, _super);
    function BigqueryJobsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryJobsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryJobsCancelQueryParams.prototype, "userIp", void 0);
    return BigqueryJobsCancelQueryParams;
}(SpeakeasyBase));
export { BigqueryJobsCancelQueryParams };
var BigqueryJobsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryJobsCancelSecurityOption1, _super);
    function BigqueryJobsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryJobsCancelSecurityOption1;
}(SpeakeasyBase));
export { BigqueryJobsCancelSecurityOption1 };
var BigqueryJobsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryJobsCancelSecurityOption2, _super);
    function BigqueryJobsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryJobsCancelSecurityOption2;
}(SpeakeasyBase));
export { BigqueryJobsCancelSecurityOption2 };
var BigqueryJobsCancelSecurity = /** @class */ (function (_super) {
    __extends(BigqueryJobsCancelSecurity, _super);
    function BigqueryJobsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsCancelSecurityOption1)
    ], BigqueryJobsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsCancelSecurityOption2)
    ], BigqueryJobsCancelSecurity.prototype, "option2", void 0);
    return BigqueryJobsCancelSecurity;
}(SpeakeasyBase));
export { BigqueryJobsCancelSecurity };
var BigqueryJobsCancelRequest = /** @class */ (function (_super) {
    __extends(BigqueryJobsCancelRequest, _super);
    function BigqueryJobsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsCancelPathParams)
    ], BigqueryJobsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsCancelQueryParams)
    ], BigqueryJobsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsCancelSecurity)
    ], BigqueryJobsCancelRequest.prototype, "security", void 0);
    return BigqueryJobsCancelRequest;
}(SpeakeasyBase));
export { BigqueryJobsCancelRequest };
var BigqueryJobsCancelResponse = /** @class */ (function (_super) {
    __extends(BigqueryJobsCancelResponse, _super);
    function BigqueryJobsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryJobsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JobCancelResponse)
    ], BigqueryJobsCancelResponse.prototype, "jobCancelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryJobsCancelResponse.prototype, "statusCode", void 0);
    return BigqueryJobsCancelResponse;
}(SpeakeasyBase));
export { BigqueryJobsCancelResponse };
