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
export var CreateFirewallRuleGroupXAmzTargetEnum;
(function (CreateFirewallRuleGroupXAmzTargetEnum) {
    CreateFirewallRuleGroupXAmzTargetEnum["Route53ResolverCreateFirewallRuleGroup"] = "Route53Resolver.CreateFirewallRuleGroup";
})(CreateFirewallRuleGroupXAmzTargetEnum || (CreateFirewallRuleGroupXAmzTargetEnum = {}));
var CreateFirewallRuleGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateFirewallRuleGroupHeaders, _super);
    function CreateFirewallRuleGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupHeaders.prototype, "xAmzTarget", void 0);
    return CreateFirewallRuleGroupHeaders;
}(SpeakeasyBase));
export { CreateFirewallRuleGroupHeaders };
var CreateFirewallRuleGroupRequest = /** @class */ (function (_super) {
    __extends(CreateFirewallRuleGroupRequest, _super);
    function CreateFirewallRuleGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFirewallRuleGroupHeaders)
    ], CreateFirewallRuleGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateFirewallRuleGroupRequest)
    ], CreateFirewallRuleGroupRequest.prototype, "request", void 0);
    return CreateFirewallRuleGroupRequest;
}(SpeakeasyBase));
export { CreateFirewallRuleGroupRequest };
var CreateFirewallRuleGroupResponse = /** @class */ (function (_super) {
    __extends(CreateFirewallRuleGroupResponse, _super);
    function CreateFirewallRuleGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFirewallRuleGroupResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateFirewallRuleGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateFirewallRuleGroupResponse)
    ], CreateFirewallRuleGroupResponse.prototype, "createFirewallRuleGroupResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFirewallRuleGroupResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFirewallRuleGroupResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateFirewallRuleGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFirewallRuleGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFirewallRuleGroupResponse.prototype, "validationException", void 0);
    return CreateFirewallRuleGroupResponse;
}(SpeakeasyBase));
export { CreateFirewallRuleGroupResponse };
