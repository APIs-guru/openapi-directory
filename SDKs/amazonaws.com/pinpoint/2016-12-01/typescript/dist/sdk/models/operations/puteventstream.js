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
var PutEventStreamPathParams = /** @class */ (function (_super) {
    __extends(PutEventStreamPathParams, _super);
    function PutEventStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], PutEventStreamPathParams.prototype, "applicationId", void 0);
    return PutEventStreamPathParams;
}(SpeakeasyBase));
export { PutEventStreamPathParams };
var PutEventStreamHeaders = /** @class */ (function (_super) {
    __extends(PutEventStreamHeaders, _super);
    function PutEventStreamHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutEventStreamHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutEventStreamHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutEventStreamHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutEventStreamHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutEventStreamHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutEventStreamHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutEventStreamHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutEventStreamHeaders;
}(SpeakeasyBase));
export { PutEventStreamHeaders };
// PutEventStreamRequestBodyWriteEventStream
/**
 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
**/
var PutEventStreamRequestBodyWriteEventStream = /** @class */ (function (_super) {
    __extends(PutEventStreamRequestBodyWriteEventStream, _super);
    function PutEventStreamRequestBodyWriteEventStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationStreamArn" }),
        __metadata("design:type", String)
    ], PutEventStreamRequestBodyWriteEventStream.prototype, "destinationStreamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], PutEventStreamRequestBodyWriteEventStream.prototype, "roleArn", void 0);
    return PutEventStreamRequestBodyWriteEventStream;
}(SpeakeasyBase));
export { PutEventStreamRequestBodyWriteEventStream };
var PutEventStreamRequestBody = /** @class */ (function (_super) {
    __extends(PutEventStreamRequestBody, _super);
    function PutEventStreamRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteEventStream" }),
        __metadata("design:type", PutEventStreamRequestBodyWriteEventStream)
    ], PutEventStreamRequestBody.prototype, "writeEventStream", void 0);
    return PutEventStreamRequestBody;
}(SpeakeasyBase));
export { PutEventStreamRequestBody };
var PutEventStreamRequest = /** @class */ (function (_super) {
    __extends(PutEventStreamRequest, _super);
    function PutEventStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEventStreamPathParams)
    ], PutEventStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEventStreamHeaders)
    ], PutEventStreamRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutEventStreamRequestBody)
    ], PutEventStreamRequest.prototype, "request", void 0);
    return PutEventStreamRequest;
}(SpeakeasyBase));
export { PutEventStreamRequest };
var PutEventStreamResponse = /** @class */ (function (_super) {
    __extends(PutEventStreamResponse, _super);
    function PutEventStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEventStreamResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutEventStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEventStreamResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEventStreamResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEventStreamResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEventStreamResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEventStreamResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutEventStreamResponse)
    ], PutEventStreamResponse.prototype, "putEventStreamResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutEventStreamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEventStreamResponse.prototype, "tooManyRequestsException", void 0);
    return PutEventStreamResponse;
}(SpeakeasyBase));
export { PutEventStreamResponse };
