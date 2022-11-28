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
import { ProductSummary } from "./productsummary";
import { Refinement } from "./refinement";
// ProductSearchResponse
/**
 * This type contains the specifications for the collection of products that match the search or filter criteria of a search call. A maximum of 200 product summaries is returned (the result set), fewer if you include the limit query parameter in the request.
**/
var ProductSearchResponse = /** @class */ (function (_super) {
    __extends(ProductSearchResponse, _super);
    function ProductSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ProductSearchResponse.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], ProductSearchResponse.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ProductSearchResponse.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], ProductSearchResponse.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ProductSearchResponse.prototype, "prev", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productSummaries", elemType: ProductSummary }),
        __metadata("design:type", Array)
    ], ProductSearchResponse.prototype, "productSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refinement" }),
        __metadata("design:type", Refinement)
    ], ProductSearchResponse.prototype, "refinement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProductSearchResponse.prototype, "total", void 0);
    return ProductSearchResponse;
}(SpeakeasyBase));
export { ProductSearchResponse };
