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
var GetV1SuppliersIdPathParams = /** @class */ (function (_super) {
    __extends(GetV1SuppliersIdPathParams, _super);
    function GetV1SuppliersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetV1SuppliersIdPathParams.prototype, "id", void 0);
    return GetV1SuppliersIdPathParams;
}(SpeakeasyBase));
export { GetV1SuppliersIdPathParams };
var GetV1SuppliersIdQueryParams = /** @class */ (function (_super) {
    __extends(GetV1SuppliersIdQueryParams, _super);
    function GetV1SuppliersIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=needBalance" }),
        __metadata("design:type", Boolean)
    ], GetV1SuppliersIdQueryParams.prototype, "needBalance", void 0);
    return GetV1SuppliersIdQueryParams;
}(SpeakeasyBase));
export { GetV1SuppliersIdQueryParams };
var GetV1SuppliersIdRequest = /** @class */ (function (_super) {
    __extends(GetV1SuppliersIdRequest, _super);
    function GetV1SuppliersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1SuppliersIdPathParams)
    ], GetV1SuppliersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1SuppliersIdQueryParams)
    ], GetV1SuppliersIdRequest.prototype, "queryParams", void 0);
    return GetV1SuppliersIdRequest;
}(SpeakeasyBase));
export { GetV1SuppliersIdRequest };
var GetV1SuppliersIdResponse = /** @class */ (function (_super) {
    __extends(GetV1SuppliersIdResponse, _super);
    function GetV1SuppliersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1SuppliersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV1SuppliersIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupplierDto)
    ], GetV1SuppliersIdResponse.prototype, "supplierDto", void 0);
    return GetV1SuppliersIdResponse;
}(SpeakeasyBase));
export { GetV1SuppliersIdResponse };
