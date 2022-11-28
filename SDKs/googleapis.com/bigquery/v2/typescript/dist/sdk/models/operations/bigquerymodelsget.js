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
var BigqueryModelsGetPathParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetPathParams, _super);
    function BigqueryModelsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetPathParams.prototype, "modelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetPathParams.prototype, "projectId", void 0);
    return BigqueryModelsGetPathParams;
}(SpeakeasyBase));
export { BigqueryModelsGetPathParams };
var BigqueryModelsGetQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetQueryParams, _super);
    function BigqueryModelsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryModelsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryModelsGetQueryParams.prototype, "userIp", void 0);
    return BigqueryModelsGetQueryParams;
}(SpeakeasyBase));
export { BigqueryModelsGetQueryParams };
var BigqueryModelsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetSecurityOption1, _super);
    function BigqueryModelsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryModelsGetSecurityOption1;
}(SpeakeasyBase));
export { BigqueryModelsGetSecurityOption1 };
var BigqueryModelsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetSecurityOption2, _super);
    function BigqueryModelsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryModelsGetSecurityOption2;
}(SpeakeasyBase));
export { BigqueryModelsGetSecurityOption2 };
var BigqueryModelsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetSecurityOption3, _super);
    function BigqueryModelsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsGetSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryModelsGetSecurityOption3;
}(SpeakeasyBase));
export { BigqueryModelsGetSecurityOption3 };
var BigqueryModelsGetSecurity = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetSecurity, _super);
    function BigqueryModelsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsGetSecurityOption1)
    ], BigqueryModelsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsGetSecurityOption2)
    ], BigqueryModelsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsGetSecurityOption3)
    ], BigqueryModelsGetSecurity.prototype, "option3", void 0);
    return BigqueryModelsGetSecurity;
}(SpeakeasyBase));
export { BigqueryModelsGetSecurity };
var BigqueryModelsGetRequest = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetRequest, _super);
    function BigqueryModelsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsGetPathParams)
    ], BigqueryModelsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsGetQueryParams)
    ], BigqueryModelsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsGetSecurity)
    ], BigqueryModelsGetRequest.prototype, "security", void 0);
    return BigqueryModelsGetRequest;
}(SpeakeasyBase));
export { BigqueryModelsGetRequest };
var BigqueryModelsGetResponse = /** @class */ (function (_super) {
    __extends(BigqueryModelsGetResponse, _super);
    function BigqueryModelsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryModelsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Model)
    ], BigqueryModelsGetResponse.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryModelsGetResponse.prototype, "statusCode", void 0);
    return BigqueryModelsGetResponse;
}(SpeakeasyBase));
export { BigqueryModelsGetResponse };
