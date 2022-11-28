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
var GetCharityOrgsQueryParams = /** @class */ (function (_super) {
    __extends(GetCharityOrgsQueryParams, _super);
    function GetCharityOrgsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetCharityOrgsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetCharityOrgsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetCharityOrgsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=registration_ids" }),
        __metadata("design:type", String)
    ], GetCharityOrgsQueryParams.prototype, "registrationIds", void 0);
    return GetCharityOrgsQueryParams;
}(SpeakeasyBase));
export { GetCharityOrgsQueryParams };
var GetCharityOrgsHeaders = /** @class */ (function (_super) {
    __extends(GetCharityOrgsHeaders, _super);
    function GetCharityOrgsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], GetCharityOrgsHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return GetCharityOrgsHeaders;
}(SpeakeasyBase));
export { GetCharityOrgsHeaders };
var GetCharityOrgsSecurity = /** @class */ (function (_super) {
    __extends(GetCharityOrgsSecurity, _super);
    function GetCharityOrgsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetCharityOrgsSecurity.prototype, "apiAuth", void 0);
    return GetCharityOrgsSecurity;
}(SpeakeasyBase));
export { GetCharityOrgsSecurity };
var GetCharityOrgsRequest = /** @class */ (function (_super) {
    __extends(GetCharityOrgsRequest, _super);
    function GetCharityOrgsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCharityOrgsQueryParams)
    ], GetCharityOrgsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCharityOrgsHeaders)
    ], GetCharityOrgsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCharityOrgsSecurity)
    ], GetCharityOrgsRequest.prototype, "security", void 0);
    return GetCharityOrgsRequest;
}(SpeakeasyBase));
export { GetCharityOrgsRequest };
var GetCharityOrgsResponse = /** @class */ (function (_super) {
    __extends(GetCharityOrgsResponse, _super);
    function GetCharityOrgsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CharitySearchResponse)
    ], GetCharityOrgsResponse.prototype, "charitySearchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCharityOrgsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCharityOrgsResponse.prototype, "statusCode", void 0);
    return GetCharityOrgsResponse;
}(SpeakeasyBase));
export { GetCharityOrgsResponse };
