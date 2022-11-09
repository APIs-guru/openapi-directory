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
var DatatransferTransfersListQueryParams = /** @class */ (function (_super) {
    __extends(DatatransferTransfersListQueryParams, _super);
    function DatatransferTransfersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DatatransferTransfersListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=newOwnerUserId" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "newOwnerUserId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oldOwnerUserId" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "oldOwnerUserId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatatransferTransfersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatatransferTransfersListQueryParams.prototype, "uploadProtocol", void 0);
    return DatatransferTransfersListQueryParams;
}(SpeakeasyBase));
export { DatatransferTransfersListQueryParams };
var DatatransferTransfersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatatransferTransfersListSecurityOption1, _super);
    function DatatransferTransfersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatatransferTransfersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatatransferTransfersListSecurityOption1.prototype, "oauth2c", void 0);
    return DatatransferTransfersListSecurityOption1;
}(SpeakeasyBase));
export { DatatransferTransfersListSecurityOption1 };
var DatatransferTransfersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatatransferTransfersListSecurityOption2, _super);
    function DatatransferTransfersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatatransferTransfersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatatransferTransfersListSecurityOption2.prototype, "oauth2c", void 0);
    return DatatransferTransfersListSecurityOption2;
}(SpeakeasyBase));
export { DatatransferTransfersListSecurityOption2 };
var DatatransferTransfersListSecurity = /** @class */ (function (_super) {
    __extends(DatatransferTransfersListSecurity, _super);
    function DatatransferTransfersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DatatransferTransfersListSecurityOption1)
    ], DatatransferTransfersListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DatatransferTransfersListSecurityOption2)
    ], DatatransferTransfersListSecurity.prototype, "option2", void 0);
    return DatatransferTransfersListSecurity;
}(SpeakeasyBase));
export { DatatransferTransfersListSecurity };
var DatatransferTransfersListRequest = /** @class */ (function (_super) {
    __extends(DatatransferTransfersListRequest, _super);
    function DatatransferTransfersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatatransferTransfersListQueryParams)
    ], DatatransferTransfersListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatatransferTransfersListSecurity)
    ], DatatransferTransfersListRequest.prototype, "security", void 0);
    return DatatransferTransfersListRequest;
}(SpeakeasyBase));
export { DatatransferTransfersListRequest };
var DatatransferTransfersListResponse = /** @class */ (function (_super) {
    __extends(DatatransferTransfersListResponse, _super);
    function DatatransferTransfersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatatransferTransfersListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DataTransfersListResponse)
    ], DatatransferTransfersListResponse.prototype, "dataTransfersListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatatransferTransfersListResponse.prototype, "statusCode", void 0);
    return DatatransferTransfersListResponse;
}(SpeakeasyBase));
export { DatatransferTransfersListResponse };
