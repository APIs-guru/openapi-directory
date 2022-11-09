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
var CreateTimelineEventHeaders = /** @class */ (function (_super) {
    __extends(CreateTimelineEventHeaders, _super);
    function CreateTimelineEventHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateTimelineEventHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateTimelineEventHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateTimelineEventHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateTimelineEventHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateTimelineEventHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateTimelineEventHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateTimelineEventHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateTimelineEventHeaders;
}(SpeakeasyBase));
export { CreateTimelineEventHeaders };
var CreateTimelineEventRequestBody = /** @class */ (function (_super) {
    __extends(CreateTimelineEventRequestBody, _super);
    function CreateTimelineEventRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateTimelineEventRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=eventData" }),
        __metadata("design:type", String)
    ], CreateTimelineEventRequestBody.prototype, "eventData", void 0);
    __decorate([
        Metadata({ data: "json, name=eventTime" }),
        __metadata("design:type", Date)
    ], CreateTimelineEventRequestBody.prototype, "eventTime", void 0);
    __decorate([
        Metadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], CreateTimelineEventRequestBody.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "json, name=incidentRecordArn" }),
        __metadata("design:type", String)
    ], CreateTimelineEventRequestBody.prototype, "incidentRecordArn", void 0);
    return CreateTimelineEventRequestBody;
}(SpeakeasyBase));
export { CreateTimelineEventRequestBody };
var CreateTimelineEventRequest = /** @class */ (function (_super) {
    __extends(CreateTimelineEventRequest, _super);
    function CreateTimelineEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTimelineEventHeaders)
    ], CreateTimelineEventRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTimelineEventRequestBody)
    ], CreateTimelineEventRequest.prototype, "request", void 0);
    return CreateTimelineEventRequest;
}(SpeakeasyBase));
export { CreateTimelineEventRequest };
var CreateTimelineEventResponse = /** @class */ (function (_super) {
    __extends(CreateTimelineEventResponse, _super);
    function CreateTimelineEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTimelineEventResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTimelineEventResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTimelineEventResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateTimelineEventOutput)
    ], CreateTimelineEventResponse.prototype, "createTimelineEventOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTimelineEventResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTimelineEventResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTimelineEventResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTimelineEventResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTimelineEventResponse.prototype, "validationException", void 0);
    return CreateTimelineEventResponse;
}(SpeakeasyBase));
export { CreateTimelineEventResponse };
