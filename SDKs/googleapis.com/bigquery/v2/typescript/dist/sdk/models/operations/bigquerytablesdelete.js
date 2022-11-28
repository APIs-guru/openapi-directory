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
var BigqueryTablesDeletePathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesDeletePathParams, _super);
    function BigqueryTablesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeletePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeletePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeletePathParams.prototype, "tableId", void 0);
    return BigqueryTablesDeletePathParams;
}(SpeakeasyBase));
export { BigqueryTablesDeletePathParams };
var BigqueryTablesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesDeleteQueryParams, _super);
    function BigqueryTablesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesDeleteQueryParams.prototype, "userIp", void 0);
    return BigqueryTablesDeleteQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesDeleteQueryParams };
var BigqueryTablesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesDeleteSecurityOption1, _super);
    function BigqueryTablesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesDeleteSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesDeleteSecurityOption1 };
var BigqueryTablesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesDeleteSecurityOption2, _super);
    function BigqueryTablesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesDeleteSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesDeleteSecurityOption2 };
var BigqueryTablesDeleteSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesDeleteSecurity, _super);
    function BigqueryTablesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesDeleteSecurityOption1)
    ], BigqueryTablesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesDeleteSecurityOption2)
    ], BigqueryTablesDeleteSecurity.prototype, "option2", void 0);
    return BigqueryTablesDeleteSecurity;
}(SpeakeasyBase));
export { BigqueryTablesDeleteSecurity };
var BigqueryTablesDeleteRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesDeleteRequest, _super);
    function BigqueryTablesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesDeletePathParams)
    ], BigqueryTablesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesDeleteQueryParams)
    ], BigqueryTablesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesDeleteSecurity)
    ], BigqueryTablesDeleteRequest.prototype, "security", void 0);
    return BigqueryTablesDeleteRequest;
}(SpeakeasyBase));
export { BigqueryTablesDeleteRequest };
var BigqueryTablesDeleteResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesDeleteResponse, _super);
    function BigqueryTablesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesDeleteResponse.prototype, "statusCode", void 0);
    return BigqueryTablesDeleteResponse;
}(SpeakeasyBase));
export { BigqueryTablesDeleteResponse };
