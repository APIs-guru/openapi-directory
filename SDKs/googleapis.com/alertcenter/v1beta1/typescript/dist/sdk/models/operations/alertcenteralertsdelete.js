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
var AlertcenterAlertsDeletePathParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsDeletePathParams, _super);
    function AlertcenterAlertsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeletePathParams.prototype, "alertId", void 0);
    return AlertcenterAlertsDeletePathParams;
}(SpeakeasyBase));
export { AlertcenterAlertsDeletePathParams };
var AlertcenterAlertsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsDeleteQueryParams, _super);
    function AlertcenterAlertsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AlertcenterAlertsDeleteQueryParams;
}(SpeakeasyBase));
export { AlertcenterAlertsDeleteQueryParams };
var AlertcenterAlertsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsDeleteSecurity, _super);
    function AlertcenterAlertsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AlertcenterAlertsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AlertcenterAlertsDeleteSecurity.prototype, "oauth2c", void 0);
    return AlertcenterAlertsDeleteSecurity;
}(SpeakeasyBase));
export { AlertcenterAlertsDeleteSecurity };
var AlertcenterAlertsDeleteRequest = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsDeleteRequest, _super);
    function AlertcenterAlertsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlertcenterAlertsDeletePathParams)
    ], AlertcenterAlertsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlertcenterAlertsDeleteQueryParams)
    ], AlertcenterAlertsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AlertcenterAlertsDeleteSecurity)
    ], AlertcenterAlertsDeleteRequest.prototype, "security", void 0);
    return AlertcenterAlertsDeleteRequest;
}(SpeakeasyBase));
export { AlertcenterAlertsDeleteRequest };
var AlertcenterAlertsDeleteResponse = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsDeleteResponse, _super);
    function AlertcenterAlertsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AlertcenterAlertsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AlertcenterAlertsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AlertcenterAlertsDeleteResponse.prototype, "statusCode", void 0);
    return AlertcenterAlertsDeleteResponse;
}(SpeakeasyBase));
export { AlertcenterAlertsDeleteResponse };
