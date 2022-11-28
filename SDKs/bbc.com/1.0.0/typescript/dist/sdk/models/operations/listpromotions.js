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
export var ListPromotionsMixinEnum;
(function (ListPromotionsMixinEnum) {
    ListPromotionsMixinEnum["RelatedLinks"] = "related_links";
})(ListPromotionsMixinEnum || (ListPromotionsMixinEnum = {}));
export var ListPromotionsStatusEnum;
(function (ListPromotionsStatusEnum) {
    ListPromotionsStatusEnum["Current"] = "current";
})(ListPromotionsStatusEnum || (ListPromotionsStatusEnum = {}));
var ListPromotionsQueryParams = /** @class */ (function (_super) {
    __extends(ListPromotionsQueryParams, _super);
    function ListPromotionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=context" }),
        __metadata("design:type", String)
    ], ListPromotionsQueryParams.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], ListPromotionsQueryParams.prototype, "mixin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListPromotionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListPromotionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListPromotionsQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListPromotionsQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListPromotionsQueryParams.prototype, "pid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promoted_by" }),
        __metadata("design:type", Array)
    ], ListPromotionsQueryParams.prototype, "promotedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promoted_for" }),
        __metadata("design:type", Array)
    ], ListPromotionsQueryParams.prototype, "promotedFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListPromotionsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Array)
    ], ListPromotionsQueryParams.prototype, "status", void 0);
    return ListPromotionsQueryParams;
}(SpeakeasyBase));
export { ListPromotionsQueryParams };
var ListPromotionsRequest = /** @class */ (function (_super) {
    __extends(ListPromotionsRequest, _super);
    function ListPromotionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPromotionsQueryParams)
    ], ListPromotionsRequest.prototype, "queryParams", void 0);
    return ListPromotionsRequest;
}(SpeakeasyBase));
export { ListPromotionsRequest };
var ListPromotionsResponse = /** @class */ (function (_super) {
    __extends(ListPromotionsResponse, _super);
    function ListPromotionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ListPromotionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPromotionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListPromotionsResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPromotionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPromotionsResponse.prototype, "nitro", void 0);
    return ListPromotionsResponse;
}(SpeakeasyBase));
export { ListPromotionsResponse };
