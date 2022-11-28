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
var AutomlProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsOperationsCancelPathParams, _super);
    function AutomlProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return AutomlProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsOperationsCancelPathParams };
var AutomlProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsOperationsCancelQueryParams, _super);
    function AutomlProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsOperationsCancelQueryParams };
var AutomlProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsOperationsCancelSecurity, _super);
    function AutomlProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsOperationsCancelSecurity };
var AutomlProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsOperationsCancelRequest, _super);
    function AutomlProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsOperationsCancelPathParams)
    ], AutomlProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsOperationsCancelQueryParams)
    ], AutomlProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AutomlProjectsLocationsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsOperationsCancelSecurity)
    ], AutomlProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsOperationsCancelRequest };
var AutomlProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsOperationsCancelResponse, _super);
    function AutomlProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AutomlProjectsLocationsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsOperationsCancelResponse };
