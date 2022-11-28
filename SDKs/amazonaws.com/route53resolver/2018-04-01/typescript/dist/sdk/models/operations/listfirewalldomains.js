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
var ListFirewallDomainsQueryParams = /** @class */ (function (_super) {
    __extends(ListFirewallDomainsQueryParams, _super);
    function ListFirewallDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsQueryParams.prototype, "nextToken", void 0);
    return ListFirewallDomainsQueryParams;
}(SpeakeasyBase));
export { ListFirewallDomainsQueryParams };
export var ListFirewallDomainsXAmzTargetEnum;
(function (ListFirewallDomainsXAmzTargetEnum) {
    ListFirewallDomainsXAmzTargetEnum["Route53ResolverListFirewallDomains"] = "Route53Resolver.ListFirewallDomains";
})(ListFirewallDomainsXAmzTargetEnum || (ListFirewallDomainsXAmzTargetEnum = {}));
var ListFirewallDomainsHeaders = /** @class */ (function (_super) {
    __extends(ListFirewallDomainsHeaders, _super);
    function ListFirewallDomainsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListFirewallDomainsHeaders.prototype, "xAmzTarget", void 0);
    return ListFirewallDomainsHeaders;
}(SpeakeasyBase));
export { ListFirewallDomainsHeaders };
var ListFirewallDomainsRequest = /** @class */ (function (_super) {
    __extends(ListFirewallDomainsRequest, _super);
    function ListFirewallDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFirewallDomainsQueryParams)
    ], ListFirewallDomainsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFirewallDomainsHeaders)
    ], ListFirewallDomainsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListFirewallDomainsRequest)
    ], ListFirewallDomainsRequest.prototype, "request", void 0);
    return ListFirewallDomainsRequest;
}(SpeakeasyBase));
export { ListFirewallDomainsRequest };
var ListFirewallDomainsResponse = /** @class */ (function (_super) {
    __extends(ListFirewallDomainsResponse, _super);
    function ListFirewallDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFirewallDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainsResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFirewallDomainsResponse)
    ], ListFirewallDomainsResponse.prototype, "listFirewallDomainsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFirewallDomainsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFirewallDomainsResponse.prototype, "validationException", void 0);
    return ListFirewallDomainsResponse;
}(SpeakeasyBase));
export { ListFirewallDomainsResponse };
