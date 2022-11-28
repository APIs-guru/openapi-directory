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
var AccesscontextmanagerOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOperationsGetPathParams, _super);
    function AccesscontextmanagerOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetPathParams.prototype, "name", void 0);
    return AccesscontextmanagerOperationsGetPathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOperationsGetPathParams };
export var AccesscontextmanagerOperationsGetAccessLevelFormatEnum;
(function (AccesscontextmanagerOperationsGetAccessLevelFormatEnum) {
    AccesscontextmanagerOperationsGetAccessLevelFormatEnum["LevelFormatUnspecified"] = "LEVEL_FORMAT_UNSPECIFIED";
    AccesscontextmanagerOperationsGetAccessLevelFormatEnum["AsDefined"] = "AS_DEFINED";
    AccesscontextmanagerOperationsGetAccessLevelFormatEnum["Cel"] = "CEL";
})(AccesscontextmanagerOperationsGetAccessLevelFormatEnum || (AccesscontextmanagerOperationsGetAccessLevelFormatEnum = {}));
var AccesscontextmanagerOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOperationsGetQueryParams, _super);
    function AccesscontextmanagerOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessLevelFormat" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "accessLevelFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerOperationsGetQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOperationsGetQueryParams };
var AccesscontextmanagerOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOperationsGetSecurity, _super);
    function AccesscontextmanagerOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerOperationsGetSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerOperationsGetSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerOperationsGetSecurity };
var AccesscontextmanagerOperationsGetRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOperationsGetRequest, _super);
    function AccesscontextmanagerOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOperationsGetPathParams)
    ], AccesscontextmanagerOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOperationsGetQueryParams)
    ], AccesscontextmanagerOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOperationsGetSecurity)
    ], AccesscontextmanagerOperationsGetRequest.prototype, "security", void 0);
    return AccesscontextmanagerOperationsGetRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerOperationsGetRequest };
var AccesscontextmanagerOperationsGetResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOperationsGetResponse, _super);
    function AccesscontextmanagerOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerOperationsGetResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerOperationsGetResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerOperationsGetResponse };
