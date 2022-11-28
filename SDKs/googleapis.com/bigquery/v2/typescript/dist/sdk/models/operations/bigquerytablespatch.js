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
var BigqueryTablesPatchPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesPatchPathParams, _super);
    function BigqueryTablesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchPathParams.prototype, "tableId", void 0);
    return BigqueryTablesPatchPathParams;
}(SpeakeasyBase));
export { BigqueryTablesPatchPathParams };
var BigqueryTablesPatchQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesPatchQueryParams, _super);
    function BigqueryTablesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autodetect_schema" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesPatchQueryParams.prototype, "autodetectSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesPatchQueryParams.prototype, "userIp", void 0);
    return BigqueryTablesPatchQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesPatchQueryParams };
var BigqueryTablesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesPatchSecurityOption1, _super);
    function BigqueryTablesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesPatchSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesPatchSecurityOption1 };
var BigqueryTablesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesPatchSecurityOption2, _super);
    function BigqueryTablesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesPatchSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesPatchSecurityOption2 };
var BigqueryTablesPatchSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesPatchSecurity, _super);
    function BigqueryTablesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesPatchSecurityOption1)
    ], BigqueryTablesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesPatchSecurityOption2)
    ], BigqueryTablesPatchSecurity.prototype, "option2", void 0);
    return BigqueryTablesPatchSecurity;
}(SpeakeasyBase));
export { BigqueryTablesPatchSecurity };
var BigqueryTablesPatchRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesPatchRequest, _super);
    function BigqueryTablesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesPatchPathParams)
    ], BigqueryTablesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesPatchQueryParams)
    ], BigqueryTablesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Table)
    ], BigqueryTablesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesPatchSecurity)
    ], BigqueryTablesPatchRequest.prototype, "security", void 0);
    return BigqueryTablesPatchRequest;
}(SpeakeasyBase));
export { BigqueryTablesPatchRequest };
var BigqueryTablesPatchResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesPatchResponse, _super);
    function BigqueryTablesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Table)
    ], BigqueryTablesPatchResponse.prototype, "table", void 0);
    return BigqueryTablesPatchResponse;
}(SpeakeasyBase));
export { BigqueryTablesPatchResponse };
