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
var CategoryListingsAllPathParams = /** @class */ (function (_super) {
    __extends(CategoryListingsAllPathParams, _super);
    function CategoryListingsAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" }),
        __metadata("design:type", String)
    ], CategoryListingsAllPathParams.prototype, "ecosystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CategoryListingsAllPathParams.prototype, "id", void 0);
    return CategoryListingsAllPathParams;
}(SpeakeasyBase));
export { CategoryListingsAllPathParams };
var CategoryListingsAllQueryParams = /** @class */ (function (_super) {
    __extends(CategoryListingsAllQueryParams, _super);
    function CategoryListingsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], CategoryListingsAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CategoryListingsAllQueryParams.prototype, "limit", void 0);
    return CategoryListingsAllQueryParams;
}(SpeakeasyBase));
export { CategoryListingsAllQueryParams };
var CategoryListingsAllRequest = /** @class */ (function (_super) {
    __extends(CategoryListingsAllRequest, _super);
    function CategoryListingsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CategoryListingsAllPathParams)
    ], CategoryListingsAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CategoryListingsAllQueryParams)
    ], CategoryListingsAllRequest.prototype, "queryParams", void 0);
    return CategoryListingsAllRequest;
}(SpeakeasyBase));
export { CategoryListingsAllRequest };
var CategoryListingsAllResponse = /** @class */ (function (_super) {
    __extends(CategoryListingsAllResponse, _super);
    function CategoryListingsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CategoryListingsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetListingsResponse)
    ], CategoryListingsAllResponse.prototype, "getListingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CategoryListingsAllResponse.prototype, "statusCode", void 0);
    return CategoryListingsAllResponse;
}(SpeakeasyBase));
export { CategoryListingsAllResponse };
