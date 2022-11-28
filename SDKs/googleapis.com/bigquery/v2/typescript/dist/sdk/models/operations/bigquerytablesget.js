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
var BigqueryTablesGetPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetPathParams, _super);
    function BigqueryTablesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetPathParams.prototype, "tableId", void 0);
    return BigqueryTablesGetPathParams;
}(SpeakeasyBase));
export { BigqueryTablesGetPathParams };
export var BigqueryTablesGetViewEnum;
(function (BigqueryTablesGetViewEnum) {
    BigqueryTablesGetViewEnum["Basic"] = "BASIC";
    BigqueryTablesGetViewEnum["Full"] = "FULL";
    BigqueryTablesGetViewEnum["StorageStats"] = "STORAGE_STATS";
    BigqueryTablesGetViewEnum["TableMetadataViewUnspecified"] = "TABLE_METADATA_VIEW_UNSPECIFIED";
})(BigqueryTablesGetViewEnum || (BigqueryTablesGetViewEnum = {}));
var BigqueryTablesGetQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetQueryParams, _super);
    function BigqueryTablesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selectedFields" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "selectedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetQueryParams.prototype, "view", void 0);
    return BigqueryTablesGetQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesGetQueryParams };
var BigqueryTablesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetSecurityOption1, _super);
    function BigqueryTablesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesGetSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesGetSecurityOption1 };
var BigqueryTablesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetSecurityOption2, _super);
    function BigqueryTablesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesGetSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesGetSecurityOption2 };
var BigqueryTablesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetSecurityOption3, _super);
    function BigqueryTablesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesGetSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryTablesGetSecurityOption3;
}(SpeakeasyBase));
export { BigqueryTablesGetSecurityOption3 };
var BigqueryTablesGetSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetSecurity, _super);
    function BigqueryTablesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesGetSecurityOption1)
    ], BigqueryTablesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesGetSecurityOption2)
    ], BigqueryTablesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesGetSecurityOption3)
    ], BigqueryTablesGetSecurity.prototype, "option3", void 0);
    return BigqueryTablesGetSecurity;
}(SpeakeasyBase));
export { BigqueryTablesGetSecurity };
var BigqueryTablesGetRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetRequest, _super);
    function BigqueryTablesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesGetPathParams)
    ], BigqueryTablesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesGetQueryParams)
    ], BigqueryTablesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesGetSecurity)
    ], BigqueryTablesGetRequest.prototype, "security", void 0);
    return BigqueryTablesGetRequest;
}(SpeakeasyBase));
export { BigqueryTablesGetRequest };
var BigqueryTablesGetResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetResponse, _super);
    function BigqueryTablesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Table)
    ], BigqueryTablesGetResponse.prototype, "table", void 0);
    return BigqueryTablesGetResponse;
}(SpeakeasyBase));
export { BigqueryTablesGetResponse };
