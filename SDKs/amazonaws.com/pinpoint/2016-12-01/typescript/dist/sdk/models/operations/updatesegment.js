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
var UpdateSegmentPathParams = /** @class */ (function (_super) {
    __extends(UpdateSegmentPathParams, _super);
    function UpdateSegmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateSegmentPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segment-id" }),
        __metadata("design:type", String)
    ], UpdateSegmentPathParams.prototype, "segmentId", void 0);
    return UpdateSegmentPathParams;
}(SpeakeasyBase));
export { UpdateSegmentPathParams };
var UpdateSegmentHeaders = /** @class */ (function (_super) {
    __extends(UpdateSegmentHeaders, _super);
    function UpdateSegmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSegmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSegmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSegmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSegmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSegmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSegmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSegmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSegmentHeaders;
}(SpeakeasyBase));
export { UpdateSegmentHeaders };
// UpdateSegmentRequestBodyWriteSegmentRequest
/**
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
**/
var UpdateSegmentRequestBodyWriteSegmentRequest = /** @class */ (function (_super) {
    __extends(UpdateSegmentRequestBodyWriteSegmentRequest, _super);
    function UpdateSegmentRequestBodyWriteSegmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dimensions" }),
        __metadata("design:type", shared.SegmentDimensions)
    ], UpdateSegmentRequestBodyWriteSegmentRequest.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateSegmentRequestBodyWriteSegmentRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentGroups" }),
        __metadata("design:type", shared.SegmentGroupList)
    ], UpdateSegmentRequestBodyWriteSegmentRequest.prototype, "segmentGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], UpdateSegmentRequestBodyWriteSegmentRequest.prototype, "tags", void 0);
    return UpdateSegmentRequestBodyWriteSegmentRequest;
}(SpeakeasyBase));
export { UpdateSegmentRequestBodyWriteSegmentRequest };
var UpdateSegmentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSegmentRequestBody, _super);
    function UpdateSegmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteSegmentRequest" }),
        __metadata("design:type", UpdateSegmentRequestBodyWriteSegmentRequest)
    ], UpdateSegmentRequestBody.prototype, "writeSegmentRequest", void 0);
    return UpdateSegmentRequestBody;
}(SpeakeasyBase));
export { UpdateSegmentRequestBody };
var UpdateSegmentRequest = /** @class */ (function (_super) {
    __extends(UpdateSegmentRequest, _super);
    function UpdateSegmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSegmentPathParams)
    ], UpdateSegmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSegmentHeaders)
    ], UpdateSegmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSegmentRequestBody)
    ], UpdateSegmentRequest.prototype, "request", void 0);
    return UpdateSegmentRequest;
}(SpeakeasyBase));
export { UpdateSegmentRequest };
var UpdateSegmentResponse = /** @class */ (function (_super) {
    __extends(UpdateSegmentResponse, _super);
    function UpdateSegmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSegmentResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSegmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSegmentResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSegmentResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSegmentResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSegmentResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSegmentResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSegmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSegmentResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSegmentResponse)
    ], UpdateSegmentResponse.prototype, "updateSegmentResponse", void 0);
    return UpdateSegmentResponse;
}(SpeakeasyBase));
export { UpdateSegmentResponse };
