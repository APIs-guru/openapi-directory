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
var GetDevicePositionHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetDevicePositionHistoryPathParams, _super);
    function GetDevicePositionHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DeviceId" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryPathParams.prototype, "deviceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryPathParams.prototype, "trackerName", void 0);
    return GetDevicePositionHistoryPathParams;
}(SpeakeasyBase));
export { GetDevicePositionHistoryPathParams };
var GetDevicePositionHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDevicePositionHistoryQueryParams, _super);
    function GetDevicePositionHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryQueryParams.prototype, "nextToken", void 0);
    return GetDevicePositionHistoryQueryParams;
}(SpeakeasyBase));
export { GetDevicePositionHistoryQueryParams };
var GetDevicePositionHistoryHeaders = /** @class */ (function (_super) {
    __extends(GetDevicePositionHistoryHeaders, _super);
    function GetDevicePositionHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDevicePositionHistoryHeaders;
}(SpeakeasyBase));
export { GetDevicePositionHistoryHeaders };
var GetDevicePositionHistoryRequestBody = /** @class */ (function (_super) {
    __extends(GetDevicePositionHistoryRequestBody, _super);
    function GetDevicePositionHistoryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=EndTimeExclusive" }),
        __metadata("design:type", Date)
    ], GetDevicePositionHistoryRequestBody.prototype, "endTimeExclusive", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=StartTimeInclusive" }),
        __metadata("design:type", Date)
    ], GetDevicePositionHistoryRequestBody.prototype, "startTimeInclusive", void 0);
    return GetDevicePositionHistoryRequestBody;
}(SpeakeasyBase));
export { GetDevicePositionHistoryRequestBody };
var GetDevicePositionHistoryRequest = /** @class */ (function (_super) {
    __extends(GetDevicePositionHistoryRequest, _super);
    function GetDevicePositionHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDevicePositionHistoryPathParams)
    ], GetDevicePositionHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDevicePositionHistoryQueryParams)
    ], GetDevicePositionHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDevicePositionHistoryHeaders)
    ], GetDevicePositionHistoryRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetDevicePositionHistoryRequestBody)
    ], GetDevicePositionHistoryRequest.prototype, "request", void 0);
    return GetDevicePositionHistoryRequest;
}(SpeakeasyBase));
export { GetDevicePositionHistoryRequest };
var GetDevicePositionHistoryResponse = /** @class */ (function (_super) {
    __extends(GetDevicePositionHistoryResponse, _super);
    function GetDevicePositionHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDevicePositionHistoryResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDevicePositionHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetDevicePositionHistoryResponse)
    ], GetDevicePositionHistoryResponse.prototype, "getDevicePositionHistoryResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDevicePositionHistoryResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDevicePositionHistoryResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDevicePositionHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDevicePositionHistoryResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDevicePositionHistoryResponse.prototype, "validationException", void 0);
    return GetDevicePositionHistoryResponse;
}(SpeakeasyBase));
export { GetDevicePositionHistoryResponse };
