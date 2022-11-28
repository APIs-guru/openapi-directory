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
var BatchPutGeofencePathParams = /** @class */ (function (_super) {
    __extends(BatchPutGeofencePathParams, _super);
    function BatchPutGeofencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" }),
        __metadata("design:type", String)
    ], BatchPutGeofencePathParams.prototype, "collectionName", void 0);
    return BatchPutGeofencePathParams;
}(SpeakeasyBase));
export { BatchPutGeofencePathParams };
var BatchPutGeofenceHeaders = /** @class */ (function (_super) {
    __extends(BatchPutGeofenceHeaders, _super);
    function BatchPutGeofenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchPutGeofenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchPutGeofenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchPutGeofenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchPutGeofenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchPutGeofenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchPutGeofenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchPutGeofenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchPutGeofenceHeaders;
}(SpeakeasyBase));
export { BatchPutGeofenceHeaders };
var BatchPutGeofenceRequestBody = /** @class */ (function (_super) {
    __extends(BatchPutGeofenceRequestBody, _super);
    function BatchPutGeofenceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Entries", elemType: shared.BatchPutGeofenceRequestEntry }),
        __metadata("design:type", Array)
    ], BatchPutGeofenceRequestBody.prototype, "entries", void 0);
    return BatchPutGeofenceRequestBody;
}(SpeakeasyBase));
export { BatchPutGeofenceRequestBody };
var BatchPutGeofenceRequest = /** @class */ (function (_super) {
    __extends(BatchPutGeofenceRequest, _super);
    function BatchPutGeofenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchPutGeofencePathParams)
    ], BatchPutGeofenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchPutGeofenceHeaders)
    ], BatchPutGeofenceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchPutGeofenceRequestBody)
    ], BatchPutGeofenceRequest.prototype, "request", void 0);
    return BatchPutGeofenceRequest;
}(SpeakeasyBase));
export { BatchPutGeofenceRequest };
var BatchPutGeofenceResponse = /** @class */ (function (_super) {
    __extends(BatchPutGeofenceResponse, _super);
    function BatchPutGeofenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutGeofenceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchPutGeofenceResponse)
    ], BatchPutGeofenceResponse.prototype, "batchPutGeofenceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchPutGeofenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutGeofenceResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutGeofenceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchPutGeofenceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutGeofenceResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchPutGeofenceResponse.prototype, "validationException", void 0);
    return BatchPutGeofenceResponse;
}(SpeakeasyBase));
export { BatchPutGeofenceResponse };
