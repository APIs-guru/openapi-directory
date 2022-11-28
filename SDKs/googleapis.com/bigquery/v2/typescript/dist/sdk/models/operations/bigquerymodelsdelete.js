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
var BigqueryModelsDeletePathParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsDeletePathParams, _super);
    function BigqueryModelsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeletePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeletePathParams.prototype, "modelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeletePathParams.prototype, "projectId", void 0);
    return BigqueryModelsDeletePathParams;
}(SpeakeasyBase));
export { BigqueryModelsDeletePathParams };
var BigqueryModelsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsDeleteQueryParams, _super);
    function BigqueryModelsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryModelsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryModelsDeleteQueryParams.prototype, "userIp", void 0);
    return BigqueryModelsDeleteQueryParams;
}(SpeakeasyBase));
export { BigqueryModelsDeleteQueryParams };
var BigqueryModelsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryModelsDeleteSecurityOption1, _super);
    function BigqueryModelsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryModelsDeleteSecurityOption1;
}(SpeakeasyBase));
export { BigqueryModelsDeleteSecurityOption1 };
var BigqueryModelsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryModelsDeleteSecurityOption2, _super);
    function BigqueryModelsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryModelsDeleteSecurityOption2;
}(SpeakeasyBase));
export { BigqueryModelsDeleteSecurityOption2 };
var BigqueryModelsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BigqueryModelsDeleteSecurity, _super);
    function BigqueryModelsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsDeleteSecurityOption1)
    ], BigqueryModelsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsDeleteSecurityOption2)
    ], BigqueryModelsDeleteSecurity.prototype, "option2", void 0);
    return BigqueryModelsDeleteSecurity;
}(SpeakeasyBase));
export { BigqueryModelsDeleteSecurity };
var BigqueryModelsDeleteRequest = /** @class */ (function (_super) {
    __extends(BigqueryModelsDeleteRequest, _super);
    function BigqueryModelsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsDeletePathParams)
    ], BigqueryModelsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsDeleteQueryParams)
    ], BigqueryModelsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsDeleteSecurity)
    ], BigqueryModelsDeleteRequest.prototype, "security", void 0);
    return BigqueryModelsDeleteRequest;
}(SpeakeasyBase));
export { BigqueryModelsDeleteRequest };
var BigqueryModelsDeleteResponse = /** @class */ (function (_super) {
    __extends(BigqueryModelsDeleteResponse, _super);
    function BigqueryModelsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryModelsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryModelsDeleteResponse.prototype, "statusCode", void 0);
    return BigqueryModelsDeleteResponse;
}(SpeakeasyBase));
export { BigqueryModelsDeleteResponse };
