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
var GetInsightSummariesQueryParams = /** @class */ (function (_super) {
    __extends(GetInsightSummariesQueryParams, _super);
    function GetInsightSummariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetInsightSummariesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetInsightSummariesQueryParams.prototype, "nextToken", void 0);
    return GetInsightSummariesQueryParams;
}(SpeakeasyBase));
export { GetInsightSummariesQueryParams };
var GetInsightSummariesHeaders = /** @class */ (function (_super) {
    __extends(GetInsightSummariesHeaders, _super);
    function GetInsightSummariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetInsightSummariesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetInsightSummariesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetInsightSummariesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetInsightSummariesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetInsightSummariesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetInsightSummariesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetInsightSummariesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetInsightSummariesHeaders;
}(SpeakeasyBase));
export { GetInsightSummariesHeaders };
var GetInsightSummariesRequestBody = /** @class */ (function (_super) {
    __extends(GetInsightSummariesRequestBody, _super);
    function GetInsightSummariesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], GetInsightSummariesRequestBody.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupARN" }),
        __metadata("design:type", String)
    ], GetInsightSummariesRequestBody.prototype, "groupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupName" }),
        __metadata("design:type", String)
    ], GetInsightSummariesRequestBody.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetInsightSummariesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetInsightSummariesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], GetInsightSummariesRequestBody.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=States" }),
        __metadata("design:type", Array)
    ], GetInsightSummariesRequestBody.prototype, "states", void 0);
    return GetInsightSummariesRequestBody;
}(SpeakeasyBase));
export { GetInsightSummariesRequestBody };
var GetInsightSummariesRequest = /** @class */ (function (_super) {
    __extends(GetInsightSummariesRequest, _super);
    function GetInsightSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInsightSummariesQueryParams)
    ], GetInsightSummariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInsightSummariesHeaders)
    ], GetInsightSummariesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetInsightSummariesRequestBody)
    ], GetInsightSummariesRequest.prototype, "request", void 0);
    return GetInsightSummariesRequest;
}(SpeakeasyBase));
export { GetInsightSummariesRequest };
var GetInsightSummariesResponse = /** @class */ (function (_super) {
    __extends(GetInsightSummariesResponse, _super);
    function GetInsightSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInsightSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetInsightSummariesResult)
    ], GetInsightSummariesResponse.prototype, "getInsightSummariesResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetInsightSummariesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInsightSummariesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetInsightSummariesResponse.prototype, "throttledException", void 0);
    return GetInsightSummariesResponse;
}(SpeakeasyBase));
export { GetInsightSummariesResponse };
