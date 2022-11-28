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
var ListMetricSetsQueryParams = /** @class */ (function (_super) {
    __extends(ListMetricSetsQueryParams, _super);
    function ListMetricSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListMetricSetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListMetricSetsQueryParams.prototype, "nextToken", void 0);
    return ListMetricSetsQueryParams;
}(SpeakeasyBase));
export { ListMetricSetsQueryParams };
var ListMetricSetsHeaders = /** @class */ (function (_super) {
    __extends(ListMetricSetsHeaders, _super);
    function ListMetricSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListMetricSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListMetricSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListMetricSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListMetricSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListMetricSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListMetricSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListMetricSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListMetricSetsHeaders;
}(SpeakeasyBase));
export { ListMetricSetsHeaders };
var ListMetricSetsRequestBody = /** @class */ (function (_super) {
    __extends(ListMetricSetsRequestBody, _super);
    function ListMetricSetsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], ListMetricSetsRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListMetricSetsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListMetricSetsRequestBody.prototype, "nextToken", void 0);
    return ListMetricSetsRequestBody;
}(SpeakeasyBase));
export { ListMetricSetsRequestBody };
var ListMetricSetsRequest = /** @class */ (function (_super) {
    __extends(ListMetricSetsRequest, _super);
    function ListMetricSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMetricSetsQueryParams)
    ], ListMetricSetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMetricSetsHeaders)
    ], ListMetricSetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListMetricSetsRequestBody)
    ], ListMetricSetsRequest.prototype, "request", void 0);
    return ListMetricSetsRequest;
}(SpeakeasyBase));
export { ListMetricSetsRequest };
var ListMetricSetsResponse = /** @class */ (function (_super) {
    __extends(ListMetricSetsResponse, _super);
    function ListMetricSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMetricSetsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMetricSetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMetricSetsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMetricSetsResponse)
    ], ListMetricSetsResponse.prototype, "listMetricSetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMetricSetsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMetricSetsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMetricSetsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListMetricSetsResponse.prototype, "validationException", void 0);
    return ListMetricSetsResponse;
}(SpeakeasyBase));
export { ListMetricSetsResponse };
