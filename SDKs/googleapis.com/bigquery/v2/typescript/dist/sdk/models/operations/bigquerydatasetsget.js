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
var BigqueryDatasetsGetPathParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetPathParams, _super);
    function BigqueryDatasetsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetPathParams.prototype, "projectId", void 0);
    return BigqueryDatasetsGetPathParams;
}(SpeakeasyBase));
export { BigqueryDatasetsGetPathParams };
var BigqueryDatasetsGetQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetQueryParams, _super);
    function BigqueryDatasetsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetQueryParams.prototype, "userIp", void 0);
    return BigqueryDatasetsGetQueryParams;
}(SpeakeasyBase));
export { BigqueryDatasetsGetQueryParams };
var BigqueryDatasetsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetSecurityOption1, _super);
    function BigqueryDatasetsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryDatasetsGetSecurityOption1;
}(SpeakeasyBase));
export { BigqueryDatasetsGetSecurityOption1 };
var BigqueryDatasetsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetSecurityOption2, _super);
    function BigqueryDatasetsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryDatasetsGetSecurityOption2;
}(SpeakeasyBase));
export { BigqueryDatasetsGetSecurityOption2 };
var BigqueryDatasetsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetSecurityOption3, _super);
    function BigqueryDatasetsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsGetSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryDatasetsGetSecurityOption3;
}(SpeakeasyBase));
export { BigqueryDatasetsGetSecurityOption3 };
var BigqueryDatasetsGetSecurity = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetSecurity, _super);
    function BigqueryDatasetsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsGetSecurityOption1)
    ], BigqueryDatasetsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsGetSecurityOption2)
    ], BigqueryDatasetsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsGetSecurityOption3)
    ], BigqueryDatasetsGetSecurity.prototype, "option3", void 0);
    return BigqueryDatasetsGetSecurity;
}(SpeakeasyBase));
export { BigqueryDatasetsGetSecurity };
var BigqueryDatasetsGetRequest = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetRequest, _super);
    function BigqueryDatasetsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsGetPathParams)
    ], BigqueryDatasetsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsGetQueryParams)
    ], BigqueryDatasetsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsGetSecurity)
    ], BigqueryDatasetsGetRequest.prototype, "security", void 0);
    return BigqueryDatasetsGetRequest;
}(SpeakeasyBase));
export { BigqueryDatasetsGetRequest };
var BigqueryDatasetsGetResponse = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsGetResponse, _super);
    function BigqueryDatasetsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryDatasetsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], BigqueryDatasetsGetResponse.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryDatasetsGetResponse.prototype, "statusCode", void 0);
    return BigqueryDatasetsGetResponse;
}(SpeakeasyBase));
export { BigqueryDatasetsGetResponse };
