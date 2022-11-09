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
var BatchDeleteDevicePositionHistoryPathParams = /** @class */ (function (_super) {
    __extends(BatchDeleteDevicePositionHistoryPathParams, _super);
    function BatchDeleteDevicePositionHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryPathParams.prototype, "trackerName", void 0);
    return BatchDeleteDevicePositionHistoryPathParams;
}(SpeakeasyBase));
export { BatchDeleteDevicePositionHistoryPathParams };
var BatchDeleteDevicePositionHistoryHeaders = /** @class */ (function (_super) {
    __extends(BatchDeleteDevicePositionHistoryHeaders, _super);
    function BatchDeleteDevicePositionHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchDeleteDevicePositionHistoryHeaders;
}(SpeakeasyBase));
export { BatchDeleteDevicePositionHistoryHeaders };
var BatchDeleteDevicePositionHistoryRequestBody = /** @class */ (function (_super) {
    __extends(BatchDeleteDevicePositionHistoryRequestBody, _super);
    function BatchDeleteDevicePositionHistoryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DeviceIds" }),
        __metadata("design:type", Array)
    ], BatchDeleteDevicePositionHistoryRequestBody.prototype, "deviceIds", void 0);
    return BatchDeleteDevicePositionHistoryRequestBody;
}(SpeakeasyBase));
export { BatchDeleteDevicePositionHistoryRequestBody };
var BatchDeleteDevicePositionHistoryRequest = /** @class */ (function (_super) {
    __extends(BatchDeleteDevicePositionHistoryRequest, _super);
    function BatchDeleteDevicePositionHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDeleteDevicePositionHistoryPathParams)
    ], BatchDeleteDevicePositionHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDeleteDevicePositionHistoryHeaders)
    ], BatchDeleteDevicePositionHistoryRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchDeleteDevicePositionHistoryRequestBody)
    ], BatchDeleteDevicePositionHistoryRequest.prototype, "request", void 0);
    return BatchDeleteDevicePositionHistoryRequest;
}(SpeakeasyBase));
export { BatchDeleteDevicePositionHistoryRequest };
var BatchDeleteDevicePositionHistoryResponse = /** @class */ (function (_super) {
    __extends(BatchDeleteDevicePositionHistoryResponse, _super);
    function BatchDeleteDevicePositionHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchDeleteDevicePositionHistoryResponse)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "batchDeleteDevicePositionHistoryResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteDevicePositionHistoryResponse.prototype, "validationException", void 0);
    return BatchDeleteDevicePositionHistoryResponse;
}(SpeakeasyBase));
export { BatchDeleteDevicePositionHistoryResponse };
