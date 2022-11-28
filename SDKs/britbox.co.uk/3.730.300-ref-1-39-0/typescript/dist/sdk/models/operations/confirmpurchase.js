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
var ConfirmPurchasePathParams = /** @class */ (function (_super) {
    __extends(ConfirmPurchasePathParams, _super);
    function ConfirmPurchasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], ConfirmPurchasePathParams.prototype, "platform", void 0);
    return ConfirmPurchasePathParams;
}(SpeakeasyBase));
export { ConfirmPurchasePathParams };
var ConfirmPurchaseQueryParams = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseQueryParams, _super);
    function ConfirmPurchaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ConfirmPurchaseQueryParams.prototype, "lang", void 0);
    return ConfirmPurchaseQueryParams;
}(SpeakeasyBase));
export { ConfirmPurchaseQueryParams };
var ConfirmPurchaseSecurity = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseSecurity, _super);
    function ConfirmPurchaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], ConfirmPurchaseSecurity.prototype, "accountAuth", void 0);
    return ConfirmPurchaseSecurity;
}(SpeakeasyBase));
export { ConfirmPurchaseSecurity };
var ConfirmPurchaseRequest = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseRequest, _super);
    function ConfirmPurchaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchasePathParams)
    ], ConfirmPurchaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseQueryParams)
    ], ConfirmPurchaseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvPurchaseRequest)
    ], ConfirmPurchaseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseSecurity)
    ], ConfirmPurchaseRequest.prototype, "security", void 0);
    return ConfirmPurchaseRequest;
}(SpeakeasyBase));
export { ConfirmPurchaseRequest };
var ConfirmPurchaseResponse = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseResponse, _super);
    function ConfirmPurchaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmPurchaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvPurchase)
    ], ConfirmPurchaseResponse.prototype, "itvPurchase", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], ConfirmPurchaseResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmPurchaseResponse.prototype, "statusCode", void 0);
    return ConfirmPurchaseResponse;
}(SpeakeasyBase));
export { ConfirmPurchaseResponse };
