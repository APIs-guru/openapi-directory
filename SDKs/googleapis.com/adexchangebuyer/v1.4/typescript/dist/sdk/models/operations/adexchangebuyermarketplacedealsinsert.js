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
var AdexchangebuyerMarketplacedealsInsertPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsInsertPathParams, _super);
    function AdexchangebuyerMarketplacedealsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertPathParams.prototype, "proposalId", void 0);
    return AdexchangebuyerMarketplacedealsInsertPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsInsertPathParams };
var AdexchangebuyerMarketplacedealsInsertQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsInsertQueryParams, _super);
    function AdexchangebuyerMarketplacedealsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerMarketplacedealsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerMarketplacedealsInsertQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsInsertQueryParams };
var AdexchangebuyerMarketplacedealsInsertSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsInsertSecurity, _super);
    function AdexchangebuyerMarketplacedealsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerMarketplacedealsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerMarketplacedealsInsertSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerMarketplacedealsInsertSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsInsertSecurity };
var AdexchangebuyerMarketplacedealsInsertRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsInsertRequest, _super);
    function AdexchangebuyerMarketplacedealsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsInsertPathParams)
    ], AdexchangebuyerMarketplacedealsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsInsertQueryParams)
    ], AdexchangebuyerMarketplacedealsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddOrderDealsRequest)
    ], AdexchangebuyerMarketplacedealsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacedealsInsertSecurity)
    ], AdexchangebuyerMarketplacedealsInsertRequest.prototype, "security", void 0);
    return AdexchangebuyerMarketplacedealsInsertRequest;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsInsertRequest };
var AdexchangebuyerMarketplacedealsInsertResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacedealsInsertResponse, _super);
    function AdexchangebuyerMarketplacedealsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AddOrderDealsResponse)
    ], AdexchangebuyerMarketplacedealsInsertResponse.prototype, "addOrderDealsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacedealsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerMarketplacedealsInsertResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerMarketplacedealsInsertResponse;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacedealsInsertResponse };
