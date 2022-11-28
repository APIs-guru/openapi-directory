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
var RequestDeletedNodesSummaryPathParams = /** @class */ (function (_super) {
    __extends(RequestDeletedNodesSummaryPathParams, _super);
    function RequestDeletedNodesSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", Number)
    ], RequestDeletedNodesSummaryPathParams.prototype, "nodeId", void 0);
    return RequestDeletedNodesSummaryPathParams;
}(SpeakeasyBase));
export { RequestDeletedNodesSummaryPathParams };
var RequestDeletedNodesSummaryQueryParams = /** @class */ (function (_super) {
    __extends(RequestDeletedNodesSummaryQueryParams, _super);
    function RequestDeletedNodesSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestDeletedNodesSummaryQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestDeletedNodesSummaryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestDeletedNodesSummaryQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestDeletedNodesSummaryQueryParams.prototype, "sort", void 0);
    return RequestDeletedNodesSummaryQueryParams;
}(SpeakeasyBase));
export { RequestDeletedNodesSummaryQueryParams };
var RequestDeletedNodesSummaryHeaders = /** @class */ (function (_super) {
    __extends(RequestDeletedNodesSummaryHeaders, _super);
    function RequestDeletedNodesSummaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestDeletedNodesSummaryHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestDeletedNodesSummaryHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestDeletedNodesSummaryHeaders;
}(SpeakeasyBase));
export { RequestDeletedNodesSummaryHeaders };
var RequestDeletedNodesSummaryRequest = /** @class */ (function (_super) {
    __extends(RequestDeletedNodesSummaryRequest, _super);
    function RequestDeletedNodesSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestDeletedNodesSummaryPathParams)
    ], RequestDeletedNodesSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestDeletedNodesSummaryQueryParams)
    ], RequestDeletedNodesSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestDeletedNodesSummaryHeaders)
    ], RequestDeletedNodesSummaryRequest.prototype, "headers", void 0);
    return RequestDeletedNodesSummaryRequest;
}(SpeakeasyBase));
export { RequestDeletedNodesSummaryRequest };
var RequestDeletedNodesSummaryResponse = /** @class */ (function (_super) {
    __extends(RequestDeletedNodesSummaryResponse, _super);
    function RequestDeletedNodesSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestDeletedNodesSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeletedNodeSummaryList)
    ], RequestDeletedNodesSummaryResponse.prototype, "deletedNodeSummaryList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestDeletedNodesSummaryResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestDeletedNodesSummaryResponse.prototype, "statusCode", void 0);
    return RequestDeletedNodesSummaryResponse;
}(SpeakeasyBase));
export { RequestDeletedNodesSummaryResponse };
