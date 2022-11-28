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
var RequestNodeCommentsPathParams = /** @class */ (function (_super) {
    __extends(RequestNodeCommentsPathParams, _super);
    function RequestNodeCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", Number)
    ], RequestNodeCommentsPathParams.prototype, "nodeId", void 0);
    return RequestNodeCommentsPathParams;
}(SpeakeasyBase));
export { RequestNodeCommentsPathParams };
var RequestNodeCommentsQueryParams = /** @class */ (function (_super) {
    __extends(RequestNodeCommentsQueryParams, _super);
    function RequestNodeCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hide_deleted" }),
        __metadata("design:type", Boolean)
    ], RequestNodeCommentsQueryParams.prototype, "hideDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestNodeCommentsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestNodeCommentsQueryParams.prototype, "offset", void 0);
    return RequestNodeCommentsQueryParams;
}(SpeakeasyBase));
export { RequestNodeCommentsQueryParams };
var RequestNodeCommentsHeaders = /** @class */ (function (_super) {
    __extends(RequestNodeCommentsHeaders, _super);
    function RequestNodeCommentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestNodeCommentsHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestNodeCommentsHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestNodeCommentsHeaders;
}(SpeakeasyBase));
export { RequestNodeCommentsHeaders };
var RequestNodeCommentsRequest = /** @class */ (function (_super) {
    __extends(RequestNodeCommentsRequest, _super);
    function RequestNodeCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestNodeCommentsPathParams)
    ], RequestNodeCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestNodeCommentsQueryParams)
    ], RequestNodeCommentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestNodeCommentsHeaders)
    ], RequestNodeCommentsRequest.prototype, "headers", void 0);
    return RequestNodeCommentsRequest;
}(SpeakeasyBase));
export { RequestNodeCommentsRequest };
var RequestNodeCommentsResponse = /** @class */ (function (_super) {
    __extends(RequestNodeCommentsResponse, _super);
    function RequestNodeCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentList)
    ], RequestNodeCommentsResponse.prototype, "commentList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestNodeCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestNodeCommentsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestNodeCommentsResponse.prototype, "statusCode", void 0);
    return RequestNodeCommentsResponse;
}(SpeakeasyBase));
export { RequestNodeCommentsResponse };
