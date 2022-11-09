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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ApigeeregistryProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsOperationsDeletePathParams, _super);
    function ApigeeregistryProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return ApigeeregistryProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsOperationsDeletePathParams };
var ApigeeregistryProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsOperationsDeleteQueryParams, _super);
    function ApigeeregistryProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsOperationsDeleteQueryParams };
var ApigeeregistryProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsOperationsDeleteSecurity, _super);
    function ApigeeregistryProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsOperationsDeleteSecurity };
var ApigeeregistryProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsOperationsDeleteRequest, _super);
    function ApigeeregistryProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsOperationsDeletePathParams)
    ], ApigeeregistryProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsOperationsDeleteQueryParams)
    ], ApigeeregistryProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsOperationsDeleteSecurity)
    ], ApigeeregistryProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsOperationsDeleteRequest };
var ApigeeregistryProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsOperationsDeleteResponse, _super);
    function ApigeeregistryProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ApigeeregistryProjectsLocationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsOperationsDeleteResponse };
