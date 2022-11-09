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
var ListDatasetExportJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListDatasetExportJobsQueryParams, _super);
    function ListDatasetExportJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsQueryParams.prototype, "nextToken", void 0);
    return ListDatasetExportJobsQueryParams;
}(SpeakeasyBase));
export { ListDatasetExportJobsQueryParams };
export var ListDatasetExportJobsXAmzTargetEnum;
(function (ListDatasetExportJobsXAmzTargetEnum) {
    ListDatasetExportJobsXAmzTargetEnum["AmazonPersonalizeListDatasetExportJobs"] = "AmazonPersonalize.ListDatasetExportJobs";
})(ListDatasetExportJobsXAmzTargetEnum || (ListDatasetExportJobsXAmzTargetEnum = {}));
var ListDatasetExportJobsHeaders = /** @class */ (function (_super) {
    __extends(ListDatasetExportJobsHeaders, _super);
    function ListDatasetExportJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDatasetExportJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListDatasetExportJobsHeaders;
}(SpeakeasyBase));
export { ListDatasetExportJobsHeaders };
var ListDatasetExportJobsRequest = /** @class */ (function (_super) {
    __extends(ListDatasetExportJobsRequest, _super);
    function ListDatasetExportJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDatasetExportJobsQueryParams)
    ], ListDatasetExportJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDatasetExportJobsHeaders)
    ], ListDatasetExportJobsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDatasetExportJobsRequest)
    ], ListDatasetExportJobsRequest.prototype, "request", void 0);
    return ListDatasetExportJobsRequest;
}(SpeakeasyBase));
export { ListDatasetExportJobsRequest };
var ListDatasetExportJobsResponse = /** @class */ (function (_super) {
    __extends(ListDatasetExportJobsResponse, _super);
    function ListDatasetExportJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDatasetExportJobsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDatasetExportJobsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDatasetExportJobsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDatasetExportJobsResponse)
    ], ListDatasetExportJobsResponse.prototype, "listDatasetExportJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDatasetExportJobsResponse.prototype, "statusCode", void 0);
    return ListDatasetExportJobsResponse;
}(SpeakeasyBase));
export { ListDatasetExportJobsResponse };
