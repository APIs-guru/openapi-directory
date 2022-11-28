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
var BigqueryDatasetsDeletePathParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsDeletePathParams, _super);
    function BigqueryDatasetsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeletePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeletePathParams.prototype, "projectId", void 0);
    return BigqueryDatasetsDeletePathParams;
}(SpeakeasyBase));
export { BigqueryDatasetsDeletePathParams };
var BigqueryDatasetsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsDeleteQueryParams, _super);
    function BigqueryDatasetsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleteContents" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "deleteContents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeleteQueryParams.prototype, "userIp", void 0);
    return BigqueryDatasetsDeleteQueryParams;
}(SpeakeasyBase));
export { BigqueryDatasetsDeleteQueryParams };
var BigqueryDatasetsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsDeleteSecurityOption1, _super);
    function BigqueryDatasetsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryDatasetsDeleteSecurityOption1;
}(SpeakeasyBase));
export { BigqueryDatasetsDeleteSecurityOption1 };
var BigqueryDatasetsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsDeleteSecurityOption2, _super);
    function BigqueryDatasetsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryDatasetsDeleteSecurityOption2;
}(SpeakeasyBase));
export { BigqueryDatasetsDeleteSecurityOption2 };
var BigqueryDatasetsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsDeleteSecurity, _super);
    function BigqueryDatasetsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsDeleteSecurityOption1)
    ], BigqueryDatasetsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsDeleteSecurityOption2)
    ], BigqueryDatasetsDeleteSecurity.prototype, "option2", void 0);
    return BigqueryDatasetsDeleteSecurity;
}(SpeakeasyBase));
export { BigqueryDatasetsDeleteSecurity };
var BigqueryDatasetsDeleteRequest = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsDeleteRequest, _super);
    function BigqueryDatasetsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsDeletePathParams)
    ], BigqueryDatasetsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsDeleteQueryParams)
    ], BigqueryDatasetsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsDeleteSecurity)
    ], BigqueryDatasetsDeleteRequest.prototype, "security", void 0);
    return BigqueryDatasetsDeleteRequest;
}(SpeakeasyBase));
export { BigqueryDatasetsDeleteRequest };
var BigqueryDatasetsDeleteResponse = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsDeleteResponse, _super);
    function BigqueryDatasetsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryDatasetsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryDatasetsDeleteResponse.prototype, "statusCode", void 0);
    return BigqueryDatasetsDeleteResponse;
}(SpeakeasyBase));
export { BigqueryDatasetsDeleteResponse };
