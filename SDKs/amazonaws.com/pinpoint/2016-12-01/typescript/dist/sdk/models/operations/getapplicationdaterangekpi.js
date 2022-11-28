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
var GetApplicationDateRangeKpiPathParams = /** @class */ (function (_super) {
    __extends(GetApplicationDateRangeKpiPathParams, _super);
    function GetApplicationDateRangeKpiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kpi-name" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiPathParams.prototype, "kpiName", void 0);
    return GetApplicationDateRangeKpiPathParams;
}(SpeakeasyBase));
export { GetApplicationDateRangeKpiPathParams };
var GetApplicationDateRangeKpiQueryParams = /** @class */ (function (_super) {
    __extends(GetApplicationDateRangeKpiQueryParams, _super);
    function GetApplicationDateRangeKpiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-time" }),
        __metadata("design:type", Date)
    ], GetApplicationDateRangeKpiQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-size" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-time" }),
        __metadata("design:type", Date)
    ], GetApplicationDateRangeKpiQueryParams.prototype, "startTime", void 0);
    return GetApplicationDateRangeKpiQueryParams;
}(SpeakeasyBase));
export { GetApplicationDateRangeKpiQueryParams };
var GetApplicationDateRangeKpiHeaders = /** @class */ (function (_super) {
    __extends(GetApplicationDateRangeKpiHeaders, _super);
    function GetApplicationDateRangeKpiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetApplicationDateRangeKpiHeaders;
}(SpeakeasyBase));
export { GetApplicationDateRangeKpiHeaders };
var GetApplicationDateRangeKpiRequest = /** @class */ (function (_super) {
    __extends(GetApplicationDateRangeKpiRequest, _super);
    function GetApplicationDateRangeKpiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplicationDateRangeKpiPathParams)
    ], GetApplicationDateRangeKpiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplicationDateRangeKpiQueryParams)
    ], GetApplicationDateRangeKpiRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplicationDateRangeKpiHeaders)
    ], GetApplicationDateRangeKpiRequest.prototype, "headers", void 0);
    return GetApplicationDateRangeKpiRequest;
}(SpeakeasyBase));
export { GetApplicationDateRangeKpiRequest };
var GetApplicationDateRangeKpiResponse = /** @class */ (function (_super) {
    __extends(GetApplicationDateRangeKpiResponse, _super);
    function GetApplicationDateRangeKpiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetApplicationDateRangeKpiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApplicationDateRangeKpiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetApplicationDateRangeKpiResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetApplicationDateRangeKpiResponse)
    ], GetApplicationDateRangeKpiResponse.prototype, "getApplicationDateRangeKpiResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetApplicationDateRangeKpiResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetApplicationDateRangeKpiResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetApplicationDateRangeKpiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetApplicationDateRangeKpiResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApplicationDateRangeKpiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetApplicationDateRangeKpiResponse.prototype, "tooManyRequestsException", void 0);
    return GetApplicationDateRangeKpiResponse;
}(SpeakeasyBase));
export { GetApplicationDateRangeKpiResponse };
