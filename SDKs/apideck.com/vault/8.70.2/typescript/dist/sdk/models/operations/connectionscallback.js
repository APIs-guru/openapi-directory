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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ConnectionsCallbackQueryParams = /** @class */ (function (_super) {
    __extends(ConnectionsCallbackQueryParams, _super);
    function ConnectionsCallbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], ConnectionsCallbackQueryParams.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], ConnectionsCallbackQueryParams.prototype, "state", void 0);
    return ConnectionsCallbackQueryParams;
}(SpeakeasyBase));
export { ConnectionsCallbackQueryParams };
var ConnectionsCallbackRequest = /** @class */ (function (_super) {
    __extends(ConnectionsCallbackRequest, _super);
    function ConnectionsCallbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsCallbackQueryParams)
    ], ConnectionsCallbackRequest.prototype, "queryParams", void 0);
    return ConnectionsCallbackRequest;
}(SpeakeasyBase));
export { ConnectionsCallbackRequest };
var ConnectionsCallbackResponse = /** @class */ (function (_super) {
    __extends(ConnectionsCallbackResponse, _super);
    function ConnectionsCallbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionsCallbackResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConnectionsCallbackResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionsCallbackResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionsCallbackResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConnectionsCallbackResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionsCallbackResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionsCallbackResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionsCallbackResponse.prototype, "unprocessableResponse", void 0);
    return ConnectionsCallbackResponse;
}(SpeakeasyBase));
export { ConnectionsCallbackResponse };
