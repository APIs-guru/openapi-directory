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
var GetInventoryQueryParams = /** @class */ (function (_super) {
    __extends(GetInventoryQueryParams, _super);
    function GetInventoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=externalSkuNames" }),
        __metadata("design:type", Array)
    ], GetInventoryQueryParams.prototype, "externalSkuNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetInventoryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=merchantIds" }),
        __metadata("design:type", Array)
    ], GetInventoryQueryParams.prototype, "merchantIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetInventoryQueryParams.prototype, "page", void 0);
    return GetInventoryQueryParams;
}(SpeakeasyBase));
export { GetInventoryQueryParams };
var GetInventorySecurity = /** @class */ (function (_super) {
    __extends(GetInventorySecurity, _super);
    function GetInventorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], GetInventorySecurity.prototype, "fdcAuth", void 0);
    return GetInventorySecurity;
}(SpeakeasyBase));
export { GetInventorySecurity };
// GetInventoryItemInventoryArrayV2ItemInventoryV2Item
/**
 * Item this inventory data is based on
**/
var GetInventoryItemInventoryArrayV2ItemInventoryV2Item = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2ItemInventoryV2Item, _super);
    function GetInventoryItemInventoryArrayV2ItemInventoryV2Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2Item.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skuReference" }),
        __metadata("design:type", String)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2Item.prototype, "skuReference", void 0);
    return GetInventoryItemInventoryArrayV2ItemInventoryV2Item;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2ItemInventoryV2Item };
// GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant
/**
 * Merchant that owns this item
**/
var GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant, _super);
    function GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant.prototype, "name", void 0);
    return GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant };
var GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal, _super);
    function GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableToPromise" }),
        __metadata("design:type", Number)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal.prototype, "availableToPromise", void 0);
    return GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal };
var GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity, _super);
    function GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity.prototype, "total", void 0);
    return GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity };
var GetInventoryItemInventoryArrayV2ItemInventoryV2 = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2ItemInventoryV2, _super);
    function GetInventoryItemInventoryArrayV2ItemInventoryV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", GetInventoryItemInventoryArrayV2ItemInventoryV2Item)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant" }),
        __metadata("design:type", GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2.prototype, "merchant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity)
    ], GetInventoryItemInventoryArrayV2ItemInventoryV2.prototype, "quantity", void 0);
    return GetInventoryItemInventoryArrayV2ItemInventoryV2;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2ItemInventoryV2 };
var GetInventoryItemInventoryArrayV2MetaPaginationV2 = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2MetaPaginationV2, _super);
    function GetInventoryItemInventoryArrayV2MetaPaginationV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetInventoryItemInventoryArrayV2MetaPaginationV2.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPage" }),
        __metadata("design:type", Number)
    ], GetInventoryItemInventoryArrayV2MetaPaginationV2.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetInventoryItemInventoryArrayV2MetaPaginationV2.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPages" }),
        __metadata("design:type", Number)
    ], GetInventoryItemInventoryArrayV2MetaPaginationV2.prototype, "totalPages", void 0);
    return GetInventoryItemInventoryArrayV2MetaPaginationV2;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2MetaPaginationV2 };
var GetInventoryItemInventoryArrayV2Meta = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2Meta, _super);
    function GetInventoryItemInventoryArrayV2Meta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetInventoryItemInventoryArrayV2MetaPaginationV2)
    ], GetInventoryItemInventoryArrayV2Meta.prototype, "pagination", void 0);
    return GetInventoryItemInventoryArrayV2Meta;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2Meta };
var GetInventoryItemInventoryArrayV2 = /** @class */ (function (_super) {
    __extends(GetInventoryItemInventoryArrayV2, _super);
    function GetInventoryItemInventoryArrayV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetInventoryItemInventoryArrayV2ItemInventoryV2 }),
        __metadata("design:type", Array)
    ], GetInventoryItemInventoryArrayV2.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetInventoryItemInventoryArrayV2Meta)
    ], GetInventoryItemInventoryArrayV2.prototype, "meta", void 0);
    return GetInventoryItemInventoryArrayV2;
}(SpeakeasyBase));
export { GetInventoryItemInventoryArrayV2 };
var GetInventoryRequest = /** @class */ (function (_super) {
    __extends(GetInventoryRequest, _super);
    function GetInventoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInventoryQueryParams)
    ], GetInventoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInventorySecurity)
    ], GetInventoryRequest.prototype, "security", void 0);
    return GetInventoryRequest;
}(SpeakeasyBase));
export { GetInventoryRequest };
var GetInventoryResponse = /** @class */ (function (_super) {
    __extends(GetInventoryResponse, _super);
    function GetInventoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInventoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInventoryItemInventoryArrayV2)
    ], GetInventoryResponse.prototype, "itemInventoryArrayV2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInventoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneordersGetResponses404ContentApplication1jsonSchema)
    ], GetInventoryResponse.prototype, "oneordersGetResponses404ContentApplication1jsonSchema", void 0);
    return GetInventoryResponse;
}(SpeakeasyBase));
export { GetInventoryResponse };
