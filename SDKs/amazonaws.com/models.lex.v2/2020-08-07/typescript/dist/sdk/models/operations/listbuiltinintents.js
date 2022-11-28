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
var ListBuiltInIntentsPathParams = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsPathParams, _super);
    function ListBuiltInIntentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsPathParams.prototype, "localeId", void 0);
    return ListBuiltInIntentsPathParams;
}(SpeakeasyBase));
export { ListBuiltInIntentsPathParams };
var ListBuiltInIntentsQueryParams = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsQueryParams, _super);
    function ListBuiltInIntentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsQueryParams.prototype, "nextToken", void 0);
    return ListBuiltInIntentsQueryParams;
}(SpeakeasyBase));
export { ListBuiltInIntentsQueryParams };
var ListBuiltInIntentsHeaders = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsHeaders, _super);
    function ListBuiltInIntentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListBuiltInIntentsHeaders;
}(SpeakeasyBase));
export { ListBuiltInIntentsHeaders };
// ListBuiltInIntentsRequestBodySortBy
/**
 * Specifies attributes for sorting a list of built-in intents.
**/
var ListBuiltInIntentsRequestBodySortBy = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsRequestBodySortBy, _super);
    function ListBuiltInIntentsRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsRequestBodySortBy.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsRequestBodySortBy.prototype, "order", void 0);
    return ListBuiltInIntentsRequestBodySortBy;
}(SpeakeasyBase));
export { ListBuiltInIntentsRequestBodySortBy };
var ListBuiltInIntentsRequestBody = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsRequestBody, _super);
    function ListBuiltInIntentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListBuiltInIntentsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListBuiltInIntentsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortBy" }),
        __metadata("design:type", ListBuiltInIntentsRequestBodySortBy)
    ], ListBuiltInIntentsRequestBody.prototype, "sortBy", void 0);
    return ListBuiltInIntentsRequestBody;
}(SpeakeasyBase));
export { ListBuiltInIntentsRequestBody };
var ListBuiltInIntentsRequest = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsRequest, _super);
    function ListBuiltInIntentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuiltInIntentsPathParams)
    ], ListBuiltInIntentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuiltInIntentsQueryParams)
    ], ListBuiltInIntentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuiltInIntentsHeaders)
    ], ListBuiltInIntentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListBuiltInIntentsRequestBody)
    ], ListBuiltInIntentsRequest.prototype, "request", void 0);
    return ListBuiltInIntentsRequest;
}(SpeakeasyBase));
export { ListBuiltInIntentsRequest };
var ListBuiltInIntentsResponse = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsResponse, _super);
    function ListBuiltInIntentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBuiltInIntentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInIntentsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBuiltInIntentsResponse)
    ], ListBuiltInIntentsResponse.prototype, "listBuiltInIntentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInIntentsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBuiltInIntentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInIntentsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInIntentsResponse.prototype, "validationException", void 0);
    return ListBuiltInIntentsResponse;
}(SpeakeasyBase));
export { ListBuiltInIntentsResponse };
