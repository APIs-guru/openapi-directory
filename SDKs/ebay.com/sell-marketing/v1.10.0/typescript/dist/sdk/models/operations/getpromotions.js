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
var GetPromotionsQueryParams = /** @class */ (function (_super) {
    __extends(GetPromotionsQueryParams, _super);
    function GetPromotionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetPromotionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" }),
        __metadata("design:type", String)
    ], GetPromotionsQueryParams.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetPromotionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promotion_status" }),
        __metadata("design:type", String)
    ], GetPromotionsQueryParams.prototype, "promotionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promotion_type" }),
        __metadata("design:type", String)
    ], GetPromotionsQueryParams.prototype, "promotionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetPromotionsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPromotionsQueryParams.prototype, "sort", void 0);
    return GetPromotionsQueryParams;
}(SpeakeasyBase));
export { GetPromotionsQueryParams };
var GetPromotionsSecurity = /** @class */ (function (_super) {
    __extends(GetPromotionsSecurity, _super);
    function GetPromotionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetPromotionsSecurity.prototype, "apiAuth", void 0);
    return GetPromotionsSecurity;
}(SpeakeasyBase));
export { GetPromotionsSecurity };
var GetPromotionsRequest = /** @class */ (function (_super) {
    __extends(GetPromotionsRequest, _super);
    function GetPromotionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPromotionsQueryParams)
    ], GetPromotionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPromotionsSecurity)
    ], GetPromotionsRequest.prototype, "security", void 0);
    return GetPromotionsRequest;
}(SpeakeasyBase));
export { GetPromotionsRequest };
var GetPromotionsResponse = /** @class */ (function (_super) {
    __extends(GetPromotionsResponse, _super);
    function GetPromotionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPromotionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PromotionsPagedCollection)
    ], GetPromotionsResponse.prototype, "promotionsPagedCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPromotionsResponse.prototype, "statusCode", void 0);
    return GetPromotionsResponse;
}(SpeakeasyBase));
export { GetPromotionsResponse };
