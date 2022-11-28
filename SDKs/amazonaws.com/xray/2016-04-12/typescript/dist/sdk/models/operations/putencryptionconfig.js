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
var PutEncryptionConfigHeaders = /** @class */ (function (_super) {
    __extends(PutEncryptionConfigHeaders, _super);
    function PutEncryptionConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutEncryptionConfigHeaders;
}(SpeakeasyBase));
export { PutEncryptionConfigHeaders };
export var PutEncryptionConfigRequestBodyTypeEnum;
(function (PutEncryptionConfigRequestBodyTypeEnum) {
    PutEncryptionConfigRequestBodyTypeEnum["None"] = "NONE";
    PutEncryptionConfigRequestBodyTypeEnum["Kms"] = "KMS";
})(PutEncryptionConfigRequestBodyTypeEnum || (PutEncryptionConfigRequestBodyTypeEnum = {}));
var PutEncryptionConfigRequestBody = /** @class */ (function (_super) {
    __extends(PutEncryptionConfigRequestBody, _super);
    function PutEncryptionConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyId" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigRequestBody.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], PutEncryptionConfigRequestBody.prototype, "type", void 0);
    return PutEncryptionConfigRequestBody;
}(SpeakeasyBase));
export { PutEncryptionConfigRequestBody };
var PutEncryptionConfigRequest = /** @class */ (function (_super) {
    __extends(PutEncryptionConfigRequest, _super);
    function PutEncryptionConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEncryptionConfigHeaders)
    ], PutEncryptionConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutEncryptionConfigRequestBody)
    ], PutEncryptionConfigRequest.prototype, "request", void 0);
    return PutEncryptionConfigRequest;
}(SpeakeasyBase));
export { PutEncryptionConfigRequest };
var PutEncryptionConfigResponse = /** @class */ (function (_super) {
    __extends(PutEncryptionConfigResponse, _super);
    function PutEncryptionConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutEncryptionConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEncryptionConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutEncryptionConfigResult)
    ], PutEncryptionConfigResponse.prototype, "putEncryptionConfigResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutEncryptionConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEncryptionConfigResponse.prototype, "throttledException", void 0);
    return PutEncryptionConfigResponse;
}(SpeakeasyBase));
export { PutEncryptionConfigResponse };
