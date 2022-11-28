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
var CashPaymentsDeletePathParams = /** @class */ (function (_super) {
    __extends(CashPaymentsDeletePathParams, _super);
    function CashPaymentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], CashPaymentsDeletePathParams.prototype, "id", void 0);
    return CashPaymentsDeletePathParams;
}(SpeakeasyBase));
export { CashPaymentsDeletePathParams };
var CashPaymentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CashPaymentsDeleteQueryParams, _super);
    function CashPaymentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], CashPaymentsDeleteQueryParams.prototype, "timestamp", void 0);
    return CashPaymentsDeleteQueryParams;
}(SpeakeasyBase));
export { CashPaymentsDeleteQueryParams };
var CashPaymentsDeleteRequest = /** @class */ (function (_super) {
    __extends(CashPaymentsDeleteRequest, _super);
    function CashPaymentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CashPaymentsDeletePathParams)
    ], CashPaymentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CashPaymentsDeleteQueryParams)
    ], CashPaymentsDeleteRequest.prototype, "queryParams", void 0);
    return CashPaymentsDeleteRequest;
}(SpeakeasyBase));
export { CashPaymentsDeleteRequest };
var CashPaymentsDeleteResponse = /** @class */ (function (_super) {
    __extends(CashPaymentsDeleteResponse, _super);
    function CashPaymentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CashPaymentsDeleteResponse.prototype, "cashPaymentsDelete200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CashPaymentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CashPaymentsDeleteResponse.prototype, "statusCode", void 0);
    return CashPaymentsDeleteResponse;
}(SpeakeasyBase));
export { CashPaymentsDeleteResponse };
