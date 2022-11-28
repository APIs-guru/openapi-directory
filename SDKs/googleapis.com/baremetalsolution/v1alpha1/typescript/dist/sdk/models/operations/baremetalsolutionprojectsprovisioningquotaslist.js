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
var BaremetalsolutionProjectsProvisioningQuotasListPathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsProvisioningQuotasListPathParams, _super);
    function BaremetalsolutionProjectsProvisioningQuotasListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListPathParams.prototype, "parent", void 0);
    return BaremetalsolutionProjectsProvisioningQuotasListPathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsProvisioningQuotasListPathParams };
var BaremetalsolutionProjectsProvisioningQuotasListQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsProvisioningQuotasListQueryParams, _super);
    function BaremetalsolutionProjectsProvisioningQuotasListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsProvisioningQuotasListQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsProvisioningQuotasListQueryParams };
var BaremetalsolutionProjectsProvisioningQuotasListSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsProvisioningQuotasListSecurity, _super);
    function BaremetalsolutionProjectsProvisioningQuotasListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsProvisioningQuotasListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsProvisioningQuotasListSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsProvisioningQuotasListSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsProvisioningQuotasListSecurity };
var BaremetalsolutionProjectsProvisioningQuotasListRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsProvisioningQuotasListRequest, _super);
    function BaremetalsolutionProjectsProvisioningQuotasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsProvisioningQuotasListPathParams)
    ], BaremetalsolutionProjectsProvisioningQuotasListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsProvisioningQuotasListQueryParams)
    ], BaremetalsolutionProjectsProvisioningQuotasListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsProvisioningQuotasListSecurity)
    ], BaremetalsolutionProjectsProvisioningQuotasListRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsProvisioningQuotasListRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsProvisioningQuotasListRequest };
var BaremetalsolutionProjectsProvisioningQuotasListResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsProvisioningQuotasListResponse, _super);
    function BaremetalsolutionProjectsProvisioningQuotasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsProvisioningQuotasListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProvisioningQuotasResponse)
    ], BaremetalsolutionProjectsProvisioningQuotasListResponse.prototype, "listProvisioningQuotasResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsProvisioningQuotasListResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsProvisioningQuotasListResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsProvisioningQuotasListResponse };
