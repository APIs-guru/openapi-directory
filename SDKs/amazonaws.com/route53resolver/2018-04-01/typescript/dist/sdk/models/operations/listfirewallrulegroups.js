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
var ListFirewallRuleGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListFirewallRuleGroupsQueryParams, _super);
    function ListFirewallRuleGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsQueryParams.prototype, "nextToken", void 0);
    return ListFirewallRuleGroupsQueryParams;
}(SpeakeasyBase));
export { ListFirewallRuleGroupsQueryParams };
export var ListFirewallRuleGroupsXAmzTargetEnum;
(function (ListFirewallRuleGroupsXAmzTargetEnum) {
    ListFirewallRuleGroupsXAmzTargetEnum["Route53ResolverListFirewallRuleGroups"] = "Route53Resolver.ListFirewallRuleGroups";
})(ListFirewallRuleGroupsXAmzTargetEnum || (ListFirewallRuleGroupsXAmzTargetEnum = {}));
var ListFirewallRuleGroupsHeaders = /** @class */ (function (_super) {
    __extends(ListFirewallRuleGroupsHeaders, _super);
    function ListFirewallRuleGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsHeaders.prototype, "xAmzTarget", void 0);
    return ListFirewallRuleGroupsHeaders;
}(SpeakeasyBase));
export { ListFirewallRuleGroupsHeaders };
var ListFirewallRuleGroupsRequest = /** @class */ (function (_super) {
    __extends(ListFirewallRuleGroupsRequest, _super);
    function ListFirewallRuleGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListFirewallRuleGroupsQueryParams)
    ], ListFirewallRuleGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFirewallRuleGroupsHeaders)
    ], ListFirewallRuleGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListFirewallRuleGroupsRequest)
    ], ListFirewallRuleGroupsRequest.prototype, "request", void 0);
    return ListFirewallRuleGroupsRequest;
}(SpeakeasyBase));
export { ListFirewallRuleGroupsRequest };
var ListFirewallRuleGroupsResponse = /** @class */ (function (_super) {
    __extends(ListFirewallRuleGroupsResponse, _super);
    function ListFirewallRuleGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallRuleGroupsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFirewallRuleGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallRuleGroupsResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListFirewallRuleGroupsResponse)
    ], ListFirewallRuleGroupsResponse.prototype, "listFirewallRuleGroupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFirewallRuleGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallRuleGroupsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallRuleGroupsResponse.prototype, "validationException", void 0);
    return ListFirewallRuleGroupsResponse;
}(SpeakeasyBase));
export { ListFirewallRuleGroupsResponse };
