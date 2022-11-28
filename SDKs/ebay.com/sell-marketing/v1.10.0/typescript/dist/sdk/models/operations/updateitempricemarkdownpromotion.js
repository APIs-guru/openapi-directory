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
var UpdateItemPriceMarkdownPromotionPathParams = /** @class */ (function (_super) {
    __extends(UpdateItemPriceMarkdownPromotionPathParams, _super);
    function UpdateItemPriceMarkdownPromotionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" }),
        __metadata("design:type", String)
    ], UpdateItemPriceMarkdownPromotionPathParams.prototype, "promotionId", void 0);
    return UpdateItemPriceMarkdownPromotionPathParams;
}(SpeakeasyBase));
export { UpdateItemPriceMarkdownPromotionPathParams };
var UpdateItemPriceMarkdownPromotionSecurity = /** @class */ (function (_super) {
    __extends(UpdateItemPriceMarkdownPromotionSecurity, _super);
    function UpdateItemPriceMarkdownPromotionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], UpdateItemPriceMarkdownPromotionSecurity.prototype, "apiAuth", void 0);
    return UpdateItemPriceMarkdownPromotionSecurity;
}(SpeakeasyBase));
export { UpdateItemPriceMarkdownPromotionSecurity };
var UpdateItemPriceMarkdownPromotionRequest = /** @class */ (function (_super) {
    __extends(UpdateItemPriceMarkdownPromotionRequest, _super);
    function UpdateItemPriceMarkdownPromotionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateItemPriceMarkdownPromotionPathParams)
    ], UpdateItemPriceMarkdownPromotionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItemPriceMarkdown)
    ], UpdateItemPriceMarkdownPromotionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateItemPriceMarkdownPromotionSecurity)
    ], UpdateItemPriceMarkdownPromotionRequest.prototype, "security", void 0);
    return UpdateItemPriceMarkdownPromotionRequest;
}(SpeakeasyBase));
export { UpdateItemPriceMarkdownPromotionRequest };
var UpdateItemPriceMarkdownPromotionResponse = /** @class */ (function (_super) {
    __extends(UpdateItemPriceMarkdownPromotionResponse, _super);
    function UpdateItemPriceMarkdownPromotionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateItemPriceMarkdownPromotionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateItemPriceMarkdownPromotionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateItemPriceMarkdownPromotionResponse.prototype, "updateItemPriceMarkdownPromotion200ApplicationJsonObject", void 0);
    return UpdateItemPriceMarkdownPromotionResponse;
}(SpeakeasyBase));
export { UpdateItemPriceMarkdownPromotionResponse };
