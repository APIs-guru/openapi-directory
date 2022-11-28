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
export var PrepareTransactionRequestBodyVariationEnum;
(function (PrepareTransactionRequestBodyVariationEnum) {
    PrepareTransactionRequestBodyVariationEnum["Gsb"] = "gsb";
    PrepareTransactionRequestBodyVariationEnum["Erzeugung"] = "erzeugung";
    PrepareTransactionRequestBodyVariationEnum["Eigenstrom"] = "eigenstrom";
    PrepareTransactionRequestBodyVariationEnum["Co2"] = "co2";
    PrepareTransactionRequestBodyVariationEnum["Baeume"] = "baeume";
})(PrepareTransactionRequestBodyVariationEnum || (PrepareTransactionRequestBodyVariationEnum = {}));
var PrepareTransactionRequestBody = /** @class */ (function (_super) {
    __extends(PrepareTransactionRequestBody, _super);
    function PrepareTransactionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], PrepareTransactionRequestBody.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], PrepareTransactionRequestBody.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], PrepareTransactionRequestBody.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], PrepareTransactionRequestBody.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variation" }),
        __metadata("design:type", String)
    ], PrepareTransactionRequestBody.prototype, "variation", void 0);
    return PrepareTransactionRequestBody;
}(SpeakeasyBase));
export { PrepareTransactionRequestBody };
var PrepareTransactionRequest = /** @class */ (function (_super) {
    __extends(PrepareTransactionRequest, _super);
    function PrepareTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PrepareTransactionRequestBody)
    ], PrepareTransactionRequest.prototype, "request", void 0);
    return PrepareTransactionRequest;
}(SpeakeasyBase));
export { PrepareTransactionRequest };
var PrepareTransactionResponse = /** @class */ (function (_super) {
    __extends(PrepareTransactionResponse, _super);
    function PrepareTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrepareTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrepareTransactionResponse.prototype, "statusCode", void 0);
    return PrepareTransactionResponse;
}(SpeakeasyBase));
export { PrepareTransactionResponse };
