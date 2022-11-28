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
var UpdateSamplingRuleHeaders = /** @class */ (function (_super) {
    __extends(UpdateSamplingRuleHeaders, _super);
    function UpdateSamplingRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSamplingRuleHeaders;
}(SpeakeasyBase));
export { UpdateSamplingRuleHeaders };
// UpdateSamplingRuleRequestBodySamplingRuleUpdate
/**
 * A document specifying changes to a sampling rule's configuration.
**/
var UpdateSamplingRuleRequestBodySamplingRuleUpdate = /** @class */ (function (_super) {
    __extends(UpdateSamplingRuleRequestBodySamplingRuleUpdate, _super);
    function UpdateSamplingRuleRequestBodySamplingRuleUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedRate" }),
        __metadata("design:type", Number)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "fixedRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HTTPMethod" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Host" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReservoirSize" }),
        __metadata("design:type", Number)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "reservoirSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleARN" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "ruleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleName" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "ruleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceType" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=URLPath" }),
        __metadata("design:type", String)
    ], UpdateSamplingRuleRequestBodySamplingRuleUpdate.prototype, "urlPath", void 0);
    return UpdateSamplingRuleRequestBodySamplingRuleUpdate;
}(SpeakeasyBase));
export { UpdateSamplingRuleRequestBodySamplingRuleUpdate };
var UpdateSamplingRuleRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSamplingRuleRequestBody, _super);
    function UpdateSamplingRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SamplingRuleUpdate" }),
        __metadata("design:type", UpdateSamplingRuleRequestBodySamplingRuleUpdate)
    ], UpdateSamplingRuleRequestBody.prototype, "samplingRuleUpdate", void 0);
    return UpdateSamplingRuleRequestBody;
}(SpeakeasyBase));
export { UpdateSamplingRuleRequestBody };
var UpdateSamplingRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateSamplingRuleRequest, _super);
    function UpdateSamplingRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSamplingRuleHeaders)
    ], UpdateSamplingRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSamplingRuleRequestBody)
    ], UpdateSamplingRuleRequest.prototype, "request", void 0);
    return UpdateSamplingRuleRequest;
}(SpeakeasyBase));
export { UpdateSamplingRuleRequest };
var UpdateSamplingRuleResponse = /** @class */ (function (_super) {
    __extends(UpdateSamplingRuleResponse, _super);
    function UpdateSamplingRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSamplingRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSamplingRuleResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSamplingRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSamplingRuleResponse.prototype, "throttledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSamplingRuleResult)
    ], UpdateSamplingRuleResponse.prototype, "updateSamplingRuleResult", void 0);
    return UpdateSamplingRuleResponse;
}(SpeakeasyBase));
export { UpdateSamplingRuleResponse };
