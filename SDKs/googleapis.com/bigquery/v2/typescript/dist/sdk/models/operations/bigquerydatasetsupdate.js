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
var BigqueryDatasetsUpdatePathParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsUpdatePathParams, _super);
    function BigqueryDatasetsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdatePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdatePathParams.prototype, "projectId", void 0);
    return BigqueryDatasetsUpdatePathParams;
}(SpeakeasyBase));
export { BigqueryDatasetsUpdatePathParams };
var BigqueryDatasetsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsUpdateQueryParams, _super);
    function BigqueryDatasetsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdateQueryParams.prototype, "userIp", void 0);
    return BigqueryDatasetsUpdateQueryParams;
}(SpeakeasyBase));
export { BigqueryDatasetsUpdateQueryParams };
var BigqueryDatasetsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsUpdateSecurityOption1, _super);
    function BigqueryDatasetsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryDatasetsUpdateSecurityOption1;
}(SpeakeasyBase));
export { BigqueryDatasetsUpdateSecurityOption1 };
var BigqueryDatasetsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsUpdateSecurityOption2, _super);
    function BigqueryDatasetsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryDatasetsUpdateSecurityOption2;
}(SpeakeasyBase));
export { BigqueryDatasetsUpdateSecurityOption2 };
var BigqueryDatasetsUpdateSecurity = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsUpdateSecurity, _super);
    function BigqueryDatasetsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsUpdateSecurityOption1)
    ], BigqueryDatasetsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsUpdateSecurityOption2)
    ], BigqueryDatasetsUpdateSecurity.prototype, "option2", void 0);
    return BigqueryDatasetsUpdateSecurity;
}(SpeakeasyBase));
export { BigqueryDatasetsUpdateSecurity };
var BigqueryDatasetsUpdateRequest = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsUpdateRequest, _super);
    function BigqueryDatasetsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsUpdatePathParams)
    ], BigqueryDatasetsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsUpdateQueryParams)
    ], BigqueryDatasetsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Dataset)
    ], BigqueryDatasetsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsUpdateSecurity)
    ], BigqueryDatasetsUpdateRequest.prototype, "security", void 0);
    return BigqueryDatasetsUpdateRequest;
}(SpeakeasyBase));
export { BigqueryDatasetsUpdateRequest };
var BigqueryDatasetsUpdateResponse = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsUpdateResponse, _super);
    function BigqueryDatasetsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryDatasetsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], BigqueryDatasetsUpdateResponse.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryDatasetsUpdateResponse.prototype, "statusCode", void 0);
    return BigqueryDatasetsUpdateResponse;
}(SpeakeasyBase));
export { BigqueryDatasetsUpdateResponse };
