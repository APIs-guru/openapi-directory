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
var AdexchangebuyerMarketplacenotesInsertPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesInsertPathParams, _super);
    function AdexchangebuyerMarketplacenotesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertPathParams.prototype, "proposalId", void 0);
    return AdexchangebuyerMarketplacenotesInsertPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesInsertPathParams };
var AdexchangebuyerMarketplacenotesInsertQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesInsertQueryParams, _super);
    function AdexchangebuyerMarketplacenotesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerMarketplacenotesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerMarketplacenotesInsertQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesInsertQueryParams };
var AdexchangebuyerMarketplacenotesInsertSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesInsertSecurity, _super);
    function AdexchangebuyerMarketplacenotesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerMarketplacenotesInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerMarketplacenotesInsertSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerMarketplacenotesInsertSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesInsertSecurity };
var AdexchangebuyerMarketplacenotesInsertRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesInsertRequest, _super);
    function AdexchangebuyerMarketplacenotesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacenotesInsertPathParams)
    ], AdexchangebuyerMarketplacenotesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacenotesInsertQueryParams)
    ], AdexchangebuyerMarketplacenotesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddOrderNotesRequest)
    ], AdexchangebuyerMarketplacenotesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerMarketplacenotesInsertSecurity)
    ], AdexchangebuyerMarketplacenotesInsertRequest.prototype, "security", void 0);
    return AdexchangebuyerMarketplacenotesInsertRequest;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesInsertRequest };
var AdexchangebuyerMarketplacenotesInsertResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerMarketplacenotesInsertResponse, _super);
    function AdexchangebuyerMarketplacenotesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AddOrderNotesResponse)
    ], AdexchangebuyerMarketplacenotesInsertResponse.prototype, "addOrderNotesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerMarketplacenotesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerMarketplacenotesInsertResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerMarketplacenotesInsertResponse;
}(SpeakeasyBase));
export { AdexchangebuyerMarketplacenotesInsertResponse };
