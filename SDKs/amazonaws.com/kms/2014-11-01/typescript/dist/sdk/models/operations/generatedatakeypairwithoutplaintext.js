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
export var GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum;
(function (GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum) {
    GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum["TrentServiceGenerateDataKeyPairWithoutPlaintext"] = "TrentService.GenerateDataKeyPairWithoutPlaintext";
})(GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum || (GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum = {}));
var GenerateDataKeyPairWithoutPlaintextHeaders = /** @class */ (function (_super) {
    __extends(GenerateDataKeyPairWithoutPlaintextHeaders, _super);
    function GenerateDataKeyPairWithoutPlaintextHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextHeaders.prototype, "xAmzTarget", void 0);
    return GenerateDataKeyPairWithoutPlaintextHeaders;
}(SpeakeasyBase));
export { GenerateDataKeyPairWithoutPlaintextHeaders };
var GenerateDataKeyPairWithoutPlaintextRequest = /** @class */ (function (_super) {
    __extends(GenerateDataKeyPairWithoutPlaintextRequest, _super);
    function GenerateDataKeyPairWithoutPlaintextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenerateDataKeyPairWithoutPlaintextHeaders)
    ], GenerateDataKeyPairWithoutPlaintextRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateDataKeyPairWithoutPlaintextRequest)
    ], GenerateDataKeyPairWithoutPlaintextRequest.prototype, "request", void 0);
    return GenerateDataKeyPairWithoutPlaintextRequest;
}(SpeakeasyBase));
export { GenerateDataKeyPairWithoutPlaintextRequest };
var GenerateDataKeyPairWithoutPlaintextResponse = /** @class */ (function (_super) {
    __extends(GenerateDataKeyPairWithoutPlaintextResponse, _super);
    function GenerateDataKeyPairWithoutPlaintextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "dependencyTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "disabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateDataKeyPairWithoutPlaintextResponse)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "generateDataKeyPairWithoutPlaintextResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "invalidGrantTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "invalidKeyUsageException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "kmsInternalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "kmsInvalidStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "keyUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateDataKeyPairWithoutPlaintextResponse.prototype, "unsupportedOperationException", void 0);
    return GenerateDataKeyPairWithoutPlaintextResponse;
}(SpeakeasyBase));
export { GenerateDataKeyPairWithoutPlaintextResponse };
