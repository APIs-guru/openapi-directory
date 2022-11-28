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
var ListClassificationJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListClassificationJobsQueryParams, _super);
    function ListClassificationJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListClassificationJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListClassificationJobsQueryParams.prototype, "nextToken", void 0);
    return ListClassificationJobsQueryParams;
}(SpeakeasyBase));
export { ListClassificationJobsQueryParams };
var ListClassificationJobsHeaders = /** @class */ (function (_super) {
    __extends(ListClassificationJobsHeaders, _super);
    function ListClassificationJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListClassificationJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListClassificationJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListClassificationJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListClassificationJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListClassificationJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListClassificationJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListClassificationJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListClassificationJobsHeaders;
}(SpeakeasyBase));
export { ListClassificationJobsHeaders };
// ListClassificationJobsRequestBodyFilterCriteria
/**
 * Specifies criteria for filtering the results of a request for information about classification jobs.
**/
var ListClassificationJobsRequestBodyFilterCriteria = /** @class */ (function (_super) {
    __extends(ListClassificationJobsRequestBodyFilterCriteria, _super);
    function ListClassificationJobsRequestBodyFilterCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludes", elemType: shared.ListJobsFilterTerm }),
        __metadata("design:type", Array)
    ], ListClassificationJobsRequestBodyFilterCriteria.prototype, "excludes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includes", elemType: shared.ListJobsFilterTerm }),
        __metadata("design:type", Array)
    ], ListClassificationJobsRequestBodyFilterCriteria.prototype, "includes", void 0);
    return ListClassificationJobsRequestBodyFilterCriteria;
}(SpeakeasyBase));
export { ListClassificationJobsRequestBodyFilterCriteria };
// ListClassificationJobsRequestBodySortCriteria
/**
 * Specifies criteria for sorting the results of a request for information about classification jobs.
**/
var ListClassificationJobsRequestBodySortCriteria = /** @class */ (function (_super) {
    __extends(ListClassificationJobsRequestBodySortCriteria, _super);
    function ListClassificationJobsRequestBodySortCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributeName" }),
        __metadata("design:type", String)
    ], ListClassificationJobsRequestBodySortCriteria.prototype, "attributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], ListClassificationJobsRequestBodySortCriteria.prototype, "orderBy", void 0);
    return ListClassificationJobsRequestBodySortCriteria;
}(SpeakeasyBase));
export { ListClassificationJobsRequestBodySortCriteria };
var ListClassificationJobsRequestBody = /** @class */ (function (_super) {
    __extends(ListClassificationJobsRequestBody, _super);
    function ListClassificationJobsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterCriteria" }),
        __metadata("design:type", ListClassificationJobsRequestBodyFilterCriteria)
    ], ListClassificationJobsRequestBody.prototype, "filterCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListClassificationJobsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListClassificationJobsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortCriteria" }),
        __metadata("design:type", ListClassificationJobsRequestBodySortCriteria)
    ], ListClassificationJobsRequestBody.prototype, "sortCriteria", void 0);
    return ListClassificationJobsRequestBody;
}(SpeakeasyBase));
export { ListClassificationJobsRequestBody };
var ListClassificationJobsRequest = /** @class */ (function (_super) {
    __extends(ListClassificationJobsRequest, _super);
    function ListClassificationJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListClassificationJobsQueryParams)
    ], ListClassificationJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListClassificationJobsHeaders)
    ], ListClassificationJobsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListClassificationJobsRequestBody)
    ], ListClassificationJobsRequest.prototype, "request", void 0);
    return ListClassificationJobsRequest;
}(SpeakeasyBase));
export { ListClassificationJobsRequest };
var ListClassificationJobsResponse = /** @class */ (function (_super) {
    __extends(ListClassificationJobsResponse, _super);
    function ListClassificationJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClassificationJobsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClassificationJobsResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListClassificationJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClassificationJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListClassificationJobsResponse)
    ], ListClassificationJobsResponse.prototype, "listClassificationJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClassificationJobsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClassificationJobsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListClassificationJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClassificationJobsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListClassificationJobsResponse.prototype, "validationException", void 0);
    return ListClassificationJobsResponse;
}(SpeakeasyBase));
export { ListClassificationJobsResponse };
