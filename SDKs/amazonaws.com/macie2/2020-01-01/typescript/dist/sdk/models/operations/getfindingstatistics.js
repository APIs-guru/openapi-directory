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
var GetFindingStatisticsHeaders = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsHeaders, _super);
    function GetFindingStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFindingStatisticsHeaders;
}(SpeakeasyBase));
export { GetFindingStatisticsHeaders };
// GetFindingStatisticsRequestBodyFindingCriteria
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
var GetFindingStatisticsRequestBodyFindingCriteria = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequestBodyFindingCriteria, _super);
    function GetFindingStatisticsRequestBodyFindingCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties }),
        __metadata("design:type", Map)
    ], GetFindingStatisticsRequestBodyFindingCriteria.prototype, "criterion", void 0);
    return GetFindingStatisticsRequestBodyFindingCriteria;
}(SpeakeasyBase));
export { GetFindingStatisticsRequestBodyFindingCriteria };
export var GetFindingStatisticsRequestBodyGroupByEnum;
(function (GetFindingStatisticsRequestBodyGroupByEnum) {
    GetFindingStatisticsRequestBodyGroupByEnum["ResourcesAffectedS3BucketName"] = "resourcesAffected.s3Bucket.name";
    GetFindingStatisticsRequestBodyGroupByEnum["Type"] = "type";
    GetFindingStatisticsRequestBodyGroupByEnum["ClassificationDetailsJobId"] = "classificationDetails.jobId";
    GetFindingStatisticsRequestBodyGroupByEnum["SeverityDescription"] = "severity.description";
})(GetFindingStatisticsRequestBodyGroupByEnum || (GetFindingStatisticsRequestBodyGroupByEnum = {}));
// GetFindingStatisticsRequestBodySortCriteria
/**
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
**/
var GetFindingStatisticsRequestBodySortCriteria = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequestBodySortCriteria, _super);
    function GetFindingStatisticsRequestBodySortCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributeName" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsRequestBodySortCriteria.prototype, "attributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsRequestBodySortCriteria.prototype, "orderBy", void 0);
    return GetFindingStatisticsRequestBodySortCriteria;
}(SpeakeasyBase));
export { GetFindingStatisticsRequestBodySortCriteria };
var GetFindingStatisticsRequestBody = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequestBody, _super);
    function GetFindingStatisticsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingCriteria" }),
        __metadata("design:type", GetFindingStatisticsRequestBodyFindingCriteria)
    ], GetFindingStatisticsRequestBody.prototype, "findingCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupBy" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsRequestBody.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetFindingStatisticsRequestBody.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortCriteria" }),
        __metadata("design:type", GetFindingStatisticsRequestBodySortCriteria)
    ], GetFindingStatisticsRequestBody.prototype, "sortCriteria", void 0);
    return GetFindingStatisticsRequestBody;
}(SpeakeasyBase));
export { GetFindingStatisticsRequestBody };
var GetFindingStatisticsRequest = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequest, _super);
    function GetFindingStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFindingStatisticsHeaders)
    ], GetFindingStatisticsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetFindingStatisticsRequestBody)
    ], GetFindingStatisticsRequest.prototype, "request", void 0);
    return GetFindingStatisticsRequest;
}(SpeakeasyBase));
export { GetFindingStatisticsRequest };
var GetFindingStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsResponse, _super);
    function GetFindingStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFindingStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetFindingStatisticsResponse)
    ], GetFindingStatisticsResponse.prototype, "getFindingStatisticsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFindingStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "validationException", void 0);
    return GetFindingStatisticsResponse;
}(SpeakeasyBase));
export { GetFindingStatisticsResponse };
