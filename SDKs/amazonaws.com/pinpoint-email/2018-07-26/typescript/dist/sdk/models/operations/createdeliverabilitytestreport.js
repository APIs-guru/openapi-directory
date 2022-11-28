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
var CreateDeliverabilityTestReportHeaders = /** @class */ (function (_super) {
    __extends(CreateDeliverabilityTestReportHeaders, _super);
    function CreateDeliverabilityTestReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDeliverabilityTestReportHeaders;
}(SpeakeasyBase));
export { CreateDeliverabilityTestReportHeaders };
// CreateDeliverabilityTestReportRequestBodyContent
/**
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
**/
var CreateDeliverabilityTestReportRequestBodyContent = /** @class */ (function (_super) {
    __extends(CreateDeliverabilityTestReportRequestBodyContent, _super);
    function CreateDeliverabilityTestReportRequestBodyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Raw" }),
        __metadata("design:type", shared.RawMessage)
    ], CreateDeliverabilityTestReportRequestBodyContent.prototype, "raw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Simple" }),
        __metadata("design:type", shared.Message)
    ], CreateDeliverabilityTestReportRequestBodyContent.prototype, "simple", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Template" }),
        __metadata("design:type", shared.Template)
    ], CreateDeliverabilityTestReportRequestBodyContent.prototype, "template", void 0);
    return CreateDeliverabilityTestReportRequestBodyContent;
}(SpeakeasyBase));
export { CreateDeliverabilityTestReportRequestBodyContent };
var CreateDeliverabilityTestReportRequestBody = /** @class */ (function (_super) {
    __extends(CreateDeliverabilityTestReportRequestBody, _super);
    function CreateDeliverabilityTestReportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Content" }),
        __metadata("design:type", CreateDeliverabilityTestReportRequestBodyContent)
    ], CreateDeliverabilityTestReportRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FromEmailAddress" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportRequestBody.prototype, "fromEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportName" }),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportRequestBody.prototype, "reportName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDeliverabilityTestReportRequestBody.prototype, "tags", void 0);
    return CreateDeliverabilityTestReportRequestBody;
}(SpeakeasyBase));
export { CreateDeliverabilityTestReportRequestBody };
var CreateDeliverabilityTestReportRequest = /** @class */ (function (_super) {
    __extends(CreateDeliverabilityTestReportRequest, _super);
    function CreateDeliverabilityTestReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeliverabilityTestReportHeaders)
    ], CreateDeliverabilityTestReportRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDeliverabilityTestReportRequestBody)
    ], CreateDeliverabilityTestReportRequest.prototype, "request", void 0);
    return CreateDeliverabilityTestReportRequest;
}(SpeakeasyBase));
export { CreateDeliverabilityTestReportRequest };
var CreateDeliverabilityTestReportResponse = /** @class */ (function (_super) {
    __extends(CreateDeliverabilityTestReportResponse, _super);
    function CreateDeliverabilityTestReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "accountSuspendedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeliverabilityTestReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDeliverabilityTestReportResponse)
    ], CreateDeliverabilityTestReportResponse.prototype, "createDeliverabilityTestReportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "mailFromDomainNotVerifiedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "messageRejected", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "sendingPausedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeliverabilityTestReportResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDeliverabilityTestReportResponse.prototype, "tooManyRequestsException", void 0);
    return CreateDeliverabilityTestReportResponse;
}(SpeakeasyBase));
export { CreateDeliverabilityTestReportResponse };
