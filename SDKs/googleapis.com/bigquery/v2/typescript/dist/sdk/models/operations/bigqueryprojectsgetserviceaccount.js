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
var BigqueryProjectsGetServiceAccountPathParams = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountPathParams, _super);
    function BigqueryProjectsGetServiceAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountPathParams.prototype, "projectId", void 0);
    return BigqueryProjectsGetServiceAccountPathParams;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountPathParams };
var BigqueryProjectsGetServiceAccountQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountQueryParams, _super);
    function BigqueryProjectsGetServiceAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryProjectsGetServiceAccountQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountQueryParams.prototype, "userIp", void 0);
    return BigqueryProjectsGetServiceAccountQueryParams;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountQueryParams };
var BigqueryProjectsGetServiceAccountSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountSecurityOption1, _super);
    function BigqueryProjectsGetServiceAccountSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryProjectsGetServiceAccountSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryProjectsGetServiceAccountSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryProjectsGetServiceAccountSecurityOption1;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountSecurityOption1 };
var BigqueryProjectsGetServiceAccountSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountSecurityOption2, _super);
    function BigqueryProjectsGetServiceAccountSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryProjectsGetServiceAccountSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryProjectsGetServiceAccountSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryProjectsGetServiceAccountSecurityOption2;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountSecurityOption2 };
var BigqueryProjectsGetServiceAccountSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountSecurityOption3, _super);
    function BigqueryProjectsGetServiceAccountSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryProjectsGetServiceAccountSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryProjectsGetServiceAccountSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryProjectsGetServiceAccountSecurityOption3;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountSecurityOption3 };
var BigqueryProjectsGetServiceAccountSecurity = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountSecurity, _super);
    function BigqueryProjectsGetServiceAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryProjectsGetServiceAccountSecurityOption1)
    ], BigqueryProjectsGetServiceAccountSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryProjectsGetServiceAccountSecurityOption2)
    ], BigqueryProjectsGetServiceAccountSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryProjectsGetServiceAccountSecurityOption3)
    ], BigqueryProjectsGetServiceAccountSecurity.prototype, "option3", void 0);
    return BigqueryProjectsGetServiceAccountSecurity;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountSecurity };
var BigqueryProjectsGetServiceAccountRequest = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountRequest, _super);
    function BigqueryProjectsGetServiceAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryProjectsGetServiceAccountPathParams)
    ], BigqueryProjectsGetServiceAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryProjectsGetServiceAccountQueryParams)
    ], BigqueryProjectsGetServiceAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryProjectsGetServiceAccountSecurity)
    ], BigqueryProjectsGetServiceAccountRequest.prototype, "security", void 0);
    return BigqueryProjectsGetServiceAccountRequest;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountRequest };
var BigqueryProjectsGetServiceAccountResponse = /** @class */ (function (_super) {
    __extends(BigqueryProjectsGetServiceAccountResponse, _super);
    function BigqueryProjectsGetServiceAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryProjectsGetServiceAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetServiceAccountResponse)
    ], BigqueryProjectsGetServiceAccountResponse.prototype, "getServiceAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryProjectsGetServiceAccountResponse.prototype, "statusCode", void 0);
    return BigqueryProjectsGetServiceAccountResponse;
}(SpeakeasyBase));
export { BigqueryProjectsGetServiceAccountResponse };
