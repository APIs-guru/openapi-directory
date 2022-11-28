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
var BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams, _super);
    function BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams.prototype, "instance", void 0);
    return BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams };
var BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams, _super);
    function BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams };
var BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity, _super);
    function BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity };
var BaremetalsolutionProjectsLocationsInstancesDetachLunRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesDetachLunRequest, _super);
    function BaremetalsolutionProjectsLocationsInstancesDetachLunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DetachLunRequest)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsInstancesDetachLunRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesDetachLunRequest };
var BaremetalsolutionProjectsLocationsInstancesDetachLunResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsInstancesDetachLunResponse, _super);
    function BaremetalsolutionProjectsLocationsInstancesDetachLunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsInstancesDetachLunResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsInstancesDetachLunResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsInstancesDetachLunResponse };
