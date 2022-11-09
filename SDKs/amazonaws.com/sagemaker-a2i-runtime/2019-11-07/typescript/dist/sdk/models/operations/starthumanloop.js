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
var StartHumanLoopHeaders = /** @class */ (function (_super) {
    __extends(StartHumanLoopHeaders, _super);
    function StartHumanLoopHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartHumanLoopHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartHumanLoopHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartHumanLoopHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartHumanLoopHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartHumanLoopHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartHumanLoopHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartHumanLoopHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartHumanLoopHeaders;
}(SpeakeasyBase));
export { StartHumanLoopHeaders };
// StartHumanLoopRequestBodyDataAttributes
/**
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
**/
var StartHumanLoopRequestBodyDataAttributes = /** @class */ (function (_super) {
    __extends(StartHumanLoopRequestBodyDataAttributes, _super);
    function StartHumanLoopRequestBodyDataAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ContentClassifiers" }),
        __metadata("design:type", Array)
    ], StartHumanLoopRequestBodyDataAttributes.prototype, "contentClassifiers", void 0);
    return StartHumanLoopRequestBodyDataAttributes;
}(SpeakeasyBase));
export { StartHumanLoopRequestBodyDataAttributes };
// StartHumanLoopRequestBodyHumanLoopInput
/**
 * An object containing the human loop input in JSON format.
**/
var StartHumanLoopRequestBodyHumanLoopInput = /** @class */ (function (_super) {
    __extends(StartHumanLoopRequestBodyHumanLoopInput, _super);
    function StartHumanLoopRequestBodyHumanLoopInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=InputContent" }),
        __metadata("design:type", String)
    ], StartHumanLoopRequestBodyHumanLoopInput.prototype, "inputContent", void 0);
    return StartHumanLoopRequestBodyHumanLoopInput;
}(SpeakeasyBase));
export { StartHumanLoopRequestBodyHumanLoopInput };
var StartHumanLoopRequestBody = /** @class */ (function (_super) {
    __extends(StartHumanLoopRequestBody, _super);
    function StartHumanLoopRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DataAttributes" }),
        __metadata("design:type", StartHumanLoopRequestBodyDataAttributes)
    ], StartHumanLoopRequestBody.prototype, "dataAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=FlowDefinitionArn" }),
        __metadata("design:type", String)
    ], StartHumanLoopRequestBody.prototype, "flowDefinitionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=HumanLoopInput" }),
        __metadata("design:type", StartHumanLoopRequestBodyHumanLoopInput)
    ], StartHumanLoopRequestBody.prototype, "humanLoopInput", void 0);
    __decorate([
        Metadata({ data: "json, name=HumanLoopName" }),
        __metadata("design:type", String)
    ], StartHumanLoopRequestBody.prototype, "humanLoopName", void 0);
    return StartHumanLoopRequestBody;
}(SpeakeasyBase));
export { StartHumanLoopRequestBody };
var StartHumanLoopRequest = /** @class */ (function (_super) {
    __extends(StartHumanLoopRequest, _super);
    function StartHumanLoopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartHumanLoopHeaders)
    ], StartHumanLoopRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartHumanLoopRequestBody)
    ], StartHumanLoopRequest.prototype, "request", void 0);
    return StartHumanLoopRequest;
}(SpeakeasyBase));
export { StartHumanLoopRequest };
var StartHumanLoopResponse = /** @class */ (function (_super) {
    __extends(StartHumanLoopResponse, _super);
    function StartHumanLoopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartHumanLoopResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartHumanLoopResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartHumanLoopResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartHumanLoopResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartHumanLoopResponse)
    ], StartHumanLoopResponse.prototype, "startHumanLoopResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartHumanLoopResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartHumanLoopResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartHumanLoopResponse.prototype, "validationException", void 0);
    return StartHumanLoopResponse;
}(SpeakeasyBase));
export { StartHumanLoopResponse };
