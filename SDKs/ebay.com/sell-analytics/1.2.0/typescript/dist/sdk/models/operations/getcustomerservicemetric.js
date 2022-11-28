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
var GetCustomerServiceMetricPathParams = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricPathParams, _super);
    function GetCustomerServiceMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_service_metric_type" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricPathParams.prototype, "customerServiceMetricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=evaluation_type" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricPathParams.prototype, "evaluationType", void 0);
    return GetCustomerServiceMetricPathParams;
}(SpeakeasyBase));
export { GetCustomerServiceMetricPathParams };
var GetCustomerServiceMetricQueryParams = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricQueryParams, _super);
    function GetCustomerServiceMetricQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evaluation_marketplace_id" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricQueryParams.prototype, "evaluationMarketplaceId", void 0);
    return GetCustomerServiceMetricQueryParams;
}(SpeakeasyBase));
export { GetCustomerServiceMetricQueryParams };
var GetCustomerServiceMetricSecurity = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricSecurity, _super);
    function GetCustomerServiceMetricSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetCustomerServiceMetricSecurity.prototype, "apiAuth", void 0);
    return GetCustomerServiceMetricSecurity;
}(SpeakeasyBase));
export { GetCustomerServiceMetricSecurity };
var GetCustomerServiceMetricRequest = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricRequest, _super);
    function GetCustomerServiceMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomerServiceMetricPathParams)
    ], GetCustomerServiceMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomerServiceMetricQueryParams)
    ], GetCustomerServiceMetricRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomerServiceMetricSecurity)
    ], GetCustomerServiceMetricRequest.prototype, "security", void 0);
    return GetCustomerServiceMetricRequest;
}(SpeakeasyBase));
export { GetCustomerServiceMetricRequest };
var GetCustomerServiceMetricResponse = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricResponse, _super);
    function GetCustomerServiceMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetCustomerServiceMetricResponse)
    ], GetCustomerServiceMetricResponse.prototype, "getCustomerServiceMetricResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomerServiceMetricResponse.prototype, "statusCode", void 0);
    return GetCustomerServiceMetricResponse;
}(SpeakeasyBase));
export { GetCustomerServiceMetricResponse };
