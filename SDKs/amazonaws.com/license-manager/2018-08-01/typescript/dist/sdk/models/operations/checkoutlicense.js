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
export var CheckoutLicenseXAmzTargetEnum;
(function (CheckoutLicenseXAmzTargetEnum) {
    CheckoutLicenseXAmzTargetEnum["AwsLicenseManagerCheckoutLicense"] = "AWSLicenseManager.CheckoutLicense";
})(CheckoutLicenseXAmzTargetEnum || (CheckoutLicenseXAmzTargetEnum = {}));
var CheckoutLicenseHeaders = /** @class */ (function (_super) {
    __extends(CheckoutLicenseHeaders, _super);
    function CheckoutLicenseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CheckoutLicenseHeaders.prototype, "xAmzTarget", void 0);
    return CheckoutLicenseHeaders;
}(SpeakeasyBase));
export { CheckoutLicenseHeaders };
var CheckoutLicenseRequest = /** @class */ (function (_super) {
    __extends(CheckoutLicenseRequest, _super);
    function CheckoutLicenseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckoutLicenseHeaders)
    ], CheckoutLicenseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CheckoutLicenseRequest)
    ], CheckoutLicenseRequest.prototype, "request", void 0);
    return CheckoutLicenseRequest;
}(SpeakeasyBase));
export { CheckoutLicenseRequest };
var CheckoutLicenseResponse = /** @class */ (function (_super) {
    __extends(CheckoutLicenseResponse, _super);
    function CheckoutLicenseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "authorizationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckoutLicenseResponse)
    ], CheckoutLicenseResponse.prototype, "checkoutLicenseResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckoutLicenseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "noEntitlementsAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "rateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "redirectException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "serverInternalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckoutLicenseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "unsupportedDigitalSignatureMethodException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CheckoutLicenseResponse.prototype, "validationException", void 0);
    return CheckoutLicenseResponse;
}(SpeakeasyBase));
export { CheckoutLicenseResponse };
