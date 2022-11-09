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
var ListDeploymentJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListDeploymentJobsQueryParams, _super);
    function ListDeploymentJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsQueryParams.prototype, "nextToken", void 0);
    return ListDeploymentJobsQueryParams;
}(SpeakeasyBase));
export { ListDeploymentJobsQueryParams };
var ListDeploymentJobsHeaders = /** @class */ (function (_super) {
    __extends(ListDeploymentJobsHeaders, _super);
    function ListDeploymentJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListDeploymentJobsHeaders;
}(SpeakeasyBase));
export { ListDeploymentJobsHeaders };
var ListDeploymentJobsRequestBody = /** @class */ (function (_super) {
    __extends(ListDeploymentJobsRequestBody, _super);
    function ListDeploymentJobsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListDeploymentJobsRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListDeploymentJobsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListDeploymentJobsRequestBody.prototype, "nextToken", void 0);
    return ListDeploymentJobsRequestBody;
}(SpeakeasyBase));
export { ListDeploymentJobsRequestBody };
var ListDeploymentJobsRequest = /** @class */ (function (_super) {
    __extends(ListDeploymentJobsRequest, _super);
    function ListDeploymentJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeploymentJobsQueryParams)
    ], ListDeploymentJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeploymentJobsHeaders)
    ], ListDeploymentJobsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListDeploymentJobsRequestBody)
    ], ListDeploymentJobsRequest.prototype, "request", void 0);
    return ListDeploymentJobsRequest;
}(SpeakeasyBase));
export { ListDeploymentJobsRequest };
var ListDeploymentJobsResponse = /** @class */ (function (_super) {
    __extends(ListDeploymentJobsResponse, _super);
    function ListDeploymentJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDeploymentJobsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDeploymentJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDeploymentJobsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDeploymentJobsResponse)
    ], ListDeploymentJobsResponse.prototype, "listDeploymentJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDeploymentJobsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDeploymentJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDeploymentJobsResponse.prototype, "throttlingException", void 0);
    return ListDeploymentJobsResponse;
}(SpeakeasyBase));
export { ListDeploymentJobsResponse };
