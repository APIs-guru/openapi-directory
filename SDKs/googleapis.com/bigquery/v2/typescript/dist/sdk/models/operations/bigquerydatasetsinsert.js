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
var BigqueryDatasetsInsertPathParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsInsertPathParams, _super);
    function BigqueryDatasetsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertPathParams.prototype, "projectId", void 0);
    return BigqueryDatasetsInsertPathParams;
}(SpeakeasyBase));
export { BigqueryDatasetsInsertPathParams };
var BigqueryDatasetsInsertQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsInsertQueryParams, _super);
    function BigqueryDatasetsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertQueryParams.prototype, "userIp", void 0);
    return BigqueryDatasetsInsertQueryParams;
}(SpeakeasyBase));
export { BigqueryDatasetsInsertQueryParams };
var BigqueryDatasetsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsInsertSecurityOption1, _super);
    function BigqueryDatasetsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryDatasetsInsertSecurityOption1;
}(SpeakeasyBase));
export { BigqueryDatasetsInsertSecurityOption1 };
var BigqueryDatasetsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsInsertSecurityOption2, _super);
    function BigqueryDatasetsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryDatasetsInsertSecurityOption2;
}(SpeakeasyBase));
export { BigqueryDatasetsInsertSecurityOption2 };
var BigqueryDatasetsInsertSecurity = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsInsertSecurity, _super);
    function BigqueryDatasetsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsInsertSecurityOption1)
    ], BigqueryDatasetsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsInsertSecurityOption2)
    ], BigqueryDatasetsInsertSecurity.prototype, "option2", void 0);
    return BigqueryDatasetsInsertSecurity;
}(SpeakeasyBase));
export { BigqueryDatasetsInsertSecurity };
var BigqueryDatasetsInsertRequest = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsInsertRequest, _super);
    function BigqueryDatasetsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsInsertPathParams)
    ], BigqueryDatasetsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsInsertQueryParams)
    ], BigqueryDatasetsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Dataset)
    ], BigqueryDatasetsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsInsertSecurity)
    ], BigqueryDatasetsInsertRequest.prototype, "security", void 0);
    return BigqueryDatasetsInsertRequest;
}(SpeakeasyBase));
export { BigqueryDatasetsInsertRequest };
var BigqueryDatasetsInsertResponse = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsInsertResponse, _super);
    function BigqueryDatasetsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryDatasetsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], BigqueryDatasetsInsertResponse.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryDatasetsInsertResponse.prototype, "statusCode", void 0);
    return BigqueryDatasetsInsertResponse;
}(SpeakeasyBase));
export { BigqueryDatasetsInsertResponse };
