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
var BigqueryModelsPatchPathParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsPatchPathParams, _super);
    function BigqueryModelsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchPathParams.prototype, "modelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchPathParams.prototype, "projectId", void 0);
    return BigqueryModelsPatchPathParams;
}(SpeakeasyBase));
export { BigqueryModelsPatchPathParams };
var BigqueryModelsPatchQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsPatchQueryParams, _super);
    function BigqueryModelsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryModelsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryModelsPatchQueryParams.prototype, "userIp", void 0);
    return BigqueryModelsPatchQueryParams;
}(SpeakeasyBase));
export { BigqueryModelsPatchQueryParams };
var BigqueryModelsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryModelsPatchSecurityOption1, _super);
    function BigqueryModelsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryModelsPatchSecurityOption1;
}(SpeakeasyBase));
export { BigqueryModelsPatchSecurityOption1 };
var BigqueryModelsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryModelsPatchSecurityOption2, _super);
    function BigqueryModelsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryModelsPatchSecurityOption2;
}(SpeakeasyBase));
export { BigqueryModelsPatchSecurityOption2 };
var BigqueryModelsPatchSecurity = /** @class */ (function (_super) {
    __extends(BigqueryModelsPatchSecurity, _super);
    function BigqueryModelsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsPatchSecurityOption1)
    ], BigqueryModelsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsPatchSecurityOption2)
    ], BigqueryModelsPatchSecurity.prototype, "option2", void 0);
    return BigqueryModelsPatchSecurity;
}(SpeakeasyBase));
export { BigqueryModelsPatchSecurity };
var BigqueryModelsPatchRequest = /** @class */ (function (_super) {
    __extends(BigqueryModelsPatchRequest, _super);
    function BigqueryModelsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsPatchPathParams)
    ], BigqueryModelsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsPatchQueryParams)
    ], BigqueryModelsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModelInput)
    ], BigqueryModelsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsPatchSecurity)
    ], BigqueryModelsPatchRequest.prototype, "security", void 0);
    return BigqueryModelsPatchRequest;
}(SpeakeasyBase));
export { BigqueryModelsPatchRequest };
var BigqueryModelsPatchResponse = /** @class */ (function (_super) {
    __extends(BigqueryModelsPatchResponse, _super);
    function BigqueryModelsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryModelsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Model)
    ], BigqueryModelsPatchResponse.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryModelsPatchResponse.prototype, "statusCode", void 0);
    return BigqueryModelsPatchResponse;
}(SpeakeasyBase));
export { BigqueryModelsPatchResponse };
