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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var BatchUpdateDevicePositionPathParams = /** @class */ (function (_super) {
    __extends(BatchUpdateDevicePositionPathParams, _super);
    function BatchUpdateDevicePositionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionPathParams.prototype, "trackerName", void 0);
    return BatchUpdateDevicePositionPathParams;
}(SpeakeasyBase));
export { BatchUpdateDevicePositionPathParams };
var BatchUpdateDevicePositionHeaders = /** @class */ (function (_super) {
    __extends(BatchUpdateDevicePositionHeaders, _super);
    function BatchUpdateDevicePositionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchUpdateDevicePositionHeaders;
}(SpeakeasyBase));
export { BatchUpdateDevicePositionHeaders };
var BatchUpdateDevicePositionRequestBody = /** @class */ (function (_super) {
    __extends(BatchUpdateDevicePositionRequestBody, _super);
    function BatchUpdateDevicePositionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Updates", elemType: shared.DevicePositionUpdate }),
        __metadata("design:type", Array)
    ], BatchUpdateDevicePositionRequestBody.prototype, "updates", void 0);
    return BatchUpdateDevicePositionRequestBody;
}(SpeakeasyBase));
export { BatchUpdateDevicePositionRequestBody };
var BatchUpdateDevicePositionRequest = /** @class */ (function (_super) {
    __extends(BatchUpdateDevicePositionRequest, _super);
    function BatchUpdateDevicePositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpdateDevicePositionPathParams)
    ], BatchUpdateDevicePositionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpdateDevicePositionHeaders)
    ], BatchUpdateDevicePositionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchUpdateDevicePositionRequestBody)
    ], BatchUpdateDevicePositionRequest.prototype, "request", void 0);
    return BatchUpdateDevicePositionRequest;
}(SpeakeasyBase));
export { BatchUpdateDevicePositionRequest };
var BatchUpdateDevicePositionResponse = /** @class */ (function (_super) {
    __extends(BatchUpdateDevicePositionResponse, _super);
    function BatchUpdateDevicePositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDevicePositionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchUpdateDevicePositionResponse)
    ], BatchUpdateDevicePositionResponse.prototype, "batchUpdateDevicePositionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchUpdateDevicePositionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDevicePositionResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDevicePositionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchUpdateDevicePositionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDevicePositionResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateDevicePositionResponse.prototype, "validationException", void 0);
    return BatchUpdateDevicePositionResponse;
}(SpeakeasyBase));
export { BatchUpdateDevicePositionResponse };
