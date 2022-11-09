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
var ListResourcesQueryParams = /** @class */ (function (_super) {
    __extends(ListResourcesQueryParams, _super);
    function ListResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListResourcesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListResourcesQueryParams.prototype, "nextToken", void 0);
    return ListResourcesQueryParams;
}(SpeakeasyBase));
export { ListResourcesQueryParams };
var ListResourcesHeaders = /** @class */ (function (_super) {
    __extends(ListResourcesHeaders, _super);
    function ListResourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListResourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListResourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListResourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListResourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListResourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListResourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListResourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListResourcesHeaders;
}(SpeakeasyBase));
export { ListResourcesHeaders };
export var ListResourcesRequestBodyResourceOwnerEnum;
(function (ListResourcesRequestBodyResourceOwnerEnum) {
    ListResourcesRequestBodyResourceOwnerEnum["Self"] = "SELF";
    ListResourcesRequestBodyResourceOwnerEnum["OtherAccounts"] = "OTHER-ACCOUNTS";
})(ListResourcesRequestBodyResourceOwnerEnum || (ListResourcesRequestBodyResourceOwnerEnum = {}));
var ListResourcesRequestBody = /** @class */ (function (_super) {
    __extends(ListResourcesRequestBody, _super);
    function ListResourcesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListResourcesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListResourcesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=principal" }),
        __metadata("design:type", String)
    ], ListResourcesRequestBody.prototype, "principal", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceArns" }),
        __metadata("design:type", Array)
    ], ListResourcesRequestBody.prototype, "resourceArns", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceOwner" }),
        __metadata("design:type", String)
    ], ListResourcesRequestBody.prototype, "resourceOwner", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceShareArns" }),
        __metadata("design:type", Array)
    ], ListResourcesRequestBody.prototype, "resourceShareArns", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ListResourcesRequestBody.prototype, "resourceType", void 0);
    return ListResourcesRequestBody;
}(SpeakeasyBase));
export { ListResourcesRequestBody };
var ListResourcesRequest = /** @class */ (function (_super) {
    __extends(ListResourcesRequest, _super);
    function ListResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListResourcesQueryParams)
    ], ListResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListResourcesHeaders)
    ], ListResourcesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListResourcesRequestBody)
    ], ListResourcesRequest.prototype, "request", void 0);
    return ListResourcesRequest;
}(SpeakeasyBase));
export { ListResourcesRequest };
var ListResourcesResponse = /** @class */ (function (_super) {
    __extends(ListResourcesResponse, _super);
    function ListResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResourcesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResourcesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResourcesResponse.prototype, "invalidResourceTypeException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListResourcesResponse)
    ], ListResourcesResponse.prototype, "listResourcesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResourcesResponse.prototype, "malformedArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResourcesResponse.prototype, "serverInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResourcesResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResourcesResponse.prototype, "unknownResourceException", void 0);
    return ListResourcesResponse;
}(SpeakeasyBase));
export { ListResourcesResponse };
