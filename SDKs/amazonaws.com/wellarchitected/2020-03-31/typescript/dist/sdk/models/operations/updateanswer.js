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
var UpdateAnswerPathParams = /** @class */ (function (_super) {
    __extends(UpdateAnswerPathParams, _super);
    function UpdateAnswerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" }),
        __metadata("design:type", String)
    ], UpdateAnswerPathParams.prototype, "lensAlias", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QuestionId" }),
        __metadata("design:type", String)
    ], UpdateAnswerPathParams.prototype, "questionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], UpdateAnswerPathParams.prototype, "workloadId", void 0);
    return UpdateAnswerPathParams;
}(SpeakeasyBase));
export { UpdateAnswerPathParams };
var UpdateAnswerHeaders = /** @class */ (function (_super) {
    __extends(UpdateAnswerHeaders, _super);
    function UpdateAnswerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAnswerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAnswerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAnswerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAnswerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAnswerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAnswerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAnswerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAnswerHeaders;
}(SpeakeasyBase));
export { UpdateAnswerHeaders };
export var UpdateAnswerRequestBodyReasonEnum;
(function (UpdateAnswerRequestBodyReasonEnum) {
    UpdateAnswerRequestBodyReasonEnum["OutOfScope"] = "OUT_OF_SCOPE";
    UpdateAnswerRequestBodyReasonEnum["BusinessPriorities"] = "BUSINESS_PRIORITIES";
    UpdateAnswerRequestBodyReasonEnum["ArchitectureConstraints"] = "ARCHITECTURE_CONSTRAINTS";
    UpdateAnswerRequestBodyReasonEnum["Other"] = "OTHER";
    UpdateAnswerRequestBodyReasonEnum["None"] = "NONE";
})(UpdateAnswerRequestBodyReasonEnum || (UpdateAnswerRequestBodyReasonEnum = {}));
var UpdateAnswerRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAnswerRequestBody, _super);
    function UpdateAnswerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ChoiceUpdates", elemType: shared.ChoiceUpdate }),
        __metadata("design:type", Map)
    ], UpdateAnswerRequestBody.prototype, "choiceUpdates", void 0);
    __decorate([
        Metadata({ data: "json, name=IsApplicable" }),
        __metadata("design:type", Boolean)
    ], UpdateAnswerRequestBody.prototype, "isApplicable", void 0);
    __decorate([
        Metadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], UpdateAnswerRequestBody.prototype, "notes", void 0);
    __decorate([
        Metadata({ data: "json, name=Reason" }),
        __metadata("design:type", String)
    ], UpdateAnswerRequestBody.prototype, "reason", void 0);
    __decorate([
        Metadata({ data: "json, name=SelectedChoices" }),
        __metadata("design:type", Array)
    ], UpdateAnswerRequestBody.prototype, "selectedChoices", void 0);
    return UpdateAnswerRequestBody;
}(SpeakeasyBase));
export { UpdateAnswerRequestBody };
var UpdateAnswerRequest = /** @class */ (function (_super) {
    __extends(UpdateAnswerRequest, _super);
    function UpdateAnswerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAnswerPathParams)
    ], UpdateAnswerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAnswerHeaders)
    ], UpdateAnswerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAnswerRequestBody)
    ], UpdateAnswerRequest.prototype, "request", void 0);
    return UpdateAnswerRequest;
}(SpeakeasyBase));
export { UpdateAnswerRequest };
var UpdateAnswerResponse = /** @class */ (function (_super) {
    __extends(UpdateAnswerResponse, _super);
    function UpdateAnswerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAnswerResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAnswerResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAnswerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAnswerResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAnswerResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAnswerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAnswerResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateAnswerOutput)
    ], UpdateAnswerResponse.prototype, "updateAnswerOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAnswerResponse.prototype, "validationException", void 0);
    return UpdateAnswerResponse;
}(SpeakeasyBase));
export { UpdateAnswerResponse };
