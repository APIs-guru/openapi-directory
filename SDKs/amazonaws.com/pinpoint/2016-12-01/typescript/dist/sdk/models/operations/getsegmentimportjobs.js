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
var GetSegmentImportJobsPathParams = /** @class */ (function (_super) {
    __extends(GetSegmentImportJobsPathParams, _super);
    function GetSegmentImportJobsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segment-id" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsPathParams.prototype, "segmentId", void 0);
    return GetSegmentImportJobsPathParams;
}(SpeakeasyBase));
export { GetSegmentImportJobsPathParams };
var GetSegmentImportJobsQueryParams = /** @class */ (function (_super) {
    __extends(GetSegmentImportJobsQueryParams, _super);
    function GetSegmentImportJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-size" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsQueryParams.prototype, "token", void 0);
    return GetSegmentImportJobsQueryParams;
}(SpeakeasyBase));
export { GetSegmentImportJobsQueryParams };
var GetSegmentImportJobsHeaders = /** @class */ (function (_super) {
    __extends(GetSegmentImportJobsHeaders, _super);
    function GetSegmentImportJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSegmentImportJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSegmentImportJobsHeaders;
}(SpeakeasyBase));
export { GetSegmentImportJobsHeaders };
var GetSegmentImportJobsRequest = /** @class */ (function (_super) {
    __extends(GetSegmentImportJobsRequest, _super);
    function GetSegmentImportJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSegmentImportJobsPathParams)
    ], GetSegmentImportJobsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSegmentImportJobsQueryParams)
    ], GetSegmentImportJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSegmentImportJobsHeaders)
    ], GetSegmentImportJobsRequest.prototype, "headers", void 0);
    return GetSegmentImportJobsRequest;
}(SpeakeasyBase));
export { GetSegmentImportJobsRequest };
var GetSegmentImportJobsResponse = /** @class */ (function (_super) {
    __extends(GetSegmentImportJobsResponse, _super);
    function GetSegmentImportJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSegmentImportJobsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSegmentImportJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSegmentImportJobsResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetSegmentImportJobsResponse)
    ], GetSegmentImportJobsResponse.prototype, "getSegmentImportJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSegmentImportJobsResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSegmentImportJobsResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSegmentImportJobsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSegmentImportJobsResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSegmentImportJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSegmentImportJobsResponse.prototype, "tooManyRequestsException", void 0);
    return GetSegmentImportJobsResponse;
}(SpeakeasyBase));
export { GetSegmentImportJobsResponse };
