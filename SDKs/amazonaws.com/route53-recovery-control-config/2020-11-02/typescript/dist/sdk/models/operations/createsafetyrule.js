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
var CreateSafetyRuleHeaders = /** @class */ (function (_super) {
    __extends(CreateSafetyRuleHeaders, _super);
    function CreateSafetyRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSafetyRuleHeaders;
}(SpeakeasyBase));
export { CreateSafetyRuleHeaders };
// CreateSafetyRuleRequestBodyAssertionRule
/**
 * A new assertion rule for a control panel.
**/
var CreateSafetyRuleRequestBodyAssertionRule = /** @class */ (function (_super) {
    __extends(CreateSafetyRuleRequestBodyAssertionRule, _super);
    function CreateSafetyRuleRequestBodyAssertionRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssertedControls" }),
        __metadata("design:type", Array)
    ], CreateSafetyRuleRequestBodyAssertionRule.prototype, "assertedControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlPanelArn" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleRequestBodyAssertionRule.prototype, "controlPanelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleRequestBodyAssertionRule.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleConfig" }),
        __metadata("design:type", shared.RuleConfig)
    ], CreateSafetyRuleRequestBodyAssertionRule.prototype, "ruleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" }),
        __metadata("design:type", Number)
    ], CreateSafetyRuleRequestBodyAssertionRule.prototype, "waitPeriodMs", void 0);
    return CreateSafetyRuleRequestBodyAssertionRule;
}(SpeakeasyBase));
export { CreateSafetyRuleRequestBodyAssertionRule };
// CreateSafetyRuleRequestBodyGatingRule
/**
 * A new gating rule for a control panel.
**/
var CreateSafetyRuleRequestBodyGatingRule = /** @class */ (function (_super) {
    __extends(CreateSafetyRuleRequestBodyGatingRule, _super);
    function CreateSafetyRuleRequestBodyGatingRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlPanelArn" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleRequestBodyGatingRule.prototype, "controlPanelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GatingControls" }),
        __metadata("design:type", Array)
    ], CreateSafetyRuleRequestBodyGatingRule.prototype, "gatingControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleRequestBodyGatingRule.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleConfig" }),
        __metadata("design:type", shared.RuleConfig)
    ], CreateSafetyRuleRequestBodyGatingRule.prototype, "ruleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetControls" }),
        __metadata("design:type", Array)
    ], CreateSafetyRuleRequestBodyGatingRule.prototype, "targetControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" }),
        __metadata("design:type", Number)
    ], CreateSafetyRuleRequestBodyGatingRule.prototype, "waitPeriodMs", void 0);
    return CreateSafetyRuleRequestBodyGatingRule;
}(SpeakeasyBase));
export { CreateSafetyRuleRequestBodyGatingRule };
var CreateSafetyRuleRequestBody = /** @class */ (function (_super) {
    __extends(CreateSafetyRuleRequestBody, _super);
    function CreateSafetyRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssertionRule" }),
        __metadata("design:type", CreateSafetyRuleRequestBodyAssertionRule)
    ], CreateSafetyRuleRequestBody.prototype, "assertionRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], CreateSafetyRuleRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GatingRule" }),
        __metadata("design:type", CreateSafetyRuleRequestBodyGatingRule)
    ], CreateSafetyRuleRequestBody.prototype, "gatingRule", void 0);
    return CreateSafetyRuleRequestBody;
}(SpeakeasyBase));
export { CreateSafetyRuleRequestBody };
var CreateSafetyRuleRequest = /** @class */ (function (_super) {
    __extends(CreateSafetyRuleRequest, _super);
    function CreateSafetyRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSafetyRuleHeaders)
    ], CreateSafetyRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSafetyRuleRequestBody)
    ], CreateSafetyRuleRequest.prototype, "request", void 0);
    return CreateSafetyRuleRequest;
}(SpeakeasyBase));
export { CreateSafetyRuleRequest };
var CreateSafetyRuleResponse = /** @class */ (function (_super) {
    __extends(CreateSafetyRuleResponse, _super);
    function CreateSafetyRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSafetyRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSafetyRuleResponse)
    ], CreateSafetyRuleResponse.prototype, "createSafetyRuleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSafetyRuleResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSafetyRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSafetyRuleResponse.prototype, "validationException", void 0);
    return CreateSafetyRuleResponse;
}(SpeakeasyBase));
export { CreateSafetyRuleResponse };
