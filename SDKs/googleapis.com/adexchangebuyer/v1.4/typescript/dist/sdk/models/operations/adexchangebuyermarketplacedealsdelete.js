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
var AdexchangebuyerMarketplacedealsDeletePathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsDeletePathParams, _super);
    function AdexchangebuyerMarketplacedealsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeletePathParams.prototype, "proposalId", void 0);
    return AdexchangebuyerMarketplacedealsDeletePathParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsDeletePathParams };
var AdexchangebuyerMarketplacedealsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsDeleteQueryParams, _super);
    function AdexchangebuyerMarketplacedealsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerMarketplacedealsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeleteQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerMarketplacedealsDeleteQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsDeleteQueryParams };
var AdexchangebuyerMarketplacedealsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsDeleteSecurity, _super);
    function AdexchangebuyerMarketplacedealsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerMarketplacedealsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerMarketplacedealsDeleteSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerMarketplacedealsDeleteSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsDeleteSecurity };
var AdexchangebuyerMarketplacedealsDeleteRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsDeleteRequest, _super);
    function AdexchangebuyerMarketplacedealsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsDeletePathParams)
    ], AdexchangebuyerMarketplacedealsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsDeleteQueryParams)
    ], AdexchangebuyerMarketplacedealsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteOrderDealsRequest)
    ], AdexchangebuyerMarketplacedealsDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsDeleteSecurity)
    ], AdexchangebuyerMarketplacedealsDeleteRequest.prototype, "security", void 0);
    return AdexchangebuyerMarketplacedealsDeleteRequest;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsDeleteRequest };
var AdexchangebuyerMarketplacedealsDeleteResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsDeleteResponse, _super);
    function AdexchangebuyerMarketplacedealsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteOrderDealsResponse)
    ], AdexchangebuyerMarketplacedealsDeleteResponse.prototype, "deleteOrderDealsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerMarketplacedealsDeleteResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerMarketplacedealsDeleteResponse;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsDeleteResponse };
