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
var OrderApiChangeStatusHeaders = /** @class */ (function (_super) {
    __extends(OrderApiChangeStatusHeaders, _super);
    function OrderApiChangeStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], OrderApiChangeStatusHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], OrderApiChangeStatusHeaders.prototype, "xAuthSecret", void 0);
    return OrderApiChangeStatusHeaders;
}(SpeakeasyBase));
export { OrderApiChangeStatusHeaders };
var OrderApiChangeStatusRequests = /** @class */ (function (_super) {
    __extends(OrderApiChangeStatusRequests, _super);
    function OrderApiChangeStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], OrderApiChangeStatusRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangeOrderStatusApiModel)
    ], OrderApiChangeStatusRequests.prototype, "changeOrderStatusApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ChangeOrderStatusApiModel)
    ], OrderApiChangeStatusRequests.prototype, "changeOrderStatusApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ChangeOrderStatusApiModel)
    ], OrderApiChangeStatusRequests.prototype, "changeOrderStatusApiModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], OrderApiChangeStatusRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], OrderApiChangeStatusRequests.prototype, "textXml", void 0);
    return OrderApiChangeStatusRequests;
}(SpeakeasyBase));
export { OrderApiChangeStatusRequests };
var OrderApiChangeStatusRequest = /** @class */ (function (_super) {
    __extends(OrderApiChangeStatusRequest, _super);
    function OrderApiChangeStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderApiChangeStatusHeaders)
    ], OrderApiChangeStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderApiChangeStatusRequests)
    ], OrderApiChangeStatusRequest.prototype, "request", void 0);
    return OrderApiChangeStatusRequest;
}(SpeakeasyBase));
export { OrderApiChangeStatusRequest };
var OrderApiChangeStatusResponse = /** @class */ (function (_super) {
    __extends(OrderApiChangeStatusResponse, _super);
    function OrderApiChangeStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrderApiChangeStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrderApiChangeStatusResponse.prototype, "statusCode", void 0);
    return OrderApiChangeStatusResponse;
}(SpeakeasyBase));
export { OrderApiChangeStatusResponse };
