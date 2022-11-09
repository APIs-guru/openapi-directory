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
var AlertcenterAlertsFeedbackListPathParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackListPathParams, _super);
    function AlertcenterAlertsFeedbackListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListPathParams.prototype, "alertId", void 0);
    return AlertcenterAlertsFeedbackListPathParams;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackListPathParams };
var AlertcenterAlertsFeedbackListQueryParams = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackListQueryParams, _super);
    function AlertcenterAlertsFeedbackListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListQueryParams.prototype, "uploadProtocol", void 0);
    return AlertcenterAlertsFeedbackListQueryParams;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackListQueryParams };
var AlertcenterAlertsFeedbackListSecurity = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackListSecurity, _super);
    function AlertcenterAlertsFeedbackListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AlertcenterAlertsFeedbackListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AlertcenterAlertsFeedbackListSecurity.prototype, "oauth2c", void 0);
    return AlertcenterAlertsFeedbackListSecurity;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackListSecurity };
var AlertcenterAlertsFeedbackListRequest = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackListRequest, _super);
    function AlertcenterAlertsFeedbackListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsFeedbackListPathParams)
    ], AlertcenterAlertsFeedbackListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsFeedbackListQueryParams)
    ], AlertcenterAlertsFeedbackListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AlertcenterAlertsFeedbackListSecurity)
    ], AlertcenterAlertsFeedbackListRequest.prototype, "security", void 0);
    return AlertcenterAlertsFeedbackListRequest;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackListRequest };
var AlertcenterAlertsFeedbackListResponse = /** @class */ (function (_super) {
    __extends(AlertcenterAlertsFeedbackListResponse, _super);
    function AlertcenterAlertsFeedbackListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AlertcenterAlertsFeedbackListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAlertFeedbackResponse)
    ], AlertcenterAlertsFeedbackListResponse.prototype, "listAlertFeedbackResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AlertcenterAlertsFeedbackListResponse.prototype, "statusCode", void 0);
    return AlertcenterAlertsFeedbackListResponse;
}(SpeakeasyBase));
export { AlertcenterAlertsFeedbackListResponse };
