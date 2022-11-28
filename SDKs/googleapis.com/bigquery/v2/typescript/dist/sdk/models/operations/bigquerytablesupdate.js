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
var BigqueryTablesUpdatePathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesUpdatePathParams, _super);
    function BigqueryTablesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdatePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdatePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdatePathParams.prototype, "tableId", void 0);
    return BigqueryTablesUpdatePathParams;
}(SpeakeasyBase));
export { BigqueryTablesUpdatePathParams };
var BigqueryTablesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesUpdateQueryParams, _super);
    function BigqueryTablesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autodetect_schema" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesUpdateQueryParams.prototype, "autodetectSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesUpdateQueryParams.prototype, "userIp", void 0);
    return BigqueryTablesUpdateQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesUpdateQueryParams };
var BigqueryTablesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesUpdateSecurityOption1, _super);
    function BigqueryTablesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesUpdateSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesUpdateSecurityOption1 };
var BigqueryTablesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesUpdateSecurityOption2, _super);
    function BigqueryTablesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesUpdateSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesUpdateSecurityOption2 };
var BigqueryTablesUpdateSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesUpdateSecurity, _super);
    function BigqueryTablesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesUpdateSecurityOption1)
    ], BigqueryTablesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesUpdateSecurityOption2)
    ], BigqueryTablesUpdateSecurity.prototype, "option2", void 0);
    return BigqueryTablesUpdateSecurity;
}(SpeakeasyBase));
export { BigqueryTablesUpdateSecurity };
var BigqueryTablesUpdateRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesUpdateRequest, _super);
    function BigqueryTablesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesUpdatePathParams)
    ], BigqueryTablesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesUpdateQueryParams)
    ], BigqueryTablesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Table)
    ], BigqueryTablesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesUpdateSecurity)
    ], BigqueryTablesUpdateRequest.prototype, "security", void 0);
    return BigqueryTablesUpdateRequest;
}(SpeakeasyBase));
export { BigqueryTablesUpdateRequest };
var BigqueryTablesUpdateResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesUpdateResponse, _super);
    function BigqueryTablesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Table)
    ], BigqueryTablesUpdateResponse.prototype, "table", void 0);
    return BigqueryTablesUpdateResponse;
}(SpeakeasyBase));
export { BigqueryTablesUpdateResponse };
