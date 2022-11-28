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
var ListAnomalyGroupSummariesQueryParams = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupSummariesQueryParams, _super);
    function ListAnomalyGroupSummariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesQueryParams.prototype, "nextToken", void 0);
    return ListAnomalyGroupSummariesQueryParams;
}(SpeakeasyBase));
export { ListAnomalyGroupSummariesQueryParams };
var ListAnomalyGroupSummariesHeaders = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupSummariesHeaders, _super);
    function ListAnomalyGroupSummariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAnomalyGroupSummariesHeaders;
}(SpeakeasyBase));
export { ListAnomalyGroupSummariesHeaders };
var ListAnomalyGroupSummariesRequestBody = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupSummariesRequestBody, _super);
    function ListAnomalyGroupSummariesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListAnomalyGroupSummariesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SensitivityThreshold" }),
        __metadata("design:type", Number)
    ], ListAnomalyGroupSummariesRequestBody.prototype, "sensitivityThreshold", void 0);
    return ListAnomalyGroupSummariesRequestBody;
}(SpeakeasyBase));
export { ListAnomalyGroupSummariesRequestBody };
var ListAnomalyGroupSummariesRequest = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupSummariesRequest, _super);
    function ListAnomalyGroupSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAnomalyGroupSummariesQueryParams)
    ], ListAnomalyGroupSummariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAnomalyGroupSummariesHeaders)
    ], ListAnomalyGroupSummariesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAnomalyGroupSummariesRequestBody)
    ], ListAnomalyGroupSummariesRequest.prototype, "request", void 0);
    return ListAnomalyGroupSummariesRequest;
}(SpeakeasyBase));
export { ListAnomalyGroupSummariesRequest };
var ListAnomalyGroupSummariesResponse = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupSummariesResponse, _super);
    function ListAnomalyGroupSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupSummariesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAnomalyGroupSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupSummariesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAnomalyGroupSummariesResponse)
    ], ListAnomalyGroupSummariesResponse.prototype, "listAnomalyGroupSummariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupSummariesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAnomalyGroupSummariesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupSummariesResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupSummariesResponse.prototype, "validationException", void 0);
    return ListAnomalyGroupSummariesResponse;
}(SpeakeasyBase));
export { ListAnomalyGroupSummariesResponse };
