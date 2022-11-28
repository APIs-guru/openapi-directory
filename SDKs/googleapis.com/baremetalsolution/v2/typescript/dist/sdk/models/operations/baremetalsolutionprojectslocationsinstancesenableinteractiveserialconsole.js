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
var BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams, _super);
    function BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams.prototype, "name", void 0);
    return BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams };
var BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams, _super);
    function BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams };
var BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity, _super);
    function BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity };
var BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest, _super);
    function BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsolePathParams)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleQueryParams)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest };
var BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse, _super);
    function BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse };
