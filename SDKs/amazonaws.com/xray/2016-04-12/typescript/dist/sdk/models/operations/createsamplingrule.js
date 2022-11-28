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
var CreateSamplingRuleHeaders = /** @class */ (function (_super) {
    __extends(CreateSamplingRuleHeaders, _super);
    function CreateSamplingRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSamplingRuleHeaders;
}(SpeakeasyBase));
export { CreateSamplingRuleHeaders };
// CreateSamplingRuleRequestBodySamplingRule
/**
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
var CreateSamplingRuleRequestBodySamplingRule = /** @class */ (function (_super) {
    __extends(CreateSamplingRuleRequestBodySamplingRule, _super);
    function CreateSamplingRuleRequestBodySamplingRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedRate" }),
        __metadata("design:type", Number)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "fixedRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HTTPMethod" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Host" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReservoirSize" }),
        __metadata("design:type", Number)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "reservoirSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleARN" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "ruleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleName" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "ruleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceType" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=URLPath" }),
        __metadata("design:type", String)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], CreateSamplingRuleRequestBodySamplingRule.prototype, "version", void 0);
    return CreateSamplingRuleRequestBodySamplingRule;
}(SpeakeasyBase));
export { CreateSamplingRuleRequestBodySamplingRule };
var CreateSamplingRuleRequestBody = /** @class */ (function (_super) {
    __extends(CreateSamplingRuleRequestBody, _super);
    function CreateSamplingRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SamplingRule" }),
        __metadata("design:type", CreateSamplingRuleRequestBodySamplingRule)
    ], CreateSamplingRuleRequestBody.prototype, "samplingRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateSamplingRuleRequestBody.prototype, "tags", void 0);
    return CreateSamplingRuleRequestBody;
}(SpeakeasyBase));
export { CreateSamplingRuleRequestBody };
var CreateSamplingRuleRequest = /** @class */ (function (_super) {
    __extends(CreateSamplingRuleRequest, _super);
    function CreateSamplingRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSamplingRuleHeaders)
    ], CreateSamplingRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSamplingRuleRequestBody)
    ], CreateSamplingRuleRequest.prototype, "request", void 0);
    return CreateSamplingRuleRequest;
}(SpeakeasyBase));
export { CreateSamplingRuleRequest };
var CreateSamplingRuleResponse = /** @class */ (function (_super) {
    __extends(CreateSamplingRuleResponse, _super);
    function CreateSamplingRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSamplingRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSamplingRuleResult)
    ], CreateSamplingRuleResponse.prototype, "createSamplingRuleResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSamplingRuleResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSamplingRuleResponse.prototype, "ruleLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSamplingRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSamplingRuleResponse.prototype, "throttledException", void 0);
    return CreateSamplingRuleResponse;
}(SpeakeasyBase));
export { CreateSamplingRuleResponse };
