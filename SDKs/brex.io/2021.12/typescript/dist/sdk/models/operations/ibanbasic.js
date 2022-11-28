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
var IbanBasicRequestBody = /** @class */ (function (_super) {
    __extends(IbanBasicRequestBody, _super);
    function IbanBasicRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ibanNumber;" }),
        __metadata("design:type", String)
    ], IbanBasicRequestBody.prototype, "ibanNumber", void 0);
    return IbanBasicRequestBody;
}(SpeakeasyBase));
export { IbanBasicRequestBody };
var IbanBasicSecurity = /** @class */ (function (_super) {
    __extends(IbanBasicSecurity, _super);
    function IbanBasicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], IbanBasicSecurity.prototype, "userKey", void 0);
    return IbanBasicSecurity;
}(SpeakeasyBase));
export { IbanBasicSecurity };
var IbanBasicRequest = /** @class */ (function (_super) {
    __extends(IbanBasicRequest, _super);
    function IbanBasicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", IbanBasicRequestBody)
    ], IbanBasicRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IbanBasicSecurity)
    ], IbanBasicRequest.prototype, "security", void 0);
    return IbanBasicRequest;
}(SpeakeasyBase));
export { IbanBasicRequest };
var IbanBasicResponse = /** @class */ (function (_super) {
    __extends(IbanBasicResponse, _super);
    function IbanBasicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IbanBasicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IbanBasicResponse.prototype, "ibanBasic200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], IbanBasicResponse.prototype, "ibanBasicDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IbanBasicResponse.prototype, "statusCode", void 0);
    return IbanBasicResponse;
}(SpeakeasyBase));
export { IbanBasicResponse };
