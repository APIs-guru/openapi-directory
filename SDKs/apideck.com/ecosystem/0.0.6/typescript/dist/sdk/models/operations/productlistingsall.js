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
var ProductListingsAllPathParams = /** @class */ (function (_super) {
    __extends(ProductListingsAllPathParams, _super);
    function ProductListingsAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" }),
        __metadata("design:type", String)
    ], ProductListingsAllPathParams.prototype, "ecosystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ProductListingsAllPathParams.prototype, "id", void 0);
    return ProductListingsAllPathParams;
}(SpeakeasyBase));
export { ProductListingsAllPathParams };
var ProductListingsAllQueryParams = /** @class */ (function (_super) {
    __extends(ProductListingsAllQueryParams, _super);
    function ProductListingsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ProductListingsAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ProductListingsAllQueryParams.prototype, "limit", void 0);
    return ProductListingsAllQueryParams;
}(SpeakeasyBase));
export { ProductListingsAllQueryParams };
var ProductListingsAllRequest = /** @class */ (function (_super) {
    __extends(ProductListingsAllRequest, _super);
    function ProductListingsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductListingsAllPathParams)
    ], ProductListingsAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductListingsAllQueryParams)
    ], ProductListingsAllRequest.prototype, "queryParams", void 0);
    return ProductListingsAllRequest;
}(SpeakeasyBase));
export { ProductListingsAllRequest };
var ProductListingsAllResponse = /** @class */ (function (_super) {
    __extends(ProductListingsAllResponse, _super);
    function ProductListingsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductListingsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetListingsResponse)
    ], ProductListingsAllResponse.prototype, "getListingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductListingsAllResponse.prototype, "statusCode", void 0);
    return ProductListingsAllResponse;
}(SpeakeasyBase));
export { ProductListingsAllResponse };
