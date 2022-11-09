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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var ListMasterbrandsMixinEnum;
(function (ListMasterbrandsMixinEnum) {
    ListMasterbrandsMixinEnum["Images"] = "images";
})(ListMasterbrandsMixinEnum || (ListMasterbrandsMixinEnum = {}));
export var ListMasterbrandsSortEnum;
(function (ListMasterbrandsSortEnum) {
    ListMasterbrandsSortEnum["Mid"] = "mid";
})(ListMasterbrandsSortEnum || (ListMasterbrandsSortEnum = {}));
export var ListMasterbrandsSortDirectionEnum;
(function (ListMasterbrandsSortDirectionEnum) {
    ListMasterbrandsSortDirectionEnum["Ascending"] = "ascending";
})(ListMasterbrandsSortDirectionEnum || (ListMasterbrandsSortDirectionEnum = {}));
var ListMasterbrandsQueryParams = /** @class */ (function (_super) {
    __extends(ListMasterbrandsQueryParams, _super);
    function ListMasterbrandsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mid" }),
        __metadata("design:type", Array)
    ], ListMasterbrandsQueryParams.prototype, "mid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], ListMasterbrandsQueryParams.prototype, "mixin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListMasterbrandsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListMasterbrandsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListMasterbrandsQueryParams.prototype, "partnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListMasterbrandsQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListMasterbrandsQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListMasterbrandsQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListMasterbrandsQueryParams.prototype, "sortDirection", void 0);
    return ListMasterbrandsQueryParams;
}(SpeakeasyBase));
export { ListMasterbrandsQueryParams };
var ListMasterbrandsRequest = /** @class */ (function (_super) {
    __extends(ListMasterbrandsRequest, _super);
    function ListMasterbrandsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListMasterbrandsQueryParams)
    ], ListMasterbrandsRequest.prototype, "queryParams", void 0);
    return ListMasterbrandsRequest;
}(SpeakeasyBase));
export { ListMasterbrandsRequest };
var ListMasterbrandsResponse = /** @class */ (function (_super) {
    __extends(ListMasterbrandsResponse, _super);
    function ListMasterbrandsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListMasterbrandsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMasterbrandsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListMasterbrandsResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListMasterbrandsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMasterbrandsResponse.prototype, "nitro", void 0);
    return ListMasterbrandsResponse;
}(SpeakeasyBase));
export { ListMasterbrandsResponse };
