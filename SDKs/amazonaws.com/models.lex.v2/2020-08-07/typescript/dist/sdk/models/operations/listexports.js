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
var ListExportsQueryParams = /** @class */ (function (_super) {
    __extends(ListExportsQueryParams, _super);
    function ListExportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListExportsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListExportsQueryParams.prototype, "nextToken", void 0);
    return ListExportsQueryParams;
}(SpeakeasyBase));
export { ListExportsQueryParams };
var ListExportsHeaders = /** @class */ (function (_super) {
    __extends(ListExportsHeaders, _super);
    function ListExportsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListExportsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListExportsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListExportsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListExportsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListExportsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListExportsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListExportsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListExportsHeaders;
}(SpeakeasyBase));
export { ListExportsHeaders };
// ListExportsRequestBodySortBy
/**
 * Provides information about sorting a list of exports.
**/
var ListExportsRequestBodySortBy = /** @class */ (function (_super) {
    __extends(ListExportsRequestBodySortBy, _super);
    function ListExportsRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], ListExportsRequestBodySortBy.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], ListExportsRequestBodySortBy.prototype, "order", void 0);
    return ListExportsRequestBodySortBy;
}(SpeakeasyBase));
export { ListExportsRequestBodySortBy };
var ListExportsRequestBody = /** @class */ (function (_super) {
    __extends(ListExportsRequestBody, _super);
    function ListExportsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botId" }),
        __metadata("design:type", String)
    ], ListExportsRequestBody.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], ListExportsRequestBody.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.ExportFilter }),
        __metadata("design:type", Array)
    ], ListExportsRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListExportsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListExportsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortBy" }),
        __metadata("design:type", ListExportsRequestBodySortBy)
    ], ListExportsRequestBody.prototype, "sortBy", void 0);
    return ListExportsRequestBody;
}(SpeakeasyBase));
export { ListExportsRequestBody };
var ListExportsRequest = /** @class */ (function (_super) {
    __extends(ListExportsRequest, _super);
    function ListExportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListExportsQueryParams)
    ], ListExportsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListExportsHeaders)
    ], ListExportsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListExportsRequestBody)
    ], ListExportsRequest.prototype, "request", void 0);
    return ListExportsRequest;
}(SpeakeasyBase));
export { ListExportsRequest };
var ListExportsResponse = /** @class */ (function (_super) {
    __extends(ListExportsResponse, _super);
    function ListExportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListExportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListExportsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListExportsResponse)
    ], ListExportsResponse.prototype, "listExportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListExportsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListExportsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListExportsResponse.prototype, "validationException", void 0);
    return ListExportsResponse;
}(SpeakeasyBase));
export { ListExportsResponse };
