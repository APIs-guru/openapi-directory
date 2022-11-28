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
var BaremetalsolutionProjectsLocationsInstancesStartPathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesStartPathParams, _super);
    function BaremetalsolutionProjectsLocationsInstancesStartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartPathParams.prototype, "name", void 0);
    return BaremetalsolutionProjectsLocationsInstancesStartPathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesStartPathParams };
var BaremetalsolutionProjectsLocationsInstancesStartQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesStartQueryParams, _super);
    function BaremetalsolutionProjectsLocationsInstancesStartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsInstancesStartQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesStartQueryParams };
var BaremetalsolutionProjectsLocationsInstancesStartSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesStartSecurity, _super);
    function BaremetalsolutionProjectsLocationsInstancesStartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsInstancesStartSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsInstancesStartSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsInstancesStartSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesStartSecurity };
var BaremetalsolutionProjectsLocationsInstancesStartRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesStartRequest, _super);
    function BaremetalsolutionProjectsLocationsInstancesStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesStartPathParams)
    ], BaremetalsolutionProjectsLocationsInstancesStartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesStartQueryParams)
    ], BaremetalsolutionProjectsLocationsInstancesStartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], BaremetalsolutionProjectsLocationsInstancesStartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesStartSecurity)
    ], BaremetalsolutionProjectsLocationsInstancesStartRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsInstancesStartRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesStartRequest };
var BaremetalsolutionProjectsLocationsInstancesStartResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesStartResponse, _super);
    function BaremetalsolutionProjectsLocationsInstancesStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BaremetalsolutionProjectsLocationsInstancesStartResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsInstancesStartResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsInstancesStartResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesStartResponse };
