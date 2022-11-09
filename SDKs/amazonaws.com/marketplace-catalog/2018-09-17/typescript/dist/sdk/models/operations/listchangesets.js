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
var ListChangeSetsQueryParams = /** @class */ (function (_super) {
    __extends(ListChangeSetsQueryParams, _super);
    function ListChangeSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListChangeSetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListChangeSetsQueryParams.prototype, "nextToken", void 0);
    return ListChangeSetsQueryParams;
}(SpeakeasyBase));
export { ListChangeSetsQueryParams };
var ListChangeSetsHeaders = /** @class */ (function (_super) {
    __extends(ListChangeSetsHeaders, _super);
    function ListChangeSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListChangeSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListChangeSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListChangeSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListChangeSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListChangeSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListChangeSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListChangeSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListChangeSetsHeaders;
}(SpeakeasyBase));
export { ListChangeSetsHeaders };
// ListChangeSetsRequestBodySort
/**
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
var ListChangeSetsRequestBodySort = /** @class */ (function (_super) {
    __extends(ListChangeSetsRequestBodySort, _super);
    function ListChangeSetsRequestBodySort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=SortBy" }),
        __metadata("design:type", String)
    ], ListChangeSetsRequestBodySort.prototype, "sortBy", void 0);
    __decorate([
        Metadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], ListChangeSetsRequestBodySort.prototype, "sortOrder", void 0);
    return ListChangeSetsRequestBodySort;
}(SpeakeasyBase));
export { ListChangeSetsRequestBodySort };
var ListChangeSetsRequestBody = /** @class */ (function (_super) {
    __extends(ListChangeSetsRequestBody, _super);
    function ListChangeSetsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Catalog" }),
        __metadata("design:type", String)
    ], ListChangeSetsRequestBody.prototype, "catalog", void 0);
    __decorate([
        Metadata({ data: "json, name=FilterList", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListChangeSetsRequestBody.prototype, "filterList", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListChangeSetsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListChangeSetsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=Sort" }),
        __metadata("design:type", ListChangeSetsRequestBodySort)
    ], ListChangeSetsRequestBody.prototype, "sort", void 0);
    return ListChangeSetsRequestBody;
}(SpeakeasyBase));
export { ListChangeSetsRequestBody };
var ListChangeSetsRequest = /** @class */ (function (_super) {
    __extends(ListChangeSetsRequest, _super);
    function ListChangeSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListChangeSetsQueryParams)
    ], ListChangeSetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListChangeSetsHeaders)
    ], ListChangeSetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListChangeSetsRequestBody)
    ], ListChangeSetsRequest.prototype, "request", void 0);
    return ListChangeSetsRequest;
}(SpeakeasyBase));
export { ListChangeSetsRequest };
var ListChangeSetsResponse = /** @class */ (function (_super) {
    __extends(ListChangeSetsResponse, _super);
    function ListChangeSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListChangeSetsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListChangeSetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListChangeSetsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListChangeSetsResponse)
    ], ListChangeSetsResponse.prototype, "listChangeSetsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListChangeSetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListChangeSetsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListChangeSetsResponse.prototype, "validationException", void 0);
    return ListChangeSetsResponse;
}(SpeakeasyBase));
export { ListChangeSetsResponse };
