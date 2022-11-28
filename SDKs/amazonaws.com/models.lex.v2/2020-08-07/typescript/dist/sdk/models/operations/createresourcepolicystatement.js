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
var CreateResourcePolicyStatementPathParams = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyStatementPathParams, _super);
    function CreateResourcePolicyStatementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceArn" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementPathParams.prototype, "resourceArn", void 0);
    return CreateResourcePolicyStatementPathParams;
}(SpeakeasyBase));
export { CreateResourcePolicyStatementPathParams };
var CreateResourcePolicyStatementQueryParams = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyStatementQueryParams, _super);
    function CreateResourcePolicyStatementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expectedRevisionId" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementQueryParams.prototype, "expectedRevisionId", void 0);
    return CreateResourcePolicyStatementQueryParams;
}(SpeakeasyBase));
export { CreateResourcePolicyStatementQueryParams };
var CreateResourcePolicyStatementHeaders = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyStatementHeaders, _super);
    function CreateResourcePolicyStatementHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateResourcePolicyStatementHeaders;
}(SpeakeasyBase));
export { CreateResourcePolicyStatementHeaders };
export var CreateResourcePolicyStatementRequestBodyEffectEnum;
(function (CreateResourcePolicyStatementRequestBodyEffectEnum) {
    CreateResourcePolicyStatementRequestBodyEffectEnum["Allow"] = "Allow";
    CreateResourcePolicyStatementRequestBodyEffectEnum["Deny"] = "Deny";
})(CreateResourcePolicyStatementRequestBodyEffectEnum || (CreateResourcePolicyStatementRequestBodyEffectEnum = {}));
var CreateResourcePolicyStatementRequestBody = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyStatementRequestBody, _super);
    function CreateResourcePolicyStatementRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", Array)
    ], CreateResourcePolicyStatementRequestBody.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", Map)
    ], CreateResourcePolicyStatementRequestBody.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effect" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementRequestBody.prototype, "effect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal", elemType: shared.Principal }),
        __metadata("design:type", Array)
    ], CreateResourcePolicyStatementRequestBody.prototype, "principal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statementId" }),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementRequestBody.prototype, "statementId", void 0);
    return CreateResourcePolicyStatementRequestBody;
}(SpeakeasyBase));
export { CreateResourcePolicyStatementRequestBody };
var CreateResourcePolicyStatementRequest = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyStatementRequest, _super);
    function CreateResourcePolicyStatementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateResourcePolicyStatementPathParams)
    ], CreateResourcePolicyStatementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateResourcePolicyStatementQueryParams)
    ], CreateResourcePolicyStatementRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateResourcePolicyStatementHeaders)
    ], CreateResourcePolicyStatementRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateResourcePolicyStatementRequestBody)
    ], CreateResourcePolicyStatementRequest.prototype, "request", void 0);
    return CreateResourcePolicyStatementRequest;
}(SpeakeasyBase));
export { CreateResourcePolicyStatementRequest };
var CreateResourcePolicyStatementResponse = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyStatementResponse, _super);
    function CreateResourcePolicyStatementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourcePolicyStatementResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateResourcePolicyStatementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateResourcePolicyStatementResponse)
    ], CreateResourcePolicyStatementResponse.prototype, "createResourcePolicyStatementResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourcePolicyStatementResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourcePolicyStatementResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourcePolicyStatementResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourcePolicyStatementResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateResourcePolicyStatementResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourcePolicyStatementResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourcePolicyStatementResponse.prototype, "validationException", void 0);
    return CreateResourcePolicyStatementResponse;
}(SpeakeasyBase));
export { CreateResourcePolicyStatementResponse };
