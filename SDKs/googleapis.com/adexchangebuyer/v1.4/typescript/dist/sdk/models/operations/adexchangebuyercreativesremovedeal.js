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
var AdexchangebuyerCreativesRemoveDealPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesRemoveDealPathParams, _super);
    function AdexchangebuyerCreativesRemoveDealPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesRemoveDealPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buyerCreativeId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealPathParams.prototype, "buyerCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dealId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealPathParams.prototype, "dealId", void 0);
    return AdexchangebuyerCreativesRemoveDealPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesRemoveDealPathParams };
var AdexchangebuyerCreativesRemoveDealQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesRemoveDealQueryParams, _super);
    function AdexchangebuyerCreativesRemoveDealQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerCreativesRemoveDealQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerCreativesRemoveDealQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesRemoveDealQueryParams };
var AdexchangebuyerCreativesRemoveDealSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesRemoveDealSecurity, _super);
    function AdexchangebuyerCreativesRemoveDealSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerCreativesRemoveDealSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerCreativesRemoveDealSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerCreativesRemoveDealSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesRemoveDealSecurity };
var AdexchangebuyerCreativesRemoveDealRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesRemoveDealRequest, _super);
    function AdexchangebuyerCreativesRemoveDealRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesRemoveDealPathParams)
    ], AdexchangebuyerCreativesRemoveDealRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesRemoveDealQueryParams)
    ], AdexchangebuyerCreativesRemoveDealRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerCreativesRemoveDealSecurity)
    ], AdexchangebuyerCreativesRemoveDealRequest.prototype, "security", void 0);
    return AdexchangebuyerCreativesRemoveDealRequest;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesRemoveDealRequest };
var AdexchangebuyerCreativesRemoveDealResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerCreativesRemoveDealResponse, _super);
    function AdexchangebuyerCreativesRemoveDealResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerCreativesRemoveDealResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerCreativesRemoveDealResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerCreativesRemoveDealResponse;
}(SpeakeasyBase));
export { AdexchangebuyerCreativesRemoveDealResponse };
