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
var ListSlotTypesPathParams = /** @class */ (function (_super) {
    __extends(ListSlotTypesPathParams, _super);
    function ListSlotTypesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], ListSlotTypesPathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], ListSlotTypesPathParams.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], ListSlotTypesPathParams.prototype, "localeId", void 0);
    return ListSlotTypesPathParams;
}(SpeakeasyBase));
export { ListSlotTypesPathParams };
var ListSlotTypesQueryParams = /** @class */ (function (_super) {
    __extends(ListSlotTypesQueryParams, _super);
    function ListSlotTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListSlotTypesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListSlotTypesQueryParams.prototype, "nextToken", void 0);
    return ListSlotTypesQueryParams;
}(SpeakeasyBase));
export { ListSlotTypesQueryParams };
var ListSlotTypesHeaders = /** @class */ (function (_super) {
    __extends(ListSlotTypesHeaders, _super);
    function ListSlotTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSlotTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSlotTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSlotTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSlotTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSlotTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSlotTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSlotTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSlotTypesHeaders;
}(SpeakeasyBase));
export { ListSlotTypesHeaders };
// ListSlotTypesRequestBodySortBy
/**
 * Specifies attributes for sorting a list of slot types.
**/
var ListSlotTypesRequestBodySortBy = /** @class */ (function (_super) {
    __extends(ListSlotTypesRequestBodySortBy, _super);
    function ListSlotTypesRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], ListSlotTypesRequestBodySortBy.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], ListSlotTypesRequestBodySortBy.prototype, "order", void 0);
    return ListSlotTypesRequestBodySortBy;
}(SpeakeasyBase));
export { ListSlotTypesRequestBodySortBy };
var ListSlotTypesRequestBody = /** @class */ (function (_super) {
    __extends(ListSlotTypesRequestBody, _super);
    function ListSlotTypesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.SlotTypeFilter }),
        __metadata("design:type", Array)
    ], ListSlotTypesRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListSlotTypesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListSlotTypesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortBy" }),
        __metadata("design:type", ListSlotTypesRequestBodySortBy)
    ], ListSlotTypesRequestBody.prototype, "sortBy", void 0);
    return ListSlotTypesRequestBody;
}(SpeakeasyBase));
export { ListSlotTypesRequestBody };
var ListSlotTypesRequest = /** @class */ (function (_super) {
    __extends(ListSlotTypesRequest, _super);
    function ListSlotTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSlotTypesPathParams)
    ], ListSlotTypesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSlotTypesQueryParams)
    ], ListSlotTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSlotTypesHeaders)
    ], ListSlotTypesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListSlotTypesRequestBody)
    ], ListSlotTypesRequest.prototype, "request", void 0);
    return ListSlotTypesRequest;
}(SpeakeasyBase));
export { ListSlotTypesRequest };
var ListSlotTypesResponse = /** @class */ (function (_super) {
    __extends(ListSlotTypesResponse, _super);
    function ListSlotTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSlotTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListSlotTypesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSlotTypesResponse)
    ], ListSlotTypesResponse.prototype, "listSlotTypesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListSlotTypesResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSlotTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListSlotTypesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListSlotTypesResponse.prototype, "validationException", void 0);
    return ListSlotTypesResponse;
}(SpeakeasyBase));
export { ListSlotTypesResponse };
