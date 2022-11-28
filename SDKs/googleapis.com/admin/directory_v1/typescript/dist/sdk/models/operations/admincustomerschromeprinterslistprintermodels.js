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
var AdminCustomersChromePrintersListPrinterModelsPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersListPrinterModelsPathParams, _super);
    function AdminCustomersChromePrintersListPrinterModelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsPathParams.prototype, "parent", void 0);
    return AdminCustomersChromePrintersListPrinterModelsPathParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersListPrinterModelsPathParams };
var AdminCustomersChromePrintersListPrinterModelsQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersListPrinterModelsQueryParams, _super);
    function AdminCustomersChromePrintersListPrinterModelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomersChromePrintersListPrinterModelsQueryParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersListPrinterModelsQueryParams };
var AdminCustomersChromePrintersListPrinterModelsSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersListPrinterModelsSecurityOption1, _super);
    function AdminCustomersChromePrintersListPrinterModelsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintersListPrinterModelsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintersListPrinterModelsSecurityOption1.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintersListPrinterModelsSecurityOption1;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersListPrinterModelsSecurityOption1 };
var AdminCustomersChromePrintersListPrinterModelsSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersListPrinterModelsSecurityOption2, _super);
    function AdminCustomersChromePrintersListPrinterModelsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintersListPrinterModelsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintersListPrinterModelsSecurityOption2.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintersListPrinterModelsSecurityOption2;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersListPrinterModelsSecurityOption2 };
var AdminCustomersChromePrintersListPrinterModelsSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersListPrinterModelsSecurity, _super);
    function AdminCustomersChromePrintersListPrinterModelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminCustomersChromePrintersListPrinterModelsSecurityOption1)
    ], AdminCustomersChromePrintersListPrinterModelsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminCustomersChromePrintersListPrinterModelsSecurityOption2)
    ], AdminCustomersChromePrintersListPrinterModelsSecurity.prototype, "option2", void 0);
    return AdminCustomersChromePrintersListPrinterModelsSecurity;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersListPrinterModelsSecurity };
var AdminCustomersChromePrintersListPrinterModelsRequest = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersListPrinterModelsRequest, _super);
    function AdminCustomersChromePrintersListPrinterModelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersListPrinterModelsPathParams)
    ], AdminCustomersChromePrintersListPrinterModelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersListPrinterModelsQueryParams)
    ], AdminCustomersChromePrintersListPrinterModelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersListPrinterModelsSecurity)
    ], AdminCustomersChromePrintersListPrinterModelsRequest.prototype, "security", void 0);
    return AdminCustomersChromePrintersListPrinterModelsRequest;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersListPrinterModelsRequest };
var AdminCustomersChromePrintersListPrinterModelsResponse = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersListPrinterModelsResponse, _super);
    function AdminCustomersChromePrintersListPrinterModelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersListPrinterModelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPrinterModelsResponse)
    ], AdminCustomersChromePrintersListPrinterModelsResponse.prototype, "listPrinterModelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintersListPrinterModelsResponse.prototype, "statusCode", void 0);
    return AdminCustomersChromePrintersListPrinterModelsResponse;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersListPrinterModelsResponse };
