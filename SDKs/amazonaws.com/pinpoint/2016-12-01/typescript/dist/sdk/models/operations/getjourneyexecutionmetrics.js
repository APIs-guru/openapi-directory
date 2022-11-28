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
var GetJourneyExecutionMetricsPathParams = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionMetricsPathParams, _super);
    function GetJourneyExecutionMetricsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journey-id" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsPathParams.prototype, "journeyId", void 0);
    return GetJourneyExecutionMetricsPathParams;
}(SpeakeasyBase));
export { GetJourneyExecutionMetricsPathParams };
var GetJourneyExecutionMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionMetricsQueryParams, _super);
    function GetJourneyExecutionMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-size" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsQueryParams.prototype, "pageSize", void 0);
    return GetJourneyExecutionMetricsQueryParams;
}(SpeakeasyBase));
export { GetJourneyExecutionMetricsQueryParams };
var GetJourneyExecutionMetricsHeaders = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionMetricsHeaders, _super);
    function GetJourneyExecutionMetricsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetJourneyExecutionMetricsHeaders;
}(SpeakeasyBase));
export { GetJourneyExecutionMetricsHeaders };
var GetJourneyExecutionMetricsRequest = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionMetricsRequest, _super);
    function GetJourneyExecutionMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyExecutionMetricsPathParams)
    ], GetJourneyExecutionMetricsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyExecutionMetricsQueryParams)
    ], GetJourneyExecutionMetricsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyExecutionMetricsHeaders)
    ], GetJourneyExecutionMetricsRequest.prototype, "headers", void 0);
    return GetJourneyExecutionMetricsRequest;
}(SpeakeasyBase));
export { GetJourneyExecutionMetricsRequest };
var GetJourneyExecutionMetricsResponse = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionMetricsResponse, _super);
    function GetJourneyExecutionMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionMetricsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJourneyExecutionMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionMetricsResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetJourneyExecutionMetricsResponse)
    ], GetJourneyExecutionMetricsResponse.prototype, "getJourneyExecutionMetricsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionMetricsResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionMetricsResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionMetricsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionMetricsResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJourneyExecutionMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyExecutionMetricsResponse.prototype, "tooManyRequestsException", void 0);
    return GetJourneyExecutionMetricsResponse;
}(SpeakeasyBase));
export { GetJourneyExecutionMetricsResponse };
