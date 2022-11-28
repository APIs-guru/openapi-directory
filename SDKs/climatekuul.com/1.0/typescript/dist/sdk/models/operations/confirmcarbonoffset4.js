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
export var ConfirmCarbonOffset4ServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var ConfirmCarbonOffset4RequestBody = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset4RequestBody, _super);
    function ConfirmCarbonOffset4RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=carbonOffset;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset4RequestBody.prototype, "carbonOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactEmail;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset4RequestBody.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactFirstName;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset4RequestBody.prototype, "contactFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactLastName;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset4RequestBody.prototype, "contactLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=transaction_id;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset4RequestBody.prototype, "transactionId", void 0);
    return ConfirmCarbonOffset4RequestBody;
}(SpeakeasyBase));
export { ConfirmCarbonOffset4RequestBody };
var ConfirmCarbonOffset4Request = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset4Request, _super);
    function ConfirmCarbonOffset4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset4Request.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ConfirmCarbonOffset4RequestBody)
    ], ConfirmCarbonOffset4Request.prototype, "request", void 0);
    return ConfirmCarbonOffset4Request;
}(SpeakeasyBase));
export { ConfirmCarbonOffset4Request };
var ConfirmCarbonOffset4Response = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset4Response, _super);
    function ConfirmCarbonOffset4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmCarbonOffset4Response.prototype, "statusCode", void 0);
    return ConfirmCarbonOffset4Response;
}(SpeakeasyBase));
export { ConfirmCarbonOffset4Response };
