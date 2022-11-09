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
var ListWebsiteAuthorizationProvidersQueryParams = /** @class */ (function (_super) {
    __extends(ListWebsiteAuthorizationProvidersQueryParams, _super);
    function ListWebsiteAuthorizationProvidersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersQueryParams.prototype, "nextToken", void 0);
    return ListWebsiteAuthorizationProvidersQueryParams;
}(SpeakeasyBase));
export { ListWebsiteAuthorizationProvidersQueryParams };
var ListWebsiteAuthorizationProvidersHeaders = /** @class */ (function (_super) {
    __extends(ListWebsiteAuthorizationProvidersHeaders, _super);
    function ListWebsiteAuthorizationProvidersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListWebsiteAuthorizationProvidersHeaders;
}(SpeakeasyBase));
export { ListWebsiteAuthorizationProvidersHeaders };
var ListWebsiteAuthorizationProvidersRequestBody = /** @class */ (function (_super) {
    __extends(ListWebsiteAuthorizationProvidersRequestBody, _super);
    function ListWebsiteAuthorizationProvidersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersRequestBody.prototype, "fleetArn", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListWebsiteAuthorizationProvidersRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersRequestBody.prototype, "nextToken", void 0);
    return ListWebsiteAuthorizationProvidersRequestBody;
}(SpeakeasyBase));
export { ListWebsiteAuthorizationProvidersRequestBody };
var ListWebsiteAuthorizationProvidersRequest = /** @class */ (function (_super) {
    __extends(ListWebsiteAuthorizationProvidersRequest, _super);
    function ListWebsiteAuthorizationProvidersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebsiteAuthorizationProvidersQueryParams)
    ], ListWebsiteAuthorizationProvidersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebsiteAuthorizationProvidersHeaders)
    ], ListWebsiteAuthorizationProvidersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListWebsiteAuthorizationProvidersRequestBody)
    ], ListWebsiteAuthorizationProvidersRequest.prototype, "request", void 0);
    return ListWebsiteAuthorizationProvidersRequest;
}(SpeakeasyBase));
export { ListWebsiteAuthorizationProvidersRequest };
var ListWebsiteAuthorizationProvidersResponse = /** @class */ (function (_super) {
    __extends(ListWebsiteAuthorizationProvidersResponse, _super);
    function ListWebsiteAuthorizationProvidersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListWebsiteAuthorizationProvidersResponse)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "listWebsiteAuthorizationProvidersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteAuthorizationProvidersResponse.prototype, "unauthorizedException", void 0);
    return ListWebsiteAuthorizationProvidersResponse;
}(SpeakeasyBase));
export { ListWebsiteAuthorizationProvidersResponse };
