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
var ListBuiltInSlotTypesPathParams = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesPathParams, _super);
    function ListBuiltInSlotTypesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesPathParams.prototype, "localeId", void 0);
    return ListBuiltInSlotTypesPathParams;
}(SpeakeasyBase));
export { ListBuiltInSlotTypesPathParams };
var ListBuiltInSlotTypesQueryParams = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesQueryParams, _super);
    function ListBuiltInSlotTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesQueryParams.prototype, "nextToken", void 0);
    return ListBuiltInSlotTypesQueryParams;
}(SpeakeasyBase));
export { ListBuiltInSlotTypesQueryParams };
var ListBuiltInSlotTypesHeaders = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesHeaders, _super);
    function ListBuiltInSlotTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListBuiltInSlotTypesHeaders;
}(SpeakeasyBase));
export { ListBuiltInSlotTypesHeaders };
// ListBuiltInSlotTypesRequestBodySortBy
/**
 * Specifies attributes for sorting a list of built-in slot types.
**/
var ListBuiltInSlotTypesRequestBodySortBy = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesRequestBodySortBy, _super);
    function ListBuiltInSlotTypesRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesRequestBodySortBy.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesRequestBodySortBy.prototype, "order", void 0);
    return ListBuiltInSlotTypesRequestBodySortBy;
}(SpeakeasyBase));
export { ListBuiltInSlotTypesRequestBodySortBy };
var ListBuiltInSlotTypesRequestBody = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesRequestBody, _super);
    function ListBuiltInSlotTypesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListBuiltInSlotTypesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortBy" }),
        __metadata("design:type", ListBuiltInSlotTypesRequestBodySortBy)
    ], ListBuiltInSlotTypesRequestBody.prototype, "sortBy", void 0);
    return ListBuiltInSlotTypesRequestBody;
}(SpeakeasyBase));
export { ListBuiltInSlotTypesRequestBody };
var ListBuiltInSlotTypesRequest = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesRequest, _super);
    function ListBuiltInSlotTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuiltInSlotTypesPathParams)
    ], ListBuiltInSlotTypesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuiltInSlotTypesQueryParams)
    ], ListBuiltInSlotTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuiltInSlotTypesHeaders)
    ], ListBuiltInSlotTypesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListBuiltInSlotTypesRequestBody)
    ], ListBuiltInSlotTypesRequest.prototype, "request", void 0);
    return ListBuiltInSlotTypesRequest;
}(SpeakeasyBase));
export { ListBuiltInSlotTypesRequest };
var ListBuiltInSlotTypesResponse = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesResponse, _super);
    function ListBuiltInSlotTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBuiltInSlotTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInSlotTypesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBuiltInSlotTypesResponse)
    ], ListBuiltInSlotTypesResponse.prototype, "listBuiltInSlotTypesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInSlotTypesResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBuiltInSlotTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInSlotTypesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBuiltInSlotTypesResponse.prototype, "validationException", void 0);
    return ListBuiltInSlotTypesResponse;
}(SpeakeasyBase));
export { ListBuiltInSlotTypesResponse };
