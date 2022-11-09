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
var DescribeJobsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeJobsQueryParams, _super);
    function DescribeJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeJobsQueryParams.prototype, "nextToken", void 0);
    return DescribeJobsQueryParams;
}(SpeakeasyBase));
export { DescribeJobsQueryParams };
var DescribeJobsHeaders = /** @class */ (function (_super) {
    __extends(DescribeJobsHeaders, _super);
    function DescribeJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeJobsHeaders;
}(SpeakeasyBase));
export { DescribeJobsHeaders };
// DescribeJobsRequestBodyFilters
/**
 * Request to describe Job log filters.
**/
var DescribeJobsRequestBodyFilters = /** @class */ (function (_super) {
    __extends(DescribeJobsRequestBodyFilters, _super);
    function DescribeJobsRequestBodyFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fromDate" }),
        __metadata("design:type", String)
    ], DescribeJobsRequestBodyFilters.prototype, "fromDate", void 0);
    __decorate([
        Metadata({ data: "json, name=jobIDs" }),
        __metadata("design:type", Array)
    ], DescribeJobsRequestBodyFilters.prototype, "jobIDs", void 0);
    __decorate([
        Metadata({ data: "json, name=toDate" }),
        __metadata("design:type", String)
    ], DescribeJobsRequestBodyFilters.prototype, "toDate", void 0);
    return DescribeJobsRequestBodyFilters;
}(SpeakeasyBase));
export { DescribeJobsRequestBodyFilters };
var DescribeJobsRequestBody = /** @class */ (function (_super) {
    __extends(DescribeJobsRequestBody, _super);
    function DescribeJobsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters" }),
        __metadata("design:type", DescribeJobsRequestBodyFilters)
    ], DescribeJobsRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeJobsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeJobsRequestBody.prototype, "nextToken", void 0);
    return DescribeJobsRequestBody;
}(SpeakeasyBase));
export { DescribeJobsRequestBody };
var DescribeJobsRequest = /** @class */ (function (_super) {
    __extends(DescribeJobsRequest, _super);
    function DescribeJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeJobsQueryParams)
    ], DescribeJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeJobsHeaders)
    ], DescribeJobsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeJobsRequestBody)
    ], DescribeJobsRequest.prototype, "request", void 0);
    return DescribeJobsRequest;
}(SpeakeasyBase));
export { DescribeJobsRequest };
var DescribeJobsResponse = /** @class */ (function (_super) {
    __extends(DescribeJobsResponse, _super);
    function DescribeJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeJobsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeJobsResponse)
    ], DescribeJobsResponse.prototype, "describeJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeJobsResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeJobsResponse.prototype, "validationException", void 0);
    return DescribeJobsResponse;
}(SpeakeasyBase));
export { DescribeJobsResponse };
