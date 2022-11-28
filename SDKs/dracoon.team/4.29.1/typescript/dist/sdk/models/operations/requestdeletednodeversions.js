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
var RequestDeletedNodeVersionsPathParams = /** @class */ (function (_super) {
    __extends(RequestDeletedNodeVersionsPathParams, _super);
    function RequestDeletedNodeVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", Number)
    ], RequestDeletedNodeVersionsPathParams.prototype, "nodeId", void 0);
    return RequestDeletedNodeVersionsPathParams;
}(SpeakeasyBase));
export { RequestDeletedNodeVersionsPathParams };
var RequestDeletedNodeVersionsQueryParams = /** @class */ (function (_super) {
    __extends(RequestDeletedNodeVersionsQueryParams, _super);
    function RequestDeletedNodeVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestDeletedNodeVersionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], RequestDeletedNodeVersionsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestDeletedNodeVersionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestDeletedNodeVersionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], RequestDeletedNodeVersionsQueryParams.prototype, "type", void 0);
    return RequestDeletedNodeVersionsQueryParams;
}(SpeakeasyBase));
export { RequestDeletedNodeVersionsQueryParams };
var RequestDeletedNodeVersionsHeaders = /** @class */ (function (_super) {
    __extends(RequestDeletedNodeVersionsHeaders, _super);
    function RequestDeletedNodeVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestDeletedNodeVersionsHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestDeletedNodeVersionsHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestDeletedNodeVersionsHeaders;
}(SpeakeasyBase));
export { RequestDeletedNodeVersionsHeaders };
var RequestDeletedNodeVersionsRequest = /** @class */ (function (_super) {
    __extends(RequestDeletedNodeVersionsRequest, _super);
    function RequestDeletedNodeVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestDeletedNodeVersionsPathParams)
    ], RequestDeletedNodeVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestDeletedNodeVersionsQueryParams)
    ], RequestDeletedNodeVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestDeletedNodeVersionsHeaders)
    ], RequestDeletedNodeVersionsRequest.prototype, "headers", void 0);
    return RequestDeletedNodeVersionsRequest;
}(SpeakeasyBase));
export { RequestDeletedNodeVersionsRequest };
var RequestDeletedNodeVersionsResponse = /** @class */ (function (_super) {
    __extends(RequestDeletedNodeVersionsResponse, _super);
    function RequestDeletedNodeVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestDeletedNodeVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeletedNodeVersionsList)
    ], RequestDeletedNodeVersionsResponse.prototype, "deletedNodeVersionsList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestDeletedNodeVersionsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestDeletedNodeVersionsResponse.prototype, "statusCode", void 0);
    return RequestDeletedNodeVersionsResponse;
}(SpeakeasyBase));
export { RequestDeletedNodeVersionsResponse };
