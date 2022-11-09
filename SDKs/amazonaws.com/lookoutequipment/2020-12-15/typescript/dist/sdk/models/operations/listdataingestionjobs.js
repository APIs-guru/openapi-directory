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
var ListDataIngestionJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListDataIngestionJobsQueryParams, _super);
    function ListDataIngestionJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsQueryParams.prototype, "nextToken", void 0);
    return ListDataIngestionJobsQueryParams;
}(SpeakeasyBase));
export { ListDataIngestionJobsQueryParams };
export var ListDataIngestionJobsXAmzTargetEnum;
(function (ListDataIngestionJobsXAmzTargetEnum) {
    ListDataIngestionJobsXAmzTargetEnum["AwsLookoutEquipmentFrontendServiceListDataIngestionJobs"] = "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs";
})(ListDataIngestionJobsXAmzTargetEnum || (ListDataIngestionJobsXAmzTargetEnum = {}));
var ListDataIngestionJobsHeaders = /** @class */ (function (_super) {
    __extends(ListDataIngestionJobsHeaders, _super);
    function ListDataIngestionJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDataIngestionJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListDataIngestionJobsHeaders;
}(SpeakeasyBase));
export { ListDataIngestionJobsHeaders };
var ListDataIngestionJobsRequest = /** @class */ (function (_super) {
    __extends(ListDataIngestionJobsRequest, _super);
    function ListDataIngestionJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDataIngestionJobsQueryParams)
    ], ListDataIngestionJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDataIngestionJobsHeaders)
    ], ListDataIngestionJobsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDataIngestionJobsRequest)
    ], ListDataIngestionJobsRequest.prototype, "request", void 0);
    return ListDataIngestionJobsRequest;
}(SpeakeasyBase));
export { ListDataIngestionJobsRequest };
var ListDataIngestionJobsResponse = /** @class */ (function (_super) {
    __extends(ListDataIngestionJobsResponse, _super);
    function ListDataIngestionJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDataIngestionJobsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDataIngestionJobsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDataIngestionJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDataIngestionJobsResponse)
    ], ListDataIngestionJobsResponse.prototype, "listDataIngestionJobsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDataIngestionJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDataIngestionJobsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDataIngestionJobsResponse.prototype, "validationException", void 0);
    return ListDataIngestionJobsResponse;
}(SpeakeasyBase));
export { ListDataIngestionJobsResponse };
