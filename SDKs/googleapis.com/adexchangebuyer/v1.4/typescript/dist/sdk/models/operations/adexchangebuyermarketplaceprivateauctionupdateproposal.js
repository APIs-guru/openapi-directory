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
var AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams, _super);
    function AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=privateAuctionId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams.prototype, "privateAuctionId", void 0);
    return AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams };
var AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams, _super);
    function AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams };
var AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity, _super);
    function AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity };
var AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest, _super);
    function AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePrivateAuctionProposalRequest)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest.prototype, "security", void 0);
    return AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest };
var AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse, _super);
    function AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse };
