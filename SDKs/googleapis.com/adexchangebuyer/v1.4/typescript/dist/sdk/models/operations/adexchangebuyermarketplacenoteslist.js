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
var AdexchangebuyerMarketplacenotesListPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesListPathParams, _super);
    function AdexchangebuyerMarketplacenotesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListPathParams.prototype, "proposalId", void 0);
    return AdexchangebuyerMarketplacenotesListPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesListPathParams };
var AdexchangebuyerMarketplacenotesListQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesListQueryParams, _super);
    function AdexchangebuyerMarketplacenotesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pqlQuery" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "pqlQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerMarketplacenotesListQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesListQueryParams };
var AdexchangebuyerMarketplacenotesListSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesListSecurity, _super);
    function AdexchangebuyerMarketplacenotesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerMarketplacenotesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerMarketplacenotesListSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerMarketplacenotesListSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesListSecurity };
var AdexchangebuyerMarketplacenotesListRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesListRequest, _super);
    function AdexchangebuyerMarketplacenotesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacenotesListPathParams)
    ], AdexchangebuyerMarketplacenotesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacenotesListQueryParams)
    ], AdexchangebuyerMarketplacenotesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacenotesListSecurity)
    ], AdexchangebuyerMarketplacenotesListRequest.prototype, "security", void 0);
    return AdexchangebuyerMarketplacenotesListRequest;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesListRequest };
var AdexchangebuyerMarketplacenotesListResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesListResponse, _super);
    function AdexchangebuyerMarketplacenotesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetOrderNotesResponse)
    ], AdexchangebuyerMarketplacenotesListResponse.prototype, "getOrderNotesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerMarketplacenotesListResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerMarketplacenotesListResponse;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesListResponse };
