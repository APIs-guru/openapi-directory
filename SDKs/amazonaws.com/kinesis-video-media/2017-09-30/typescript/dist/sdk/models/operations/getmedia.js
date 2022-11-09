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
var GetMediaHeaders = /** @class */ (function (_super) {
    __extends(GetMediaHeaders, _super);
    function GetMediaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetMediaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetMediaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetMediaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetMediaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetMediaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetMediaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetMediaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetMediaHeaders;
}(SpeakeasyBase));
export { GetMediaHeaders };
// GetMediaRequestBodyStartSelector
/**
 * <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
**/
var GetMediaRequestBodyStartSelector = /** @class */ (function (_super) {
    __extends(GetMediaRequestBodyStartSelector, _super);
    function GetMediaRequestBodyStartSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AfterFragmentNumber" }),
        __metadata("design:type", String)
    ], GetMediaRequestBodyStartSelector.prototype, "afterFragmentNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=ContinuationToken" }),
        __metadata("design:type", String)
    ], GetMediaRequestBodyStartSelector.prototype, "continuationToken", void 0);
    __decorate([
        Metadata({ data: "json, name=StartSelectorType" }),
        __metadata("design:type", String)
    ], GetMediaRequestBodyStartSelector.prototype, "startSelectorType", void 0);
    __decorate([
        Metadata({ data: "json, name=StartTimestamp" }),
        __metadata("design:type", Date)
    ], GetMediaRequestBodyStartSelector.prototype, "startTimestamp", void 0);
    return GetMediaRequestBodyStartSelector;
}(SpeakeasyBase));
export { GetMediaRequestBodyStartSelector };
var GetMediaRequestBody = /** @class */ (function (_super) {
    __extends(GetMediaRequestBody, _super);
    function GetMediaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=StartSelector" }),
        __metadata("design:type", GetMediaRequestBodyStartSelector)
    ], GetMediaRequestBody.prototype, "startSelector", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamARN" }),
        __metadata("design:type", String)
    ], GetMediaRequestBody.prototype, "streamArn", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], GetMediaRequestBody.prototype, "streamName", void 0);
    return GetMediaRequestBody;
}(SpeakeasyBase));
export { GetMediaRequestBody };
var GetMediaRequest = /** @class */ (function (_super) {
    __extends(GetMediaRequest, _super);
    function GetMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMediaHeaders)
    ], GetMediaRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetMediaRequestBody)
    ], GetMediaRequest.prototype, "request", void 0);
    return GetMediaRequest;
}(SpeakeasyBase));
export { GetMediaRequest };
var GetMediaResponse = /** @class */ (function (_super) {
    __extends(GetMediaResponse, _super);
    function GetMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMediaResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMediaResponse.prototype, "connectionLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMediaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetMediaOutput)
    ], GetMediaResponse.prototype, "getMediaOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMediaResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMediaResponse.prototype, "invalidEndpointException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMediaResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMediaResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMediaResponse.prototype, "statusCode", void 0);
    return GetMediaResponse;
}(SpeakeasyBase));
export { GetMediaResponse };
