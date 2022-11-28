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
var AdexchangebuyerMarketplacedealsListPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsListPathParams, _super);
    function AdexchangebuyerMarketplacedealsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListPathParams.prototype, "proposalId", void 0);
    return AdexchangebuyerMarketplacedealsListPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsListPathParams };
var AdexchangebuyerMarketplacedealsListQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsListQueryParams, _super);
    function AdexchangebuyerMarketplacedealsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pqlQuery" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "pqlQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerMarketplacedealsListQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsListQueryParams };
var AdexchangebuyerMarketplacedealsListSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsListSecurity, _super);
    function AdexchangebuyerMarketplacedealsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerMarketplacedealsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerMarketplacedealsListSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerMarketplacedealsListSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsListSecurity };
var AdexchangebuyerMarketplacedealsListRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsListRequest, _super);
    function AdexchangebuyerMarketplacedealsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsListPathParams)
    ], AdexchangebuyerMarketplacedealsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsListQueryParams)
    ], AdexchangebuyerMarketplacedealsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsListSecurity)
    ], AdexchangebuyerMarketplacedealsListRequest.prototype, "security", void 0);
    return AdexchangebuyerMarketplacedealsListRequest;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsListRequest };
var AdexchangebuyerMarketplacedealsListResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsListResponse, _super);
    function AdexchangebuyerMarketplacedealsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetOrderDealsResponse)
    ], AdexchangebuyerMarketplacedealsListResponse.prototype, "getOrderDealsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerMarketplacedealsListResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerMarketplacedealsListResponse;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsListResponse };
