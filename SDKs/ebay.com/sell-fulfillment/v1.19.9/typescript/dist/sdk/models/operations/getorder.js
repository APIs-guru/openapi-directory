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
var GetOrderPathParams = /** @class */ (function (_super) {
    __extends(GetOrderPathParams, _super);
    function GetOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], GetOrderPathParams.prototype, "orderId", void 0);
    return GetOrderPathParams;
}(SpeakeasyBase));
export { GetOrderPathParams };
var GetOrderQueryParams = /** @class */ (function (_super) {
    __extends(GetOrderQueryParams, _super);
    function GetOrderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldGroups" }),
        __metadata("design:type", String)
    ], GetOrderQueryParams.prototype, "fieldGroups", void 0);
    return GetOrderQueryParams;
}(SpeakeasyBase));
export { GetOrderQueryParams };
var GetOrderSecurity = /** @class */ (function (_super) {
    __extends(GetOrderSecurity, _super);
    function GetOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetOrderSecurity.prototype, "apiAuth", void 0);
    return GetOrderSecurity;
}(SpeakeasyBase));
export { GetOrderSecurity };
var GetOrderRequest = /** @class */ (function (_super) {
    __extends(GetOrderRequest, _super);
    function GetOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrderPathParams)
    ], GetOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrderQueryParams)
    ], GetOrderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrderSecurity)
    ], GetOrderRequest.prototype, "security", void 0);
    return GetOrderRequest;
}(SpeakeasyBase));
export { GetOrderRequest };
var GetOrderResponse = /** @class */ (function (_super) {
    __extends(GetOrderResponse, _super);
    function GetOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Order)
    ], GetOrderResponse.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrderResponse.prototype, "statusCode", void 0);
    return GetOrderResponse;
}(SpeakeasyBase));
export { GetOrderResponse };
