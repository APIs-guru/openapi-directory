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
export var ConfirmPayment4ServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var ConfirmPayment4RequestBody = /** @class */ (function (_super) {
    __extends(ConfirmPayment4RequestBody, _super);
    function ConfirmPayment4RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], ConfirmPayment4RequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], ConfirmPayment4RequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=confirmPayment;" }),
        __metadata("design:type", String)
    ], ConfirmPayment4RequestBody.prototype, "confirmPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=paymentID;" }),
        __metadata("design:type", Number)
    ], ConfirmPayment4RequestBody.prototype, "paymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=transaction_id;" }),
        __metadata("design:type", String)
    ], ConfirmPayment4RequestBody.prototype, "transactionId", void 0);
    return ConfirmPayment4RequestBody;
}(SpeakeasyBase));
export { ConfirmPayment4RequestBody };
var ConfirmPayment4Request = /** @class */ (function (_super) {
    __extends(ConfirmPayment4Request, _super);
    function ConfirmPayment4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmPayment4Request.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ConfirmPayment4RequestBody)
    ], ConfirmPayment4Request.prototype, "request", void 0);
    return ConfirmPayment4Request;
}(SpeakeasyBase));
export { ConfirmPayment4Request };
var ConfirmPayment4Response = /** @class */ (function (_super) {
    __extends(ConfirmPayment4Response, _super);
    function ConfirmPayment4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmPayment4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmPayment4Response.prototype, "statusCode", void 0);
    return ConfirmPayment4Response;
}(SpeakeasyBase));
export { ConfirmPayment4Response };
