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
var ListDevicePositionsPathParams = /** @class */ (function (_super) {
    __extends(ListDevicePositionsPathParams, _super);
    function ListDevicePositionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" }),
        __metadata("design:type", String)
    ], ListDevicePositionsPathParams.prototype, "trackerName", void 0);
    return ListDevicePositionsPathParams;
}(SpeakeasyBase));
export { ListDevicePositionsPathParams };
var ListDevicePositionsQueryParams = /** @class */ (function (_super) {
    __extends(ListDevicePositionsQueryParams, _super);
    function ListDevicePositionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDevicePositionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDevicePositionsQueryParams.prototype, "nextToken", void 0);
    return ListDevicePositionsQueryParams;
}(SpeakeasyBase));
export { ListDevicePositionsQueryParams };
var ListDevicePositionsHeaders = /** @class */ (function (_super) {
    __extends(ListDevicePositionsHeaders, _super);
    function ListDevicePositionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDevicePositionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDevicePositionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDevicePositionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDevicePositionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDevicePositionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDevicePositionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDevicePositionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListDevicePositionsHeaders;
}(SpeakeasyBase));
export { ListDevicePositionsHeaders };
var ListDevicePositionsRequestBody = /** @class */ (function (_super) {
    __extends(ListDevicePositionsRequestBody, _super);
    function ListDevicePositionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListDevicePositionsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListDevicePositionsRequestBody.prototype, "nextToken", void 0);
    return ListDevicePositionsRequestBody;
}(SpeakeasyBase));
export { ListDevicePositionsRequestBody };
var ListDevicePositionsRequest = /** @class */ (function (_super) {
    __extends(ListDevicePositionsRequest, _super);
    function ListDevicePositionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDevicePositionsPathParams)
    ], ListDevicePositionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDevicePositionsQueryParams)
    ], ListDevicePositionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDevicePositionsHeaders)
    ], ListDevicePositionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListDevicePositionsRequestBody)
    ], ListDevicePositionsRequest.prototype, "request", void 0);
    return ListDevicePositionsRequest;
}(SpeakeasyBase));
export { ListDevicePositionsRequest };
var ListDevicePositionsResponse = /** @class */ (function (_super) {
    __extends(ListDevicePositionsResponse, _super);
    function ListDevicePositionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDevicePositionsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDevicePositionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDevicePositionsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDevicePositionsResponse)
    ], ListDevicePositionsResponse.prototype, "listDevicePositionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDevicePositionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDevicePositionsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDevicePositionsResponse.prototype, "validationException", void 0);
    return ListDevicePositionsResponse;
}(SpeakeasyBase));
export { ListDevicePositionsResponse };
