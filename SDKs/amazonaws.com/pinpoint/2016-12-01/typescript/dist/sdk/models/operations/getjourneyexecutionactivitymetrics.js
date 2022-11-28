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
var GetJourneyExecutionActivityMetricsPathParams = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionActivityMetricsPathParams, _super);
    function GetJourneyExecutionActivityMetricsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journey-activity-id" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsPathParams.prototype, "journeyActivityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journey-id" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsPathParams.prototype, "journeyId", void 0);
    return GetJourneyExecutionActivityMetricsPathParams;
}(SpeakeasyBase));
export { GetJourneyExecutionActivityMetricsPathParams };
var GetJourneyExecutionActivityMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionActivityMetricsQueryParams, _super);
    function GetJourneyExecutionActivityMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-size" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsQueryParams.prototype, "pageSize", void 0);
    return GetJourneyExecutionActivityMetricsQueryParams;
}(SpeakeasyBase));
export { GetJourneyExecutionActivityMetricsQueryParams };
var GetJourneyExecutionActivityMetricsHeaders = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionActivityMetricsHeaders, _super);
    function GetJourneyExecutionActivityMetricsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetJourneyExecutionActivityMetricsHeaders;
}(SpeakeasyBase));
export { GetJourneyExecutionActivityMetricsHeaders };
var GetJourneyExecutionActivityMetricsRequest = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionActivityMetricsRequest, _super);
    function GetJourneyExecutionActivityMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyExecutionActivityMetricsPathParams)
    ], GetJourneyExecutionActivityMetricsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyExecutionActivityMetricsQueryParams)
    ], GetJourneyExecutionActivityMetricsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyExecutionActivityMetricsHeaders)
    ], GetJourneyExecutionActivityMetricsRequest.prototype, "headers", void 0);
    return GetJourneyExecutionActivityMetricsRequest;
}(SpeakeasyBase));
export { GetJourneyExecutionActivityMetricsRequest };
var GetJourneyExecutionActivityMetricsResponse = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionActivityMetricsResponse, _super);
    function GetJourneyExecutionActivityMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetJourneyExecutionActivityMetricsResponse)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "getJourneyExecutionActivityMetricsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionActivityMetricsResponse.prototype, "tooManyRequestsException", void 0);
    return GetJourneyExecutionActivityMetricsResponse;
}(SpeakeasyBase));
export { GetJourneyExecutionActivityMetricsResponse };
