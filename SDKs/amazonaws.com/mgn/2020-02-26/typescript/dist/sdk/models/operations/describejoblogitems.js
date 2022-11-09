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
var DescribeJobLogItemsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeJobLogItemsQueryParams, _super);
    function DescribeJobLogItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsQueryParams.prototype, "nextToken", void 0);
    return DescribeJobLogItemsQueryParams;
}(SpeakeasyBase));
export { DescribeJobLogItemsQueryParams };
var DescribeJobLogItemsHeaders = /** @class */ (function (_super) {
    __extends(DescribeJobLogItemsHeaders, _super);
    function DescribeJobLogItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeJobLogItemsHeaders;
}(SpeakeasyBase));
export { DescribeJobLogItemsHeaders };
var DescribeJobLogItemsRequestBody = /** @class */ (function (_super) {
    __extends(DescribeJobLogItemsRequestBody, _super);
    function DescribeJobLogItemsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=jobID" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsRequestBody.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeJobLogItemsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeJobLogItemsRequestBody.prototype, "nextToken", void 0);
    return DescribeJobLogItemsRequestBody;
}(SpeakeasyBase));
export { DescribeJobLogItemsRequestBody };
var DescribeJobLogItemsRequest = /** @class */ (function (_super) {
    __extends(DescribeJobLogItemsRequest, _super);
    function DescribeJobLogItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeJobLogItemsQueryParams)
    ], DescribeJobLogItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeJobLogItemsHeaders)
    ], DescribeJobLogItemsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeJobLogItemsRequestBody)
    ], DescribeJobLogItemsRequest.prototype, "request", void 0);
    return DescribeJobLogItemsRequest;
}(SpeakeasyBase));
export { DescribeJobLogItemsRequest };
var DescribeJobLogItemsResponse = /** @class */ (function (_super) {
    __extends(DescribeJobLogItemsResponse, _super);
    function DescribeJobLogItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeJobLogItemsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeJobLogItemsResponse)
    ], DescribeJobLogItemsResponse.prototype, "describeJobLogItemsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeJobLogItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeJobLogItemsResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeJobLogItemsResponse.prototype, "validationException", void 0);
    return DescribeJobLogItemsResponse;
}(SpeakeasyBase));
export { DescribeJobLogItemsResponse };
