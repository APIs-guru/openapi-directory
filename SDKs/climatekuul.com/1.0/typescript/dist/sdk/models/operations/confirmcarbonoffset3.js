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
export var ConfirmCarbonOffset3ServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var ConfirmCarbonOffset3RequestBody = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset3RequestBody, _super);
    function ConfirmCarbonOffset3RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=carbonOffset;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset3RequestBody.prototype, "carbonOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactEmail;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset3RequestBody.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactFirstName;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset3RequestBody.prototype, "contactFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactLastName;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset3RequestBody.prototype, "contactLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=transaction_id;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset3RequestBody.prototype, "transactionId", void 0);
    return ConfirmCarbonOffset3RequestBody;
}(SpeakeasyBase));
export { ConfirmCarbonOffset3RequestBody };
var ConfirmCarbonOffset3Request = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset3Request, _super);
    function ConfirmCarbonOffset3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset3Request.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ConfirmCarbonOffset3RequestBody)
    ], ConfirmCarbonOffset3Request.prototype, "request", void 0);
    return ConfirmCarbonOffset3Request;
}(SpeakeasyBase));
export { ConfirmCarbonOffset3Request };
var ConfirmCarbonOffset3Response = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset3Response, _super);
    function ConfirmCarbonOffset3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmCarbonOffset3Response.prototype, "statusCode", void 0);
    return ConfirmCarbonOffset3Response;
}(SpeakeasyBase));
export { ConfirmCarbonOffset3Response };
