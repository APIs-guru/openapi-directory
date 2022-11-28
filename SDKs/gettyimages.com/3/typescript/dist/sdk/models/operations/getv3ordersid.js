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
var GetV3OrdersIdPathParams = /** @class */ (function (_super) {
    __extends(GetV3OrdersIdPathParams, _super);
    function GetV3OrdersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetV3OrdersIdPathParams.prototype, "id", void 0);
    return GetV3OrdersIdPathParams;
}(SpeakeasyBase));
export { GetV3OrdersIdPathParams };
var GetV3OrdersIdHeaders = /** @class */ (function (_super) {
    __extends(GetV3OrdersIdHeaders, _super);
    function GetV3OrdersIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3OrdersIdHeaders.prototype, "acceptLanguage", void 0);
    return GetV3OrdersIdHeaders;
}(SpeakeasyBase));
export { GetV3OrdersIdHeaders };
var GetV3OrdersIdRequest = /** @class */ (function (_super) {
    __extends(GetV3OrdersIdRequest, _super);
    function GetV3OrdersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3OrdersIdPathParams)
    ], GetV3OrdersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3OrdersIdHeaders)
    ], GetV3OrdersIdRequest.prototype, "headers", void 0);
    return GetV3OrdersIdRequest;
}(SpeakeasyBase));
export { GetV3OrdersIdRequest };
var GetV3OrdersIdResponse = /** @class */ (function (_super) {
    __extends(GetV3OrdersIdResponse, _super);
    function GetV3OrdersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3OrdersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderDetail)
    ], GetV3OrdersIdResponse.prototype, "orderDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3OrdersIdResponse.prototype, "statusCode", void 0);
    return GetV3OrdersIdResponse;
}(SpeakeasyBase));
export { GetV3OrdersIdResponse };
