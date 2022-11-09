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
var AlertcenterAlertsUndeletePathParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsUndeletePathParams, _super);
    function AlertcenterAlertsUndeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeletePathParams.prototype, "alertId", void 0);
    return AlertcenterAlertsUndeletePathParams;
}(SpeakeasyBase));
export { AlertcenterAlertsUndeletePathParams };
var AlertcenterAlertsUndeleteQueryParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsUndeleteQueryParams, _super);
    function AlertcenterAlertsUndeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AlertcenterAlertsUndeleteQueryParams;
}(SpeakeasyBase));
export { AlertcenterAlertsUndeleteQueryParams };
var AlertcenterAlertsUndeleteSecurity = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsUndeleteSecurity, _super);
    function AlertcenterAlertsUndeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AlertcenterAlertsUndeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AlertcenterAlertsUndeleteSecurity.prototype, "oauth2c", void 0);
    return AlertcenterAlertsUndeleteSecurity;
}(SpeakeasyBase));
export { AlertcenterAlertsUndeleteSecurity };
var AlertcenterAlertsUndeleteRequest = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsUndeleteRequest, _super);
    function AlertcenterAlertsUndeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsUndeletePathParams)
    ], AlertcenterAlertsUndeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsUndeleteQueryParams)
    ], AlertcenterAlertsUndeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UndeleteAlertRequest)
    ], AlertcenterAlertsUndeleteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsUndeleteSecurity)
    ], AlertcenterAlertsUndeleteRequest.prototype, "security", void 0);
    return AlertcenterAlertsUndeleteRequest;
}(SpeakeasyBase));
export { AlertcenterAlertsUndeleteRequest };
var AlertcenterAlertsUndeleteResponse = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsUndeleteResponse, _super);
    function AlertcenterAlertsUndeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Alert)
    ], AlertcenterAlertsUndeleteResponse.prototype, "alert", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AlertcenterAlertsUndeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AlertcenterAlertsUndeleteResponse.prototype, "statusCode", void 0);
    return AlertcenterAlertsUndeleteResponse;
}(SpeakeasyBase));
export { AlertcenterAlertsUndeleteResponse };
