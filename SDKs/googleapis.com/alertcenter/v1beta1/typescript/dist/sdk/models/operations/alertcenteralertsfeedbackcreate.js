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
var AlertcenterAlertsFeedbackCreatePathParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackCreatePathParams, _super);
    function AlertcenterAlertsFeedbackCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreatePathParams.prototype, "alertId", void 0);
    return AlertcenterAlertsFeedbackCreatePathParams;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackCreatePathParams };
var AlertcenterAlertsFeedbackCreateQueryParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackCreateQueryParams, _super);
    function AlertcenterAlertsFeedbackCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AlertcenterAlertsFeedbackCreateQueryParams;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackCreateQueryParams };
var AlertcenterAlertsFeedbackCreateSecurity = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackCreateSecurity, _super);
    function AlertcenterAlertsFeedbackCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AlertcenterAlertsFeedbackCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AlertcenterAlertsFeedbackCreateSecurity.prototype, "oauth2c", void 0);
    return AlertcenterAlertsFeedbackCreateSecurity;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackCreateSecurity };
var AlertcenterAlertsFeedbackCreateRequest = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackCreateRequest, _super);
    function AlertcenterAlertsFeedbackCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsFeedbackCreatePathParams)
    ], AlertcenterAlertsFeedbackCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsFeedbackCreateQueryParams)
    ], AlertcenterAlertsFeedbackCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AlertFeedback)
    ], AlertcenterAlertsFeedbackCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsFeedbackCreateSecurity)
    ], AlertcenterAlertsFeedbackCreateRequest.prototype, "security", void 0);
    return AlertcenterAlertsFeedbackCreateRequest;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackCreateRequest };
var AlertcenterAlertsFeedbackCreateResponse = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackCreateResponse, _super);
    function AlertcenterAlertsFeedbackCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AlertFeedback)
    ], AlertcenterAlertsFeedbackCreateResponse.prototype, "alertFeedback", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AlertcenterAlertsFeedbackCreateResponse.prototype, "statusCode", void 0);
    return AlertcenterAlertsFeedbackCreateResponse;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackCreateResponse };
