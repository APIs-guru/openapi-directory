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
var CreateSegmentPathParams = /** @class */ (function (_super) {
    __extends(CreateSegmentPathParams, _super);
    function CreateSegmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], CreateSegmentPathParams.prototype, "applicationId", void 0);
    return CreateSegmentPathParams;
}(SpeakeasyBase));
export { CreateSegmentPathParams };
var CreateSegmentHeaders = /** @class */ (function (_super) {
    __extends(CreateSegmentHeaders, _super);
    function CreateSegmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSegmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSegmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSegmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSegmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSegmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSegmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSegmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSegmentHeaders;
}(SpeakeasyBase));
export { CreateSegmentHeaders };
// CreateSegmentRequestBodyWriteSegmentRequest
/**
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
**/
var CreateSegmentRequestBodyWriteSegmentRequest = /** @class */ (function (_super) {
    __extends(CreateSegmentRequestBodyWriteSegmentRequest, _super);
    function CreateSegmentRequestBodyWriteSegmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dimensions" }),
        __metadata("design:type", shared.SegmentDimensions)
    ], CreateSegmentRequestBodyWriteSegmentRequest.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateSegmentRequestBodyWriteSegmentRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentGroups" }),
        __metadata("design:type", shared.SegmentGroupList)
    ], CreateSegmentRequestBodyWriteSegmentRequest.prototype, "segmentGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateSegmentRequestBodyWriteSegmentRequest.prototype, "tags", void 0);
    return CreateSegmentRequestBodyWriteSegmentRequest;
}(SpeakeasyBase));
export { CreateSegmentRequestBodyWriteSegmentRequest };
var CreateSegmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateSegmentRequestBody, _super);
    function CreateSegmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteSegmentRequest" }),
        __metadata("design:type", CreateSegmentRequestBodyWriteSegmentRequest)
    ], CreateSegmentRequestBody.prototype, "writeSegmentRequest", void 0);
    return CreateSegmentRequestBody;
}(SpeakeasyBase));
export { CreateSegmentRequestBody };
var CreateSegmentRequest = /** @class */ (function (_super) {
    __extends(CreateSegmentRequest, _super);
    function CreateSegmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSegmentPathParams)
    ], CreateSegmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSegmentHeaders)
    ], CreateSegmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSegmentRequestBody)
    ], CreateSegmentRequest.prototype, "request", void 0);
    return CreateSegmentRequest;
}(SpeakeasyBase));
export { CreateSegmentRequest };
var CreateSegmentResponse = /** @class */ (function (_super) {
    __extends(CreateSegmentResponse, _super);
    function CreateSegmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSegmentResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSegmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSegmentResponse)
    ], CreateSegmentResponse.prototype, "createSegmentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSegmentResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSegmentResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSegmentResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSegmentResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSegmentResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSegmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSegmentResponse.prototype, "tooManyRequestsException", void 0);
    return CreateSegmentResponse;
}(SpeakeasyBase));
export { CreateSegmentResponse };
