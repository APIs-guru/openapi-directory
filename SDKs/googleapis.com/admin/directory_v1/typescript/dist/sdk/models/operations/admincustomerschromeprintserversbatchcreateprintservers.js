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
var AdminCustomersChromePrintServersBatchCreatePrintServersPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchCreatePrintServersPathParams, _super);
    function AdminCustomersChromePrintServersBatchCreatePrintServersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersPathParams.prototype, "parent", void 0);
    return AdminCustomersChromePrintServersBatchCreatePrintServersPathParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchCreatePrintServersPathParams };
var AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams, _super);
    function AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams };
var AdminCustomersChromePrintServersBatchCreatePrintServersSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchCreatePrintServersSecurity, _super);
    function AdminCustomersChromePrintServersBatchCreatePrintServersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersSecurity.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintServersBatchCreatePrintServersSecurity;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchCreatePrintServersSecurity };
var AdminCustomersChromePrintServersBatchCreatePrintServersRequest = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchCreatePrintServersRequest, _super);
    function AdminCustomersChromePrintServersBatchCreatePrintServersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersBatchCreatePrintServersPathParams)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchCreatePrintServersRequestInput)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersBatchCreatePrintServersSecurity)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersRequest.prototype, "security", void 0);
    return AdminCustomersChromePrintServersBatchCreatePrintServersRequest;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchCreatePrintServersRequest };
var AdminCustomersChromePrintServersBatchCreatePrintServersResponse = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchCreatePrintServersResponse, _super);
    function AdminCustomersChromePrintServersBatchCreatePrintServersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchCreatePrintServersResponse)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersResponse.prototype, "batchCreatePrintServersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintServersBatchCreatePrintServersResponse.prototype, "statusCode", void 0);
    return AdminCustomersChromePrintServersBatchCreatePrintServersResponse;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchCreatePrintServersResponse };
