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
var GetPaymentMethodsQueryParams = /** @class */ (function (_super) {
    __extends(GetPaymentMethodsQueryParams, _super);
    function GetPaymentMethodsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetPaymentMethodsQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetPaymentMethodsQueryParams.prototype, "lang", void 0);
    return GetPaymentMethodsQueryParams;
}(SpeakeasyBase));
export { GetPaymentMethodsQueryParams };
var GetPaymentMethodsSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentMethodsSecurity, _super);
    function GetPaymentMethodsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetPaymentMethodsSecurity.prototype, "accountAuth", void 0);
    return GetPaymentMethodsSecurity;
}(SpeakeasyBase));
export { GetPaymentMethodsSecurity };
var GetPaymentMethodsRequest = /** @class */ (function (_super) {
    __extends(GetPaymentMethodsRequest, _super);
    function GetPaymentMethodsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentMethodsQueryParams)
    ], GetPaymentMethodsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentMethodsSecurity)
    ], GetPaymentMethodsRequest.prototype, "security", void 0);
    return GetPaymentMethodsRequest;
}(SpeakeasyBase));
export { GetPaymentMethodsRequest };
var GetPaymentMethodsResponse = /** @class */ (function (_super) {
    __extends(GetPaymentMethodsResponse, _super);
    function GetPaymentMethodsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentMethodsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PaymentMethod }),
        __metadata("design:type", Array)
    ], GetPaymentMethodsResponse.prototype, "paymentMethods", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetPaymentMethodsResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentMethodsResponse.prototype, "statusCode", void 0);
    return GetPaymentMethodsResponse;
}(SpeakeasyBase));
export { GetPaymentMethodsResponse };
