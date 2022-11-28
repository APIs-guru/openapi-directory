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
var GetCharityOrgPathParams = /** @class */ (function (_super) {
    __extends(GetCharityOrgPathParams, _super);
    function GetCharityOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=charity_org_id" }),
        __metadata("design:type", String)
    ], GetCharityOrgPathParams.prototype, "charityOrgId", void 0);
    return GetCharityOrgPathParams;
}(SpeakeasyBase));
export { GetCharityOrgPathParams };
var GetCharityOrgHeaders = /** @class */ (function (_super) {
    __extends(GetCharityOrgHeaders, _super);
    function GetCharityOrgHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], GetCharityOrgHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return GetCharityOrgHeaders;
}(SpeakeasyBase));
export { GetCharityOrgHeaders };
var GetCharityOrgSecurity = /** @class */ (function (_super) {
    __extends(GetCharityOrgSecurity, _super);
    function GetCharityOrgSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetCharityOrgSecurity.prototype, "apiAuth", void 0);
    return GetCharityOrgSecurity;
}(SpeakeasyBase));
export { GetCharityOrgSecurity };
var GetCharityOrgRequest = /** @class */ (function (_super) {
    __extends(GetCharityOrgRequest, _super);
    function GetCharityOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCharityOrgPathParams)
    ], GetCharityOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCharityOrgHeaders)
    ], GetCharityOrgRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCharityOrgSecurity)
    ], GetCharityOrgRequest.prototype, "security", void 0);
    return GetCharityOrgRequest;
}(SpeakeasyBase));
export { GetCharityOrgRequest };
var GetCharityOrgResponse = /** @class */ (function (_super) {
    __extends(GetCharityOrgResponse, _super);
    function GetCharityOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CharityOrg)
    ], GetCharityOrgResponse.prototype, "charityOrg", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCharityOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCharityOrgResponse.prototype, "statusCode", void 0);
    return GetCharityOrgResponse;
}(SpeakeasyBase));
export { GetCharityOrgResponse };
