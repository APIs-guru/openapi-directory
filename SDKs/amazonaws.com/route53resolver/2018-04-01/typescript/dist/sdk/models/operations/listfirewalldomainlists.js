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
var ListFirewallDomainListsQueryParams = /** @class */ (function (_super) {
    __extends(ListFirewallDomainListsQueryParams, _super);
    function ListFirewallDomainListsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsQueryParams.prototype, "nextToken", void 0);
    return ListFirewallDomainListsQueryParams;
}(SpeakeasyBase));
export { ListFirewallDomainListsQueryParams };
export var ListFirewallDomainListsXAmzTargetEnum;
(function (ListFirewallDomainListsXAmzTargetEnum) {
    ListFirewallDomainListsXAmzTargetEnum["Route53ResolverListFirewallDomainLists"] = "Route53Resolver.ListFirewallDomainLists";
})(ListFirewallDomainListsXAmzTargetEnum || (ListFirewallDomainListsXAmzTargetEnum = {}));
var ListFirewallDomainListsHeaders = /** @class */ (function (_super) {
    __extends(ListFirewallDomainListsHeaders, _super);
    function ListFirewallDomainListsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListFirewallDomainListsHeaders.prototype, "xAmzTarget", void 0);
    return ListFirewallDomainListsHeaders;
}(SpeakeasyBase));
export { ListFirewallDomainListsHeaders };
var ListFirewallDomainListsRequest = /** @class */ (function (_super) {
    __extends(ListFirewallDomainListsRequest, _super);
    function ListFirewallDomainListsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListFirewallDomainListsQueryParams)
    ], ListFirewallDomainListsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFirewallDomainListsHeaders)
    ], ListFirewallDomainListsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListFirewallDomainListsRequest)
    ], ListFirewallDomainListsRequest.prototype, "request", void 0);
    return ListFirewallDomainListsRequest;
}(SpeakeasyBase));
export { ListFirewallDomainListsRequest };
var ListFirewallDomainListsResponse = /** @class */ (function (_super) {
    __extends(ListFirewallDomainListsResponse, _super);
    function ListFirewallDomainListsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainListsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFirewallDomainListsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainListsResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListFirewallDomainListsResponse)
    ], ListFirewallDomainListsResponse.prototype, "listFirewallDomainListsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFirewallDomainListsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainListsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainListsResponse.prototype, "validationException", void 0);
    return ListFirewallDomainListsResponse;
}(SpeakeasyBase));
export { ListFirewallDomainListsResponse };
