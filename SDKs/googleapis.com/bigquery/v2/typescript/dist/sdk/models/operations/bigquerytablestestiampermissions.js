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
var BigqueryTablesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsPathParams, _super);
    function BigqueryTablesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return BigqueryTablesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsPathParams };
var BigqueryTablesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsQueryParams, _super);
    function BigqueryTablesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsQueryParams.prototype, "userIp", void 0);
    return BigqueryTablesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsQueryParams };
var BigqueryTablesTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsSecurityOption1, _super);
    function BigqueryTablesTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsSecurityOption1 };
var BigqueryTablesTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsSecurityOption2, _super);
    function BigqueryTablesTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsSecurityOption2 };
var BigqueryTablesTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsSecurityOption3, _super);
    function BigqueryTablesTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryTablesTestIamPermissionsSecurityOption3;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsSecurityOption3 };
var BigqueryTablesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsSecurity, _super);
    function BigqueryTablesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesTestIamPermissionsSecurityOption1)
    ], BigqueryTablesTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesTestIamPermissionsSecurityOption2)
    ], BigqueryTablesTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesTestIamPermissionsSecurityOption3)
    ], BigqueryTablesTestIamPermissionsSecurity.prototype, "option3", void 0);
    return BigqueryTablesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsSecurity };
var BigqueryTablesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsRequest, _super);
    function BigqueryTablesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesTestIamPermissionsPathParams)
    ], BigqueryTablesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesTestIamPermissionsQueryParams)
    ], BigqueryTablesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], BigqueryTablesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesTestIamPermissionsSecurity)
    ], BigqueryTablesTestIamPermissionsRequest.prototype, "security", void 0);
    return BigqueryTablesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsRequest };
var BigqueryTablesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesTestIamPermissionsResponse, _super);
    function BigqueryTablesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], BigqueryTablesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return BigqueryTablesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { BigqueryTablesTestIamPermissionsResponse };
