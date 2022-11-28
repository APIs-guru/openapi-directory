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
var RequestCustomerPathParams = /** @class */ (function (_super) {
    __extends(RequestCustomerPathParams, _super);
    function RequestCustomerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" }),
        __metadata("design:type", Number)
    ], RequestCustomerPathParams.prototype, "customerId", void 0);
    return RequestCustomerPathParams;
}(SpeakeasyBase));
export { RequestCustomerPathParams };
var RequestCustomerQueryParams = /** @class */ (function (_super) {
    __extends(RequestCustomerQueryParams, _super);
    function RequestCustomerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_attributes" }),
        __metadata("design:type", Boolean)
    ], RequestCustomerQueryParams.prototype, "includeAttributes", void 0);
    return RequestCustomerQueryParams;
}(SpeakeasyBase));
export { RequestCustomerQueryParams };
var RequestCustomerHeaders = /** @class */ (function (_super) {
    __extends(RequestCustomerHeaders, _super);
    function RequestCustomerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestCustomerHeaders.prototype, "xSdsDateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" }),
        __metadata("design:type", String)
    ], RequestCustomerHeaders.prototype, "xSdsServiceToken", void 0);
    return RequestCustomerHeaders;
}(SpeakeasyBase));
export { RequestCustomerHeaders };
var RequestCustomerRequest = /** @class */ (function (_super) {
    __extends(RequestCustomerRequest, _super);
    function RequestCustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestCustomerPathParams)
    ], RequestCustomerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestCustomerQueryParams)
    ], RequestCustomerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestCustomerHeaders)
    ], RequestCustomerRequest.prototype, "headers", void 0);
    return RequestCustomerRequest;
}(SpeakeasyBase));
export { RequestCustomerRequest };
var RequestCustomerResponse = /** @class */ (function (_super) {
    __extends(RequestCustomerResponse, _super);
    function RequestCustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestCustomerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Customer)
    ], RequestCustomerResponse.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestCustomerResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestCustomerResponse.prototype, "statusCode", void 0);
    return RequestCustomerResponse;
}(SpeakeasyBase));
export { RequestCustomerResponse };
