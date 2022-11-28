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
var DirectorySchemasGetPathParams = /** @class */ (function (_super) {
    __extends(DirectorySchemasGetPathParams, _super);
    function DirectorySchemasGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schemaKey" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetPathParams.prototype, "schemaKey", void 0);
    return DirectorySchemasGetPathParams;
}(SpeakeasyBase));
export { DirectorySchemasGetPathParams };
var DirectorySchemasGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectorySchemasGetQueryParams, _super);
    function DirectorySchemasGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectorySchemasGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectorySchemasGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectorySchemasGetQueryParams;
}(SpeakeasyBase));
export { DirectorySchemasGetQueryParams };
var DirectorySchemasGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectorySchemasGetSecurityOption1, _super);
    function DirectorySchemasGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectorySchemasGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectorySchemasGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectorySchemasGetSecurityOption1;
}(SpeakeasyBase));
export { DirectorySchemasGetSecurityOption1 };
var DirectorySchemasGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectorySchemasGetSecurityOption2, _super);
    function DirectorySchemasGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectorySchemasGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectorySchemasGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectorySchemasGetSecurityOption2;
}(SpeakeasyBase));
export { DirectorySchemasGetSecurityOption2 };
var DirectorySchemasGetSecurity = /** @class */ (function (_super) {
    __extends(DirectorySchemasGetSecurity, _super);
    function DirectorySchemasGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectorySchemasGetSecurityOption1)
    ], DirectorySchemasGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectorySchemasGetSecurityOption2)
    ], DirectorySchemasGetSecurity.prototype, "option2", void 0);
    return DirectorySchemasGetSecurity;
}(SpeakeasyBase));
export { DirectorySchemasGetSecurity };
var DirectorySchemasGetRequest = /** @class */ (function (_super) {
    __extends(DirectorySchemasGetRequest, _super);
    function DirectorySchemasGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasGetPathParams)
    ], DirectorySchemasGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasGetQueryParams)
    ], DirectorySchemasGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasGetSecurity)
    ], DirectorySchemasGetRequest.prototype, "security", void 0);
    return DirectorySchemasGetRequest;
}(SpeakeasyBase));
export { DirectorySchemasGetRequest };
var DirectorySchemasGetResponse = /** @class */ (function (_super) {
    __extends(DirectorySchemasGetResponse, _super);
    function DirectorySchemasGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectorySchemasGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Schema)
    ], DirectorySchemasGetResponse.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectorySchemasGetResponse.prototype, "statusCode", void 0);
    return DirectorySchemasGetResponse;
}(SpeakeasyBase));
export { DirectorySchemasGetResponse };
