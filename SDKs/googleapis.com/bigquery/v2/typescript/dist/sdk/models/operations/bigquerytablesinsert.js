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
var BigqueryTablesInsertPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesInsertPathParams, _super);
    function BigqueryTablesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertPathParams.prototype, "projectId", void 0);
    return BigqueryTablesInsertPathParams;
}(SpeakeasyBase));
export { BigqueryTablesInsertPathParams };
var BigqueryTablesInsertQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesInsertQueryParams, _super);
    function BigqueryTablesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesInsertQueryParams.prototype, "userIp", void 0);
    return BigqueryTablesInsertQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesInsertQueryParams };
var BigqueryTablesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesInsertSecurityOption1, _super);
    function BigqueryTablesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesInsertSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesInsertSecurityOption1 };
var BigqueryTablesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesInsertSecurityOption2, _super);
    function BigqueryTablesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesInsertSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesInsertSecurityOption2 };
var BigqueryTablesInsertSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesInsertSecurity, _super);
    function BigqueryTablesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesInsertSecurityOption1)
    ], BigqueryTablesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesInsertSecurityOption2)
    ], BigqueryTablesInsertSecurity.prototype, "option2", void 0);
    return BigqueryTablesInsertSecurity;
}(SpeakeasyBase));
export { BigqueryTablesInsertSecurity };
var BigqueryTablesInsertRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesInsertRequest, _super);
    function BigqueryTablesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesInsertPathParams)
    ], BigqueryTablesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesInsertQueryParams)
    ], BigqueryTablesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Table)
    ], BigqueryTablesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesInsertSecurity)
    ], BigqueryTablesInsertRequest.prototype, "security", void 0);
    return BigqueryTablesInsertRequest;
}(SpeakeasyBase));
export { BigqueryTablesInsertRequest };
var BigqueryTablesInsertResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesInsertResponse, _super);
    function BigqueryTablesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Table)
    ], BigqueryTablesInsertResponse.prototype, "table", void 0);
    return BigqueryTablesInsertResponse;
}(SpeakeasyBase));
export { BigqueryTablesInsertResponse };
