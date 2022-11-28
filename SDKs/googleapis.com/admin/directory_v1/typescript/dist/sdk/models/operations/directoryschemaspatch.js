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
var DirectorySchemasPatchPathParams = /** @class */ (function (_super) {
    __extends(DirectorySchemasPatchPathParams, _super);
    function DirectorySchemasPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schemaKey" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchPathParams.prototype, "schemaKey", void 0);
    return DirectorySchemasPatchPathParams;
}(SpeakeasyBase));
export { DirectorySchemasPatchPathParams };
var DirectorySchemasPatchQueryParams = /** @class */ (function (_super) {
    __extends(DirectorySchemasPatchQueryParams, _super);
    function DirectorySchemasPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectorySchemasPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectorySchemasPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DirectorySchemasPatchQueryParams;
}(SpeakeasyBase));
export { DirectorySchemasPatchQueryParams };
var DirectorySchemasPatchSecurity = /** @class */ (function (_super) {
    __extends(DirectorySchemasPatchSecurity, _super);
    function DirectorySchemasPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectorySchemasPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectorySchemasPatchSecurity.prototype, "oauth2c", void 0);
    return DirectorySchemasPatchSecurity;
}(SpeakeasyBase));
export { DirectorySchemasPatchSecurity };
var DirectorySchemasPatchRequest = /** @class */ (function (_super) {
    __extends(DirectorySchemasPatchRequest, _super);
    function DirectorySchemasPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasPatchPathParams)
    ], DirectorySchemasPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasPatchQueryParams)
    ], DirectorySchemasPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Schema)
    ], DirectorySchemasPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectorySchemasPatchSecurity)
    ], DirectorySchemasPatchRequest.prototype, "security", void 0);
    return DirectorySchemasPatchRequest;
}(SpeakeasyBase));
export { DirectorySchemasPatchRequest };
var DirectorySchemasPatchResponse = /** @class */ (function (_super) {
    __extends(DirectorySchemasPatchResponse, _super);
    function DirectorySchemasPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectorySchemasPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Schema)
    ], DirectorySchemasPatchResponse.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectorySchemasPatchResponse.prototype, "statusCode", void 0);
    return DirectorySchemasPatchResponse;
}(SpeakeasyBase));
export { DirectorySchemasPatchResponse };
