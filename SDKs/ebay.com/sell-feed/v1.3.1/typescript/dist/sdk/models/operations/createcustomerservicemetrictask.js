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
var CreateCustomerServiceMetricTaskHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomerServiceMetricTaskHeaders, _super);
    function CreateCustomerServiceMetricTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept-language" }),
        __metadata("design:type", String)
    ], CreateCustomerServiceMetricTaskHeaders.prototype, "acceptLanguage", void 0);
    return CreateCustomerServiceMetricTaskHeaders;
}(SpeakeasyBase));
export { CreateCustomerServiceMetricTaskHeaders };
var CreateCustomerServiceMetricTaskSecurity = /** @class */ (function (_super) {
    __extends(CreateCustomerServiceMetricTaskSecurity, _super);
    function CreateCustomerServiceMetricTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], CreateCustomerServiceMetricTaskSecurity.prototype, "apiAuth", void 0);
    return CreateCustomerServiceMetricTaskSecurity;
}(SpeakeasyBase));
export { CreateCustomerServiceMetricTaskSecurity };
var CreateCustomerServiceMetricTaskRequest = /** @class */ (function (_super) {
    __extends(CreateCustomerServiceMetricTaskRequest, _super);
    function CreateCustomerServiceMetricTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomerServiceMetricTaskHeaders)
    ], CreateCustomerServiceMetricTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateServiceMetricsTaskRequest)
    ], CreateCustomerServiceMetricTaskRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomerServiceMetricTaskSecurity)
    ], CreateCustomerServiceMetricTaskRequest.prototype, "security", void 0);
    return CreateCustomerServiceMetricTaskRequest;
}(SpeakeasyBase));
export { CreateCustomerServiceMetricTaskRequest };
var CreateCustomerServiceMetricTaskResponse = /** @class */ (function (_super) {
    __extends(CreateCustomerServiceMetricTaskResponse, _super);
    function CreateCustomerServiceMetricTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomerServiceMetricTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomerServiceMetricTaskResponse.prototype, "statusCode", void 0);
    return CreateCustomerServiceMetricTaskResponse;
}(SpeakeasyBase));
export { CreateCustomerServiceMetricTaskResponse };
