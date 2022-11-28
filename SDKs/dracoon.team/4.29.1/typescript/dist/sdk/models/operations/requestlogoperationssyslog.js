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
var RequestLogOperationsSyslogQueryParams = /** @class */ (function (_super) {
    __extends(RequestLogOperationsSyslogQueryParams, _super);
    function RequestLogOperationsSyslogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_deprecated" }),
        __metadata("design:type", Boolean)
    ], RequestLogOperationsSyslogQueryParams.prototype, "isDeprecated", void 0);
    return RequestLogOperationsSyslogQueryParams;
}(SpeakeasyBase));
export { RequestLogOperationsSyslogQueryParams };
var RequestLogOperationsSyslogHeaders = /** @class */ (function (_super) {
    __extends(RequestLogOperationsSyslogHeaders, _super);
    function RequestLogOperationsSyslogHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestLogOperationsSyslogHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestLogOperationsSyslogHeaders;
}(SpeakeasyBase));
export { RequestLogOperationsSyslogHeaders };
var RequestLogOperationsSyslogRequest = /** @class */ (function (_super) {
    __extends(RequestLogOperationsSyslogRequest, _super);
    function RequestLogOperationsSyslogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestLogOperationsSyslogQueryParams)
    ], RequestLogOperationsSyslogRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestLogOperationsSyslogHeaders)
    ], RequestLogOperationsSyslogRequest.prototype, "headers", void 0);
    return RequestLogOperationsSyslogRequest;
}(SpeakeasyBase));
export { RequestLogOperationsSyslogRequest };
var RequestLogOperationsSyslogResponse = /** @class */ (function (_super) {
    __extends(RequestLogOperationsSyslogResponse, _super);
    function RequestLogOperationsSyslogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestLogOperationsSyslogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestLogOperationsSyslogResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogOperationList)
    ], RequestLogOperationsSyslogResponse.prototype, "logOperationList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestLogOperationsSyslogResponse.prototype, "statusCode", void 0);
    return RequestLogOperationsSyslogResponse;
}(SpeakeasyBase));
export { RequestLogOperationsSyslogResponse };
