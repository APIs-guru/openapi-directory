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
var AdminCustomersChromePrintServersBatchDeletePrintServersPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchDeletePrintServersPathParams, _super);
    function AdminCustomersChromePrintServersBatchDeletePrintServersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersPathParams.prototype, "parent", void 0);
    return AdminCustomersChromePrintServersBatchDeletePrintServersPathParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchDeletePrintServersPathParams };
var AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams, _super);
    function AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams };
var AdminCustomersChromePrintServersBatchDeletePrintServersSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchDeletePrintServersSecurity, _super);
    function AdminCustomersChromePrintServersBatchDeletePrintServersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersSecurity.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintServersBatchDeletePrintServersSecurity;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchDeletePrintServersSecurity };
var AdminCustomersChromePrintServersBatchDeletePrintServersRequest = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchDeletePrintServersRequest, _super);
    function AdminCustomersChromePrintServersBatchDeletePrintServersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersBatchDeletePrintServersPathParams)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchDeletePrintServersRequest)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersBatchDeletePrintServersSecurity)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersRequest.prototype, "security", void 0);
    return AdminCustomersChromePrintServersBatchDeletePrintServersRequest;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchDeletePrintServersRequest };
var AdminCustomersChromePrintServersBatchDeletePrintServersResponse = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersBatchDeletePrintServersResponse, _super);
    function AdminCustomersChromePrintServersBatchDeletePrintServersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchDeletePrintServersResponse)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersResponse.prototype, "batchDeletePrintServersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintServersBatchDeletePrintServersResponse.prototype, "statusCode", void 0);
    return AdminCustomersChromePrintServersBatchDeletePrintServersResponse;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersBatchDeletePrintServersResponse };
