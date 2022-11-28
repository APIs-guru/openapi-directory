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
var ApigeeregistryProjectsLocationsInstancesCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsInstancesCreatePathParams, _super);
    function ApigeeregistryProjectsLocationsInstancesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreatePathParams.prototype, "parent", void 0);
    return ApigeeregistryProjectsLocationsInstancesCreatePathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsInstancesCreatePathParams };
var ApigeeregistryProjectsLocationsInstancesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsInstancesCreateQueryParams, _super);
    function ApigeeregistryProjectsLocationsInstancesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instanceId" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsInstancesCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsInstancesCreateQueryParams };
var ApigeeregistryProjectsLocationsInstancesCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsInstancesCreateSecurity, _super);
    function ApigeeregistryProjectsLocationsInstancesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsInstancesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsInstancesCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsInstancesCreateSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsInstancesCreateSecurity };
var ApigeeregistryProjectsLocationsInstancesCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsInstancesCreateRequest, _super);
    function ApigeeregistryProjectsLocationsInstancesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsInstancesCreatePathParams)
    ], ApigeeregistryProjectsLocationsInstancesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsInstancesCreateQueryParams)
    ], ApigeeregistryProjectsLocationsInstancesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InstanceInput)
    ], ApigeeregistryProjectsLocationsInstancesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsInstancesCreateSecurity)
    ], ApigeeregistryProjectsLocationsInstancesCreateRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsInstancesCreateRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsInstancesCreateRequest };
var ApigeeregistryProjectsLocationsInstancesCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsInstancesCreateResponse, _super);
    function ApigeeregistryProjectsLocationsInstancesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsInstancesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ApigeeregistryProjectsLocationsInstancesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsInstancesCreateResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsInstancesCreateResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsInstancesCreateResponse };
