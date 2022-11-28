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
var BillsAllQueryParams = /** @class */ (function (_super) {
    __extends(BillsAllQueryParams, _super);
    function BillsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], BillsAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], BillsAllQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], BillsAllQueryParams.prototype, "raw", void 0);
    return BillsAllQueryParams;
}(SpeakeasyBase));
export { BillsAllQueryParams };
var BillsAllHeaders = /** @class */ (function (_super) {
    __extends(BillsAllHeaders, _super);
    function BillsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], BillsAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], BillsAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], BillsAllHeaders.prototype, "xApideckServiceId", void 0);
    return BillsAllHeaders;
}(SpeakeasyBase));
export { BillsAllHeaders };
var BillsAllSecurity = /** @class */ (function (_super) {
    __extends(BillsAllSecurity, _super);
    function BillsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BillsAllSecurity.prototype, "apiKey", void 0);
    return BillsAllSecurity;
}(SpeakeasyBase));
export { BillsAllSecurity };
var BillsAllRequest = /** @class */ (function (_super) {
    __extends(BillsAllRequest, _super);
    function BillsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillsAllQueryParams)
    ], BillsAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillsAllHeaders)
    ], BillsAllRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillsAllSecurity)
    ], BillsAllRequest.prototype, "security", void 0);
    return BillsAllRequest;
}(SpeakeasyBase));
export { BillsAllRequest };
var BillsAllResponse = /** @class */ (function (_super) {
    __extends(BillsAllResponse, _super);
    function BillsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], BillsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BillsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBillsResponse)
    ], BillsAllResponse.prototype, "getBillsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], BillsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], BillsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BillsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], BillsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], BillsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], BillsAllResponse.prototype, "unprocessableResponse", void 0);
    return BillsAllResponse;
}(SpeakeasyBase));
export { BillsAllResponse };
