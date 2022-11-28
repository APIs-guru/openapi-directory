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
var BatchPutAssetPropertyValueHeaders = /** @class */ (function (_super) {
    __extends(BatchPutAssetPropertyValueHeaders, _super);
    function BatchPutAssetPropertyValueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchPutAssetPropertyValueHeaders;
}(SpeakeasyBase));
export { BatchPutAssetPropertyValueHeaders };
var BatchPutAssetPropertyValueRequestBody = /** @class */ (function (_super) {
    __extends(BatchPutAssetPropertyValueRequestBody, _super);
    function BatchPutAssetPropertyValueRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entries", elemType: shared.PutAssetPropertyValueEntry }),
        __metadata("design:type", Array)
    ], BatchPutAssetPropertyValueRequestBody.prototype, "entries", void 0);
    return BatchPutAssetPropertyValueRequestBody;
}(SpeakeasyBase));
export { BatchPutAssetPropertyValueRequestBody };
var BatchPutAssetPropertyValueRequest = /** @class */ (function (_super) {
    __extends(BatchPutAssetPropertyValueRequest, _super);
    function BatchPutAssetPropertyValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchPutAssetPropertyValueHeaders)
    ], BatchPutAssetPropertyValueRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchPutAssetPropertyValueRequestBody)
    ], BatchPutAssetPropertyValueRequest.prototype, "request", void 0);
    return BatchPutAssetPropertyValueRequest;
}(SpeakeasyBase));
export { BatchPutAssetPropertyValueRequest };
var BatchPutAssetPropertyValueResponse = /** @class */ (function (_super) {
    __extends(BatchPutAssetPropertyValueResponse, _super);
    function BatchPutAssetPropertyValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchPutAssetPropertyValueResponse)
    ], BatchPutAssetPropertyValueResponse.prototype, "batchPutAssetPropertyValueResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutAssetPropertyValueResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchPutAssetPropertyValueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutAssetPropertyValueResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutAssetPropertyValueResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutAssetPropertyValueResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutAssetPropertyValueResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutAssetPropertyValueResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchPutAssetPropertyValueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutAssetPropertyValueResponse.prototype, "throttlingException", void 0);
    return BatchPutAssetPropertyValueResponse;
}(SpeakeasyBase));
export { BatchPutAssetPropertyValueResponse };
