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
var GetCanaryRunsPathParams = /** @class */ (function (_super) {
    __extends(GetCanaryRunsPathParams, _super);
    function GetCanaryRunsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetCanaryRunsPathParams.prototype, "name", void 0);
    return GetCanaryRunsPathParams;
}(SpeakeasyBase));
export { GetCanaryRunsPathParams };
var GetCanaryRunsQueryParams = /** @class */ (function (_super) {
    __extends(GetCanaryRunsQueryParams, _super);
    function GetCanaryRunsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetCanaryRunsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetCanaryRunsQueryParams.prototype, "nextToken", void 0);
    return GetCanaryRunsQueryParams;
}(SpeakeasyBase));
export { GetCanaryRunsQueryParams };
var GetCanaryRunsHeaders = /** @class */ (function (_super) {
    __extends(GetCanaryRunsHeaders, _super);
    function GetCanaryRunsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCanaryRunsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCanaryRunsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCanaryRunsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCanaryRunsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCanaryRunsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCanaryRunsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCanaryRunsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCanaryRunsHeaders;
}(SpeakeasyBase));
export { GetCanaryRunsHeaders };
var GetCanaryRunsRequestBody = /** @class */ (function (_super) {
    __extends(GetCanaryRunsRequestBody, _super);
    function GetCanaryRunsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetCanaryRunsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetCanaryRunsRequestBody.prototype, "nextToken", void 0);
    return GetCanaryRunsRequestBody;
}(SpeakeasyBase));
export { GetCanaryRunsRequestBody };
var GetCanaryRunsRequest = /** @class */ (function (_super) {
    __extends(GetCanaryRunsRequest, _super);
    function GetCanaryRunsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCanaryRunsPathParams)
    ], GetCanaryRunsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCanaryRunsQueryParams)
    ], GetCanaryRunsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCanaryRunsHeaders)
    ], GetCanaryRunsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetCanaryRunsRequestBody)
    ], GetCanaryRunsRequest.prototype, "request", void 0);
    return GetCanaryRunsRequest;
}(SpeakeasyBase));
export { GetCanaryRunsRequest };
var GetCanaryRunsResponse = /** @class */ (function (_super) {
    __extends(GetCanaryRunsResponse, _super);
    function GetCanaryRunsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCanaryRunsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetCanaryRunsResponse)
    ], GetCanaryRunsResponse.prototype, "getCanaryRunsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetCanaryRunsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetCanaryRunsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCanaryRunsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetCanaryRunsResponse.prototype, "validationException", void 0);
    return GetCanaryRunsResponse;
}(SpeakeasyBase));
export { GetCanaryRunsResponse };
