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
var BigqueryDatasetsPatchPathParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsPatchPathParams, _super);
    function BigqueryDatasetsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchPathParams.prototype, "projectId", void 0);
    return BigqueryDatasetsPatchPathParams;
}(SpeakeasyBase));
export { BigqueryDatasetsPatchPathParams };
var BigqueryDatasetsPatchQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsPatchQueryParams, _super);
    function BigqueryDatasetsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchQueryParams.prototype, "userIp", void 0);
    return BigqueryDatasetsPatchQueryParams;
}(SpeakeasyBase));
export { BigqueryDatasetsPatchQueryParams };
var BigqueryDatasetsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsPatchSecurityOption1, _super);
    function BigqueryDatasetsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryDatasetsPatchSecurityOption1;
}(SpeakeasyBase));
export { BigqueryDatasetsPatchSecurityOption1 };
var BigqueryDatasetsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsPatchSecurityOption2, _super);
    function BigqueryDatasetsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryDatasetsPatchSecurityOption2;
}(SpeakeasyBase));
export { BigqueryDatasetsPatchSecurityOption2 };
var BigqueryDatasetsPatchSecurity = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsPatchSecurity, _super);
    function BigqueryDatasetsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsPatchSecurityOption1)
    ], BigqueryDatasetsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsPatchSecurityOption2)
    ], BigqueryDatasetsPatchSecurity.prototype, "option2", void 0);
    return BigqueryDatasetsPatchSecurity;
}(SpeakeasyBase));
export { BigqueryDatasetsPatchSecurity };
var BigqueryDatasetsPatchRequest = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsPatchRequest, _super);
    function BigqueryDatasetsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsPatchPathParams)
    ], BigqueryDatasetsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsPatchQueryParams)
    ], BigqueryDatasetsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Dataset)
    ], BigqueryDatasetsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsPatchSecurity)
    ], BigqueryDatasetsPatchRequest.prototype, "security", void 0);
    return BigqueryDatasetsPatchRequest;
}(SpeakeasyBase));
export { BigqueryDatasetsPatchRequest };
var BigqueryDatasetsPatchResponse = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsPatchResponse, _super);
    function BigqueryDatasetsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryDatasetsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], BigqueryDatasetsPatchResponse.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryDatasetsPatchResponse.prototype, "statusCode", void 0);
    return BigqueryDatasetsPatchResponse;
}(SpeakeasyBase));
export { BigqueryDatasetsPatchResponse };
