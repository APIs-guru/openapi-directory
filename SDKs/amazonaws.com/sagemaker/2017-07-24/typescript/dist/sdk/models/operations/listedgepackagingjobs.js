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
var ListEdgePackagingJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListEdgePackagingJobsQueryParams, _super);
    function ListEdgePackagingJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsQueryParams.prototype, "nextToken", void 0);
    return ListEdgePackagingJobsQueryParams;
}(SpeakeasyBase));
export { ListEdgePackagingJobsQueryParams };
export var ListEdgePackagingJobsXAmzTargetEnum;
(function (ListEdgePackagingJobsXAmzTargetEnum) {
    ListEdgePackagingJobsXAmzTargetEnum["SageMakerListEdgePackagingJobs"] = "SageMaker.ListEdgePackagingJobs";
})(ListEdgePackagingJobsXAmzTargetEnum || (ListEdgePackagingJobsXAmzTargetEnum = {}));
var ListEdgePackagingJobsHeaders = /** @class */ (function (_super) {
    __extends(ListEdgePackagingJobsHeaders, _super);
    function ListEdgePackagingJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListEdgePackagingJobsHeaders;
}(SpeakeasyBase));
export { ListEdgePackagingJobsHeaders };
var ListEdgePackagingJobsRequest = /** @class */ (function (_super) {
    __extends(ListEdgePackagingJobsRequest, _super);
    function ListEdgePackagingJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEdgePackagingJobsQueryParams)
    ], ListEdgePackagingJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEdgePackagingJobsHeaders)
    ], ListEdgePackagingJobsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListEdgePackagingJobsRequest)
    ], ListEdgePackagingJobsRequest.prototype, "request", void 0);
    return ListEdgePackagingJobsRequest;
}(SpeakeasyBase));
export { ListEdgePackagingJobsRequest };
var ListEdgePackagingJobsResponse = /** @class */ (function (_super) {
    __extends(ListEdgePackagingJobsResponse, _super);
    function ListEdgePackagingJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEdgePackagingJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEdgePackagingJobsResponse)
    ], ListEdgePackagingJobsResponse.prototype, "listEdgePackagingJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListEdgePackagingJobsResponse.prototype, "statusCode", void 0);
    return ListEdgePackagingJobsResponse;
}(SpeakeasyBase));
export { ListEdgePackagingJobsResponse };
