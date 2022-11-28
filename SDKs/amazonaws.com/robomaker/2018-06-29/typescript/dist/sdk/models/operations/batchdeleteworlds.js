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
var BatchDeleteWorldsHeaders = /** @class */ (function (_super) {
    __extends(BatchDeleteWorldsHeaders, _super);
    function BatchDeleteWorldsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchDeleteWorldsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchDeleteWorldsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchDeleteWorldsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchDeleteWorldsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchDeleteWorldsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchDeleteWorldsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchDeleteWorldsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchDeleteWorldsHeaders;
}(SpeakeasyBase));
export { BatchDeleteWorldsHeaders };
var BatchDeleteWorldsRequestBody = /** @class */ (function (_super) {
    __extends(BatchDeleteWorldsRequestBody, _super);
    function BatchDeleteWorldsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=worlds" }),
        __metadata("design:type", Array)
    ], BatchDeleteWorldsRequestBody.prototype, "worlds", void 0);
    return BatchDeleteWorldsRequestBody;
}(SpeakeasyBase));
export { BatchDeleteWorldsRequestBody };
var BatchDeleteWorldsRequest = /** @class */ (function (_super) {
    __extends(BatchDeleteWorldsRequest, _super);
    function BatchDeleteWorldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchDeleteWorldsHeaders)
    ], BatchDeleteWorldsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchDeleteWorldsRequestBody)
    ], BatchDeleteWorldsRequest.prototype, "request", void 0);
    return BatchDeleteWorldsRequest;
}(SpeakeasyBase));
export { BatchDeleteWorldsRequest };
var BatchDeleteWorldsResponse = /** @class */ (function (_super) {
    __extends(BatchDeleteWorldsResponse, _super);
    function BatchDeleteWorldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchDeleteWorldsResponse)
    ], BatchDeleteWorldsResponse.prototype, "batchDeleteWorldsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchDeleteWorldsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchDeleteWorldsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchDeleteWorldsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchDeleteWorldsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchDeleteWorldsResponse.prototype, "throttlingException", void 0);
    return BatchDeleteWorldsResponse;
}(SpeakeasyBase));
export { BatchDeleteWorldsResponse };
