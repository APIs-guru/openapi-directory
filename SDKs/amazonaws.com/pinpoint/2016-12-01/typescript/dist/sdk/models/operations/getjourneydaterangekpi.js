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
var GetJourneyDateRangeKpiPathParams = /** @class */ (function (_super) {
    __extends(GetJourneyDateRangeKpiPathParams, _super);
    function GetJourneyDateRangeKpiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journey-id" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiPathParams.prototype, "journeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kpi-name" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiPathParams.prototype, "kpiName", void 0);
    return GetJourneyDateRangeKpiPathParams;
}(SpeakeasyBase));
export { GetJourneyDateRangeKpiPathParams };
var GetJourneyDateRangeKpiQueryParams = /** @class */ (function (_super) {
    __extends(GetJourneyDateRangeKpiQueryParams, _super);
    function GetJourneyDateRangeKpiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-time" }),
        __metadata("design:type", Date)
    ], GetJourneyDateRangeKpiQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-size" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-time" }),
        __metadata("design:type", Date)
    ], GetJourneyDateRangeKpiQueryParams.prototype, "startTime", void 0);
    return GetJourneyDateRangeKpiQueryParams;
}(SpeakeasyBase));
export { GetJourneyDateRangeKpiQueryParams };
var GetJourneyDateRangeKpiHeaders = /** @class */ (function (_super) {
    __extends(GetJourneyDateRangeKpiHeaders, _super);
    function GetJourneyDateRangeKpiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetJourneyDateRangeKpiHeaders;
}(SpeakeasyBase));
export { GetJourneyDateRangeKpiHeaders };
var GetJourneyDateRangeKpiRequest = /** @class */ (function (_super) {
    __extends(GetJourneyDateRangeKpiRequest, _super);
    function GetJourneyDateRangeKpiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyDateRangeKpiPathParams)
    ], GetJourneyDateRangeKpiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyDateRangeKpiQueryParams)
    ], GetJourneyDateRangeKpiRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJourneyDateRangeKpiHeaders)
    ], GetJourneyDateRangeKpiRequest.prototype, "headers", void 0);
    return GetJourneyDateRangeKpiRequest;
}(SpeakeasyBase));
export { GetJourneyDateRangeKpiRequest };
var GetJourneyDateRangeKpiResponse = /** @class */ (function (_super) {
    __extends(GetJourneyDateRangeKpiResponse, _super);
    function GetJourneyDateRangeKpiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyDateRangeKpiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJourneyDateRangeKpiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyDateRangeKpiResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetJourneyDateRangeKpiResponse)
    ], GetJourneyDateRangeKpiResponse.prototype, "getJourneyDateRangeKpiResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyDateRangeKpiResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyDateRangeKpiResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyDateRangeKpiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyDateRangeKpiResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJourneyDateRangeKpiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetJourneyDateRangeKpiResponse.prototype, "tooManyRequestsException", void 0);
    return GetJourneyDateRangeKpiResponse;
}(SpeakeasyBase));
export { GetJourneyDateRangeKpiResponse };
