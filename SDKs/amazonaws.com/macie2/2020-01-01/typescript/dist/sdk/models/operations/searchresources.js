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
var SearchResourcesQueryParams = /** @class */ (function (_super) {
    __extends(SearchResourcesQueryParams, _super);
    function SearchResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], SearchResourcesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], SearchResourcesQueryParams.prototype, "nextToken", void 0);
    return SearchResourcesQueryParams;
}(SpeakeasyBase));
export { SearchResourcesQueryParams };
var SearchResourcesHeaders = /** @class */ (function (_super) {
    __extends(SearchResourcesHeaders, _super);
    function SearchResourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchResourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchResourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchResourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchResourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchResourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchResourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchResourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SearchResourcesHeaders;
}(SpeakeasyBase));
export { SearchResourcesHeaders };
// SearchResourcesRequestBodyBucketCriteria
/**
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
**/
var SearchResourcesRequestBodyBucketCriteria = /** @class */ (function (_super) {
    __extends(SearchResourcesRequestBodyBucketCriteria, _super);
    function SearchResourcesRequestBodyBucketCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludes" }),
        __metadata("design:type", shared.SearchResourcesCriteriaBlock)
    ], SearchResourcesRequestBodyBucketCriteria.prototype, "excludes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includes" }),
        __metadata("design:type", shared.SearchResourcesCriteriaBlock)
    ], SearchResourcesRequestBodyBucketCriteria.prototype, "includes", void 0);
    return SearchResourcesRequestBodyBucketCriteria;
}(SpeakeasyBase));
export { SearchResourcesRequestBodyBucketCriteria };
// SearchResourcesRequestBodySortCriteria
/**
 * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
**/
var SearchResourcesRequestBodySortCriteria = /** @class */ (function (_super) {
    __extends(SearchResourcesRequestBodySortCriteria, _super);
    function SearchResourcesRequestBodySortCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributeName" }),
        __metadata("design:type", String)
    ], SearchResourcesRequestBodySortCriteria.prototype, "attributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], SearchResourcesRequestBodySortCriteria.prototype, "orderBy", void 0);
    return SearchResourcesRequestBodySortCriteria;
}(SpeakeasyBase));
export { SearchResourcesRequestBodySortCriteria };
var SearchResourcesRequestBody = /** @class */ (function (_super) {
    __extends(SearchResourcesRequestBody, _super);
    function SearchResourcesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCriteria" }),
        __metadata("design:type", SearchResourcesRequestBodyBucketCriteria)
    ], SearchResourcesRequestBody.prototype, "bucketCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], SearchResourcesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], SearchResourcesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortCriteria" }),
        __metadata("design:type", SearchResourcesRequestBodySortCriteria)
    ], SearchResourcesRequestBody.prototype, "sortCriteria", void 0);
    return SearchResourcesRequestBody;
}(SpeakeasyBase));
export { SearchResourcesRequestBody };
var SearchResourcesRequest = /** @class */ (function (_super) {
    __extends(SearchResourcesRequest, _super);
    function SearchResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchResourcesQueryParams)
    ], SearchResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchResourcesHeaders)
    ], SearchResourcesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchResourcesRequestBody)
    ], SearchResourcesRequest.prototype, "request", void 0);
    return SearchResourcesRequest;
}(SpeakeasyBase));
export { SearchResourcesRequest };
var SearchResourcesResponse = /** @class */ (function (_super) {
    __extends(SearchResourcesResponse, _super);
    function SearchResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchResourcesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchResourcesResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchResourcesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchResourcesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResourcesResponse)
    ], SearchResourcesResponse.prototype, "searchResourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchResourcesResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchResourcesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchResourcesResponse.prototype, "validationException", void 0);
    return SearchResourcesResponse;
}(SpeakeasyBase));
export { SearchResourcesResponse };
