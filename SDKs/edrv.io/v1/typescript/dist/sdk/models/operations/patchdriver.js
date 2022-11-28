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
var PatchDriverPathParams = /** @class */ (function (_super) {
    __extends(PatchDriverPathParams, _super);
    function PatchDriverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchDriverPathParams.prototype, "id", void 0);
    return PatchDriverPathParams;
}(SpeakeasyBase));
export { PatchDriverPathParams };
var PatchDriverRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PatchDriverRequestBodyAddress, _super);
    function PatchDriverRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBodyAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAndNumber" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBodyAddress.prototype, "streetAndNumber", void 0);
    return PatchDriverRequestBodyAddress;
}(SpeakeasyBase));
export { PatchDriverRequestBodyAddress };
var PatchDriverRequestBodyPhone = /** @class */ (function (_super) {
    __extends(PatchDriverRequestBodyPhone, _super);
    function PatchDriverRequestBodyPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBodyPhone.prototype, "home", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBodyPhone.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=work" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBodyPhone.prototype, "work", void 0);
    return PatchDriverRequestBodyPhone;
}(SpeakeasyBase));
export { PatchDriverRequestBodyPhone };
var PatchDriverRequestBody = /** @class */ (function (_super) {
    __extends(PatchDriverRequestBody, _super);
    function PatchDriverRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PatchDriverRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PatchDriverRequestBodyAddress)
    ], PatchDriverRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBody.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBody.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", PatchDriverRequestBodyPhone)
    ], PatchDriverRequestBody.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PatchDriverRequestBody.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokens" }),
        __metadata("design:type", Array)
    ], PatchDriverRequestBody.prototype, "tokens", void 0);
    return PatchDriverRequestBody;
}(SpeakeasyBase));
export { PatchDriverRequestBody };
var PatchDriver200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchDriver200ApplicationJson, _super);
    function PatchDriver200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchDriver200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PatchDriver200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], PatchDriver200ApplicationJson.prototype, "result", void 0);
    return PatchDriver200ApplicationJson;
}(SpeakeasyBase));
export { PatchDriver200ApplicationJson };
var PatchDriverRequest = /** @class */ (function (_super) {
    __extends(PatchDriverRequest, _super);
    function PatchDriverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchDriverPathParams)
    ], PatchDriverRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchDriverRequestBody)
    ], PatchDriverRequest.prototype, "request", void 0);
    return PatchDriverRequest;
}(SpeakeasyBase));
export { PatchDriverRequest };
var PatchDriverResponse = /** @class */ (function (_super) {
    __extends(PatchDriverResponse, _super);
    function PatchDriverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchDriverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchDriverResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchDriver200ApplicationJson)
    ], PatchDriverResponse.prototype, "patchDriver200ApplicationJsonObject", void 0);
    return PatchDriverResponse;
}(SpeakeasyBase));
export { PatchDriverResponse };
