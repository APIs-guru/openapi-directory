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
var UpdateCustomerAttributesPathParams = /** @class */ (function (_super) {
    __extends(UpdateCustomerAttributesPathParams, _super);
    function UpdateCustomerAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" }),
        __metadata("design:type", Number)
    ], UpdateCustomerAttributesPathParams.prototype, "customerId", void 0);
    return UpdateCustomerAttributesPathParams;
}(SpeakeasyBase));
export { UpdateCustomerAttributesPathParams };
var UpdateCustomerAttributesHeaders = /** @class */ (function (_super) {
    __extends(UpdateCustomerAttributesHeaders, _super);
    function UpdateCustomerAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], UpdateCustomerAttributesHeaders.prototype, "xSdsDateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" }),
        __metadata("design:type", String)
    ], UpdateCustomerAttributesHeaders.prototype, "xSdsServiceToken", void 0);
    return UpdateCustomerAttributesHeaders;
}(SpeakeasyBase));
export { UpdateCustomerAttributesHeaders };
var UpdateCustomerAttributesRequest = /** @class */ (function (_super) {
    __extends(UpdateCustomerAttributesRequest, _super);
    function UpdateCustomerAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCustomerAttributesPathParams)
    ], UpdateCustomerAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCustomerAttributesHeaders)
    ], UpdateCustomerAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerAttributes)
    ], UpdateCustomerAttributesRequest.prototype, "request", void 0);
    return UpdateCustomerAttributesRequest;
}(SpeakeasyBase));
export { UpdateCustomerAttributesRequest };
var UpdateCustomerAttributesResponse = /** @class */ (function (_super) {
    __extends(UpdateCustomerAttributesResponse, _super);
    function UpdateCustomerAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCustomerAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Customer)
    ], UpdateCustomerAttributesResponse.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateCustomerAttributesResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCustomerAttributesResponse.prototype, "statusCode", void 0);
    return UpdateCustomerAttributesResponse;
}(SpeakeasyBase));
export { UpdateCustomerAttributesResponse };
