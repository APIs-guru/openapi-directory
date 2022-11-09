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
var ListTagsForStreamHeaders = /** @class */ (function (_super) {
    __extends(ListTagsForStreamHeaders, _super);
    function ListTagsForStreamHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTagsForStreamHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTagsForStreamHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTagsForStreamHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTagsForStreamHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTagsForStreamHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTagsForStreamHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTagsForStreamHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListTagsForStreamHeaders;
}(SpeakeasyBase));
export { ListTagsForStreamHeaders };
var ListTagsForStreamRequestBody = /** @class */ (function (_super) {
    __extends(ListTagsForStreamRequestBody, _super);
    function ListTagsForStreamRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListTagsForStreamRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamARN" }),
        __metadata("design:type", String)
    ], ListTagsForStreamRequestBody.prototype, "streamArn", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], ListTagsForStreamRequestBody.prototype, "streamName", void 0);
    return ListTagsForStreamRequestBody;
}(SpeakeasyBase));
export { ListTagsForStreamRequestBody };
var ListTagsForStreamRequest = /** @class */ (function (_super) {
    __extends(ListTagsForStreamRequest, _super);
    function ListTagsForStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListTagsForStreamHeaders)
    ], ListTagsForStreamRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListTagsForStreamRequestBody)
    ], ListTagsForStreamRequest.prototype, "request", void 0);
    return ListTagsForStreamRequest;
}(SpeakeasyBase));
export { ListTagsForStreamRequest };
var ListTagsForStreamResponse = /** @class */ (function (_super) {
    __extends(ListTagsForStreamResponse, _super);
    function ListTagsForStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTagsForStreamResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTagsForStreamResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTagsForStreamResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTagsForStreamResponse.prototype, "invalidResourceFormatException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTagsForStreamOutput)
    ], ListTagsForStreamResponse.prototype, "listTagsForStreamOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTagsForStreamResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTagsForStreamResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTagsForStreamResponse.prototype, "statusCode", void 0);
    return ListTagsForStreamResponse;
}(SpeakeasyBase));
export { ListTagsForStreamResponse };
