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
var ListBatchInferenceJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListBatchInferenceJobsQueryParams, _super);
    function ListBatchInferenceJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsQueryParams.prototype, "nextToken", void 0);
    return ListBatchInferenceJobsQueryParams;
}(SpeakeasyBase));
export { ListBatchInferenceJobsQueryParams };
export var ListBatchInferenceJobsXAmzTargetEnum;
(function (ListBatchInferenceJobsXAmzTargetEnum) {
    ListBatchInferenceJobsXAmzTargetEnum["AmazonPersonalizeListBatchInferenceJobs"] = "AmazonPersonalize.ListBatchInferenceJobs";
})(ListBatchInferenceJobsXAmzTargetEnum || (ListBatchInferenceJobsXAmzTargetEnum = {}));
var ListBatchInferenceJobsHeaders = /** @class */ (function (_super) {
    __extends(ListBatchInferenceJobsHeaders, _super);
    function ListBatchInferenceJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListBatchInferenceJobsHeaders;
}(SpeakeasyBase));
export { ListBatchInferenceJobsHeaders };
var ListBatchInferenceJobsRequest = /** @class */ (function (_super) {
    __extends(ListBatchInferenceJobsRequest, _super);
    function ListBatchInferenceJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBatchInferenceJobsQueryParams)
    ], ListBatchInferenceJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBatchInferenceJobsHeaders)
    ], ListBatchInferenceJobsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListBatchInferenceJobsRequest)
    ], ListBatchInferenceJobsRequest.prototype, "request", void 0);
    return ListBatchInferenceJobsRequest;
}(SpeakeasyBase));
export { ListBatchInferenceJobsRequest };
var ListBatchInferenceJobsResponse = /** @class */ (function (_super) {
    __extends(ListBatchInferenceJobsResponse, _super);
    function ListBatchInferenceJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBatchInferenceJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBatchInferenceJobsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBatchInferenceJobsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBatchInferenceJobsResponse)
    ], ListBatchInferenceJobsResponse.prototype, "listBatchInferenceJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBatchInferenceJobsResponse.prototype, "statusCode", void 0);
    return ListBatchInferenceJobsResponse;
}(SpeakeasyBase));
export { ListBatchInferenceJobsResponse };
