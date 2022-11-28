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
var ListBotLocalesPathParams = /** @class */ (function (_super) {
    __extends(ListBotLocalesPathParams, _super);
    function ListBotLocalesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], ListBotLocalesPathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], ListBotLocalesPathParams.prototype, "botVersion", void 0);
    return ListBotLocalesPathParams;
}(SpeakeasyBase));
export { ListBotLocalesPathParams };
var ListBotLocalesQueryParams = /** @class */ (function (_super) {
    __extends(ListBotLocalesQueryParams, _super);
    function ListBotLocalesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListBotLocalesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListBotLocalesQueryParams.prototype, "nextToken", void 0);
    return ListBotLocalesQueryParams;
}(SpeakeasyBase));
export { ListBotLocalesQueryParams };
var ListBotLocalesHeaders = /** @class */ (function (_super) {
    __extends(ListBotLocalesHeaders, _super);
    function ListBotLocalesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBotLocalesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBotLocalesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBotLocalesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBotLocalesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBotLocalesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBotLocalesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBotLocalesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListBotLocalesHeaders;
}(SpeakeasyBase));
export { ListBotLocalesHeaders };
// ListBotLocalesRequestBodySortBy
/**
 * Specifies attributes for sorting a list of bot locales.
**/
var ListBotLocalesRequestBodySortBy = /** @class */ (function (_super) {
    __extends(ListBotLocalesRequestBodySortBy, _super);
    function ListBotLocalesRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], ListBotLocalesRequestBodySortBy.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], ListBotLocalesRequestBodySortBy.prototype, "order", void 0);
    return ListBotLocalesRequestBodySortBy;
}(SpeakeasyBase));
export { ListBotLocalesRequestBodySortBy };
var ListBotLocalesRequestBody = /** @class */ (function (_super) {
    __extends(ListBotLocalesRequestBody, _super);
    function ListBotLocalesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.BotLocaleFilter }),
        __metadata("design:type", Array)
    ], ListBotLocalesRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListBotLocalesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListBotLocalesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortBy" }),
        __metadata("design:type", ListBotLocalesRequestBodySortBy)
    ], ListBotLocalesRequestBody.prototype, "sortBy", void 0);
    return ListBotLocalesRequestBody;
}(SpeakeasyBase));
export { ListBotLocalesRequestBody };
var ListBotLocalesRequest = /** @class */ (function (_super) {
    __extends(ListBotLocalesRequest, _super);
    function ListBotLocalesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBotLocalesPathParams)
    ], ListBotLocalesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBotLocalesQueryParams)
    ], ListBotLocalesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBotLocalesHeaders)
    ], ListBotLocalesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListBotLocalesRequestBody)
    ], ListBotLocalesRequest.prototype, "request", void 0);
    return ListBotLocalesRequest;
}(SpeakeasyBase));
export { ListBotLocalesRequest };
var ListBotLocalesResponse = /** @class */ (function (_super) {
    __extends(ListBotLocalesResponse, _super);
    function ListBotLocalesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBotLocalesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBotLocalesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBotLocalesResponse)
    ], ListBotLocalesResponse.prototype, "listBotLocalesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBotLocalesResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBotLocalesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBotLocalesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBotLocalesResponse.prototype, "validationException", void 0);
    return ListBotLocalesResponse;
}(SpeakeasyBase));
export { ListBotLocalesResponse };
