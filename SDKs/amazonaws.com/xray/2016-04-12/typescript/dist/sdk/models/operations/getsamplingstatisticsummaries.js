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
var GetSamplingStatisticSummariesQueryParams = /** @class */ (function (_super) {
    __extends(GetSamplingStatisticSummariesQueryParams, _super);
    function GetSamplingStatisticSummariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesQueryParams.prototype, "nextToken", void 0);
    return GetSamplingStatisticSummariesQueryParams;
}(SpeakeasyBase));
export { GetSamplingStatisticSummariesQueryParams };
var GetSamplingStatisticSummariesHeaders = /** @class */ (function (_super) {
    __extends(GetSamplingStatisticSummariesHeaders, _super);
    function GetSamplingStatisticSummariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSamplingStatisticSummariesHeaders;
}(SpeakeasyBase));
export { GetSamplingStatisticSummariesHeaders };
var GetSamplingStatisticSummariesRequestBody = /** @class */ (function (_super) {
    __extends(GetSamplingStatisticSummariesRequestBody, _super);
    function GetSamplingStatisticSummariesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesRequestBody.prototype, "nextToken", void 0);
    return GetSamplingStatisticSummariesRequestBody;
}(SpeakeasyBase));
export { GetSamplingStatisticSummariesRequestBody };
var GetSamplingStatisticSummariesRequest = /** @class */ (function (_super) {
    __extends(GetSamplingStatisticSummariesRequest, _super);
    function GetSamplingStatisticSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSamplingStatisticSummariesQueryParams)
    ], GetSamplingStatisticSummariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSamplingStatisticSummariesHeaders)
    ], GetSamplingStatisticSummariesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetSamplingStatisticSummariesRequestBody)
    ], GetSamplingStatisticSummariesRequest.prototype, "request", void 0);
    return GetSamplingStatisticSummariesRequest;
}(SpeakeasyBase));
export { GetSamplingStatisticSummariesRequest };
var GetSamplingStatisticSummariesResponse = /** @class */ (function (_super) {
    __extends(GetSamplingStatisticSummariesResponse, _super);
    function GetSamplingStatisticSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSamplingStatisticSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetSamplingStatisticSummariesResult)
    ], GetSamplingStatisticSummariesResponse.prototype, "getSamplingStatisticSummariesResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSamplingStatisticSummariesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSamplingStatisticSummariesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSamplingStatisticSummariesResponse.prototype, "throttledException", void 0);
    return GetSamplingStatisticSummariesResponse;
}(SpeakeasyBase));
export { GetSamplingStatisticSummariesResponse };
