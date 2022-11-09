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
var ListResolverEndpointIpAddressesQueryParams = /** @class */ (function (_super) {
    __extends(ListResolverEndpointIpAddressesQueryParams, _super);
    function ListResolverEndpointIpAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesQueryParams.prototype, "nextToken", void 0);
    return ListResolverEndpointIpAddressesQueryParams;
}(SpeakeasyBase));
export { ListResolverEndpointIpAddressesQueryParams };
export var ListResolverEndpointIpAddressesXAmzTargetEnum;
(function (ListResolverEndpointIpAddressesXAmzTargetEnum) {
    ListResolverEndpointIpAddressesXAmzTargetEnum["Route53ResolverListResolverEndpointIpAddresses"] = "Route53Resolver.ListResolverEndpointIpAddresses";
})(ListResolverEndpointIpAddressesXAmzTargetEnum || (ListResolverEndpointIpAddressesXAmzTargetEnum = {}));
var ListResolverEndpointIpAddressesHeaders = /** @class */ (function (_super) {
    __extends(ListResolverEndpointIpAddressesHeaders, _super);
    function ListResolverEndpointIpAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesHeaders.prototype, "xAmzTarget", void 0);
    return ListResolverEndpointIpAddressesHeaders;
}(SpeakeasyBase));
export { ListResolverEndpointIpAddressesHeaders };
var ListResolverEndpointIpAddressesRequest = /** @class */ (function (_super) {
    __extends(ListResolverEndpointIpAddressesRequest, _super);
    function ListResolverEndpointIpAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListResolverEndpointIpAddressesQueryParams)
    ], ListResolverEndpointIpAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListResolverEndpointIpAddressesHeaders)
    ], ListResolverEndpointIpAddressesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListResolverEndpointIpAddressesRequest)
    ], ListResolverEndpointIpAddressesRequest.prototype, "request", void 0);
    return ListResolverEndpointIpAddressesRequest;
}(SpeakeasyBase));
export { ListResolverEndpointIpAddressesRequest };
var ListResolverEndpointIpAddressesResponse = /** @class */ (function (_super) {
    __extends(ListResolverEndpointIpAddressesResponse, _super);
    function ListResolverEndpointIpAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListResolverEndpointIpAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverEndpointIpAddressesResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverEndpointIpAddressesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverEndpointIpAddressesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListResolverEndpointIpAddressesResponse)
    ], ListResolverEndpointIpAddressesResponse.prototype, "listResolverEndpointIpAddressesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverEndpointIpAddressesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListResolverEndpointIpAddressesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverEndpointIpAddressesResponse.prototype, "throttlingException", void 0);
    return ListResolverEndpointIpAddressesResponse;
}(SpeakeasyBase));
export { ListResolverEndpointIpAddressesResponse };
