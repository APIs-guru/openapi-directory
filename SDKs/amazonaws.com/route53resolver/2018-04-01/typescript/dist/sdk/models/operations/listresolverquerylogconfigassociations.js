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
var ListResolverQueryLogConfigAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(ListResolverQueryLogConfigAssociationsQueryParams, _super);
    function ListResolverQueryLogConfigAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsQueryParams.prototype, "nextToken", void 0);
    return ListResolverQueryLogConfigAssociationsQueryParams;
}(SpeakeasyBase));
export { ListResolverQueryLogConfigAssociationsQueryParams };
export var ListResolverQueryLogConfigAssociationsXAmzTargetEnum;
(function (ListResolverQueryLogConfigAssociationsXAmzTargetEnum) {
    ListResolverQueryLogConfigAssociationsXAmzTargetEnum["Route53ResolverListResolverQueryLogConfigAssociations"] = "Route53Resolver.ListResolverQueryLogConfigAssociations";
})(ListResolverQueryLogConfigAssociationsXAmzTargetEnum || (ListResolverQueryLogConfigAssociationsXAmzTargetEnum = {}));
var ListResolverQueryLogConfigAssociationsHeaders = /** @class */ (function (_super) {
    __extends(ListResolverQueryLogConfigAssociationsHeaders, _super);
    function ListResolverQueryLogConfigAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsHeaders.prototype, "xAmzTarget", void 0);
    return ListResolverQueryLogConfigAssociationsHeaders;
}(SpeakeasyBase));
export { ListResolverQueryLogConfigAssociationsHeaders };
var ListResolverQueryLogConfigAssociationsRequest = /** @class */ (function (_super) {
    __extends(ListResolverQueryLogConfigAssociationsRequest, _super);
    function ListResolverQueryLogConfigAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListResolverQueryLogConfigAssociationsQueryParams)
    ], ListResolverQueryLogConfigAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListResolverQueryLogConfigAssociationsHeaders)
    ], ListResolverQueryLogConfigAssociationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListResolverQueryLogConfigAssociationsRequest)
    ], ListResolverQueryLogConfigAssociationsRequest.prototype, "request", void 0);
    return ListResolverQueryLogConfigAssociationsRequest;
}(SpeakeasyBase));
export { ListResolverQueryLogConfigAssociationsRequest };
var ListResolverQueryLogConfigAssociationsResponse = /** @class */ (function (_super) {
    __extends(ListResolverQueryLogConfigAssociationsResponse, _super);
    function ListResolverQueryLogConfigAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListResolverQueryLogConfigAssociationsResponse)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "listResolverQueryLogConfigAssociationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResolverQueryLogConfigAssociationsResponse.prototype, "throttlingException", void 0);
    return ListResolverQueryLogConfigAssociationsResponse;
}(SpeakeasyBase));
export { ListResolverQueryLogConfigAssociationsResponse };
