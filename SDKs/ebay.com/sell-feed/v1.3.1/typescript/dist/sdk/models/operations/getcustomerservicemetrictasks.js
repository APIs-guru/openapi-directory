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
var GetCustomerServiceMetricTasksQueryParams = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricTasksQueryParams, _super);
    function GetCustomerServiceMetricTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_range" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricTasksQueryParams.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_type" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricTasksQueryParams.prototype, "feedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricTasksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=look_back_days" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricTasksQueryParams.prototype, "lookBackDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricTasksQueryParams.prototype, "offset", void 0);
    return GetCustomerServiceMetricTasksQueryParams;
}(SpeakeasyBase));
export { GetCustomerServiceMetricTasksQueryParams };
var GetCustomerServiceMetricTasksSecurity = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricTasksSecurity, _super);
    function GetCustomerServiceMetricTasksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetCustomerServiceMetricTasksSecurity.prototype, "apiAuth", void 0);
    return GetCustomerServiceMetricTasksSecurity;
}(SpeakeasyBase));
export { GetCustomerServiceMetricTasksSecurity };
var GetCustomerServiceMetricTasksRequest = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricTasksRequest, _super);
    function GetCustomerServiceMetricTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomerServiceMetricTasksQueryParams)
    ], GetCustomerServiceMetricTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomerServiceMetricTasksSecurity)
    ], GetCustomerServiceMetricTasksRequest.prototype, "security", void 0);
    return GetCustomerServiceMetricTasksRequest;
}(SpeakeasyBase));
export { GetCustomerServiceMetricTasksRequest };
var GetCustomerServiceMetricTasksResponse = /** @class */ (function (_super) {
    __extends(GetCustomerServiceMetricTasksResponse, _super);
    function GetCustomerServiceMetricTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomerServiceMetricTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomerServiceMetricTaskCollection)
    ], GetCustomerServiceMetricTasksResponse.prototype, "customerServiceMetricTaskCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomerServiceMetricTasksResponse.prototype, "statusCode", void 0);
    return GetCustomerServiceMetricTasksResponse;
}(SpeakeasyBase));
export { GetCustomerServiceMetricTasksResponse };
