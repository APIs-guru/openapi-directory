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
var PhoneNumberValidateHeaders = /** @class */ (function (_super) {
    __extends(PhoneNumberValidateHeaders, _super);
    function PhoneNumberValidateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PhoneNumberValidateHeaders;
}(SpeakeasyBase));
export { PhoneNumberValidateHeaders };
// PhoneNumberValidateRequestBodyNumberValidateRequest
/**
 * Specifies a phone number to validate and retrieve information about.
**/
var PhoneNumberValidateRequestBodyNumberValidateRequest = /** @class */ (function (_super) {
    __extends(PhoneNumberValidateRequestBodyNumberValidateRequest, _super);
    function PhoneNumberValidateRequestBodyNumberValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsoCountryCode" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateRequestBodyNumberValidateRequest.prototype, "isoCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], PhoneNumberValidateRequestBodyNumberValidateRequest.prototype, "phoneNumber", void 0);
    return PhoneNumberValidateRequestBodyNumberValidateRequest;
}(SpeakeasyBase));
export { PhoneNumberValidateRequestBodyNumberValidateRequest };
var PhoneNumberValidateRequestBody = /** @class */ (function (_super) {
    __extends(PhoneNumberValidateRequestBody, _super);
    function PhoneNumberValidateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberValidateRequest" }),
        __metadata("design:type", PhoneNumberValidateRequestBodyNumberValidateRequest)
    ], PhoneNumberValidateRequestBody.prototype, "numberValidateRequest", void 0);
    return PhoneNumberValidateRequestBody;
}(SpeakeasyBase));
export { PhoneNumberValidateRequestBody };
var PhoneNumberValidateRequest = /** @class */ (function (_super) {
    __extends(PhoneNumberValidateRequest, _super);
    function PhoneNumberValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PhoneNumberValidateHeaders)
    ], PhoneNumberValidateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PhoneNumberValidateRequestBody)
    ], PhoneNumberValidateRequest.prototype, "request", void 0);
    return PhoneNumberValidateRequest;
}(SpeakeasyBase));
export { PhoneNumberValidateRequest };
var PhoneNumberValidateResponse = /** @class */ (function (_super) {
    __extends(PhoneNumberValidateResponse, _super);
    function PhoneNumberValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PhoneNumberValidateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PhoneNumberValidateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PhoneNumberValidateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PhoneNumberValidateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PhoneNumberValidateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PhoneNumberValidateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PhoneNumberValidateResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PhoneNumberValidateResponse)
    ], PhoneNumberValidateResponse.prototype, "phoneNumberValidateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PhoneNumberValidateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PhoneNumberValidateResponse.prototype, "tooManyRequestsException", void 0);
    return PhoneNumberValidateResponse;
}(SpeakeasyBase));
export { PhoneNumberValidateResponse };
