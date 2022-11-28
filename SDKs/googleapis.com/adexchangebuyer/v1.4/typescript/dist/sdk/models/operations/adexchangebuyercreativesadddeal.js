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
var AdexchangebuyerCreativesAddDealPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesAddDealPathParams, _super);
    function AdexchangebuyerCreativesAddDealPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesAddDealPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buyerCreativeId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealPathParams.prototype, "buyerCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dealId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealPathParams.prototype, "dealId", void 0);
    return AdexchangebuyerCreativesAddDealPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesAddDealPathParams };
var AdexchangebuyerCreativesAddDealQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesAddDealQueryParams, _super);
    function AdexchangebuyerCreativesAddDealQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerCreativesAddDealQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerCreativesAddDealQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesAddDealQueryParams };
var AdexchangebuyerCreativesAddDealSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesAddDealSecurity, _super);
    function AdexchangebuyerCreativesAddDealSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerCreativesAddDealSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerCreativesAddDealSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerCreativesAddDealSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesAddDealSecurity };
var AdexchangebuyerCreativesAddDealRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesAddDealRequest, _super);
    function AdexchangebuyerCreativesAddDealRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesAddDealPathParams)
    ], AdexchangebuyerCreativesAddDealRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesAddDealQueryParams)
    ], AdexchangebuyerCreativesAddDealRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesAddDealSecurity)
    ], AdexchangebuyerCreativesAddDealRequest.prototype, "security", void 0);
    return AdexchangebuyerCreativesAddDealRequest;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesAddDealRequest };
var AdexchangebuyerCreativesAddDealResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesAddDealResponse, _super);
    function AdexchangebuyerCreativesAddDealResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesAddDealResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesAddDealResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerCreativesAddDealResponse;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesAddDealResponse };
