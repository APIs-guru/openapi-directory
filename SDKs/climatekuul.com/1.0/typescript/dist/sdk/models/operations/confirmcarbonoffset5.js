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
export var ConfirmCarbonOffset5ServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var ConfirmCarbonOffset5RequestBody = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset5RequestBody, _super);
    function ConfirmCarbonOffset5RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=carbonOffset;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset5RequestBody.prototype, "carbonOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactEmail;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset5RequestBody.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactFirstName;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset5RequestBody.prototype, "contactFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contactLastName;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset5RequestBody.prototype, "contactLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=transaction_id;" }),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset5RequestBody.prototype, "transactionId", void 0);
    return ConfirmCarbonOffset5RequestBody;
}(SpeakeasyBase));
export { ConfirmCarbonOffset5RequestBody };
var ConfirmCarbonOffset5Request = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset5Request, _super);
    function ConfirmCarbonOffset5Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset5Request.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ConfirmCarbonOffset5RequestBody)
    ], ConfirmCarbonOffset5Request.prototype, "request", void 0);
    return ConfirmCarbonOffset5Request;
}(SpeakeasyBase));
export { ConfirmCarbonOffset5Request };
var ConfirmCarbonOffset5Response = /** @class */ (function (_super) {
    __extends(ConfirmCarbonOffset5Response, _super);
    function ConfirmCarbonOffset5Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmCarbonOffset5Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmCarbonOffset5Response.prototype, "statusCode", void 0);
    return ConfirmCarbonOffset5Response;
}(SpeakeasyBase));
export { ConfirmCarbonOffset5Response };
