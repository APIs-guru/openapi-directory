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
var ListTrainingJobsForHyperParameterTuningJobQueryParams = /** @class */ (function (_super) {
    __extends(ListTrainingJobsForHyperParameterTuningJobQueryParams, _super);
    function ListTrainingJobsForHyperParameterTuningJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobQueryParams.prototype, "nextToken", void 0);
    return ListTrainingJobsForHyperParameterTuningJobQueryParams;
}(SpeakeasyBase));
export { ListTrainingJobsForHyperParameterTuningJobQueryParams };
export var ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum;
(function (ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum) {
    ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum["SageMakerListTrainingJobsForHyperParameterTuningJob"] = "SageMaker.ListTrainingJobsForHyperParameterTuningJob";
})(ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum || (ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum = {}));
var ListTrainingJobsForHyperParameterTuningJobHeaders = /** @class */ (function (_super) {
    __extends(ListTrainingJobsForHyperParameterTuningJobHeaders, _super);
    function ListTrainingJobsForHyperParameterTuningJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobHeaders.prototype, "xAmzTarget", void 0);
    return ListTrainingJobsForHyperParameterTuningJobHeaders;
}(SpeakeasyBase));
export { ListTrainingJobsForHyperParameterTuningJobHeaders };
var ListTrainingJobsForHyperParameterTuningJobRequest = /** @class */ (function (_super) {
    __extends(ListTrainingJobsForHyperParameterTuningJobRequest, _super);
    function ListTrainingJobsForHyperParameterTuningJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrainingJobsForHyperParameterTuningJobQueryParams)
    ], ListTrainingJobsForHyperParameterTuningJobRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrainingJobsForHyperParameterTuningJobHeaders)
    ], ListTrainingJobsForHyperParameterTuningJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTrainingJobsForHyperParameterTuningJobRequest)
    ], ListTrainingJobsForHyperParameterTuningJobRequest.prototype, "request", void 0);
    return ListTrainingJobsForHyperParameterTuningJobRequest;
}(SpeakeasyBase));
export { ListTrainingJobsForHyperParameterTuningJobRequest };
var ListTrainingJobsForHyperParameterTuningJobResponse = /** @class */ (function (_super) {
    __extends(ListTrainingJobsForHyperParameterTuningJobResponse, _super);
    function ListTrainingJobsForHyperParameterTuningJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTrainingJobsForHyperParameterTuningJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTrainingJobsForHyperParameterTuningJobResponse)
    ], ListTrainingJobsForHyperParameterTuningJobResponse.prototype, "listTrainingJobsForHyperParameterTuningJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListTrainingJobsForHyperParameterTuningJobResponse.prototype, "resourceNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTrainingJobsForHyperParameterTuningJobResponse.prototype, "statusCode", void 0);
    return ListTrainingJobsForHyperParameterTuningJobResponse;
}(SpeakeasyBase));
export { ListTrainingJobsForHyperParameterTuningJobResponse };
