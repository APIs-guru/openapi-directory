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
export var ConfirmsPlanting5ServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var ConfirmsPlanting5RequestBody = /** @class */ (function (_super) {
    __extends(ConfirmsPlanting5RequestBody, _super);
    function ConfirmsPlanting5RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], ConfirmsPlanting5RequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], ConfirmsPlanting5RequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=confirmPlanting;" }),
        __metadata("design:type", String)
    ], ConfirmsPlanting5RequestBody.prototype, "confirmPlanting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=transaction_id;" }),
        __metadata("design:type", String)
    ], ConfirmsPlanting5RequestBody.prototype, "transactionId", void 0);
    return ConfirmsPlanting5RequestBody;
}(SpeakeasyBase));
export { ConfirmsPlanting5RequestBody };
var ConfirmsPlanting5Request = /** @class */ (function (_super) {
    __extends(ConfirmsPlanting5Request, _super);
    function ConfirmsPlanting5Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmsPlanting5Request.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ConfirmsPlanting5RequestBody)
    ], ConfirmsPlanting5Request.prototype, "request", void 0);
    return ConfirmsPlanting5Request;
}(SpeakeasyBase));
export { ConfirmsPlanting5Request };
var ConfirmsPlanting5Response = /** @class */ (function (_super) {
    __extends(ConfirmsPlanting5Response, _super);
    function ConfirmsPlanting5Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmsPlanting5Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmsPlanting5Response.prototype, "statusCode", void 0);
    return ConfirmsPlanting5Response;
}(SpeakeasyBase));
export { ConfirmsPlanting5Response };
