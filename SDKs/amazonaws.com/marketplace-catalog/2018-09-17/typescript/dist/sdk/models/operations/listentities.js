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
var ListEntitiesQueryParams = /** @class */ (function (_super) {
    __extends(ListEntitiesQueryParams, _super);
    function ListEntitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListEntitiesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListEntitiesQueryParams.prototype, "nextToken", void 0);
    return ListEntitiesQueryParams;
}(SpeakeasyBase));
export { ListEntitiesQueryParams };
var ListEntitiesHeaders = /** @class */ (function (_super) {
    __extends(ListEntitiesHeaders, _super);
    function ListEntitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEntitiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEntitiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEntitiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEntitiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEntitiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEntitiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEntitiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListEntitiesHeaders;
}(SpeakeasyBase));
export { ListEntitiesHeaders };
// ListEntitiesRequestBodySort
/**
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
var ListEntitiesRequestBodySort = /** @class */ (function (_super) {
    __extends(ListEntitiesRequestBodySort, _super);
    function ListEntitiesRequestBodySort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=SortBy" }),
        __metadata("design:type", String)
    ], ListEntitiesRequestBodySort.prototype, "sortBy", void 0);
    __decorate([
        Metadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], ListEntitiesRequestBodySort.prototype, "sortOrder", void 0);
    return ListEntitiesRequestBodySort;
}(SpeakeasyBase));
export { ListEntitiesRequestBodySort };
var ListEntitiesRequestBody = /** @class */ (function (_super) {
    __extends(ListEntitiesRequestBody, _super);
    function ListEntitiesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Catalog" }),
        __metadata("design:type", String)
    ], ListEntitiesRequestBody.prototype, "catalog", void 0);
    __decorate([
        Metadata({ data: "json, name=EntityType" }),
        __metadata("design:type", String)
    ], ListEntitiesRequestBody.prototype, "entityType", void 0);
    __decorate([
        Metadata({ data: "json, name=FilterList", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListEntitiesRequestBody.prototype, "filterList", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListEntitiesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListEntitiesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=Sort" }),
        __metadata("design:type", ListEntitiesRequestBodySort)
    ], ListEntitiesRequestBody.prototype, "sort", void 0);
    return ListEntitiesRequestBody;
}(SpeakeasyBase));
export { ListEntitiesRequestBody };
var ListEntitiesRequest = /** @class */ (function (_super) {
    __extends(ListEntitiesRequest, _super);
    function ListEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListEntitiesQueryParams)
    ], ListEntitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEntitiesHeaders)
    ], ListEntitiesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListEntitiesRequestBody)
    ], ListEntitiesRequest.prototype, "request", void 0);
    return ListEntitiesRequest;
}(SpeakeasyBase));
export { ListEntitiesRequest };
var ListEntitiesResponse = /** @class */ (function (_super) {
    __extends(ListEntitiesResponse, _super);
    function ListEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListEntitiesResponse)
    ], ListEntitiesResponse.prototype, "listEntitiesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEntitiesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEntitiesResponse.prototype, "validationException", void 0);
    return ListEntitiesResponse;
}(SpeakeasyBase));
export { ListEntitiesResponse };
