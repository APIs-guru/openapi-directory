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
var ListVideosQueryParams = /** @class */ (function (_super) {
    __extends(ListVideosQueryParams, _super);
    function ListVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], ListVideosQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], ListVideosQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], ListVideosQueryParams.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadata" }),
        __metadata("design:type", Array)
    ], ListVideosQueryParams.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ListVideosQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], ListVideosQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], ListVideosQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ListVideosQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" }),
        __metadata("design:type", String)
    ], ListVideosQueryParams.prototype, "title", void 0);
    return ListVideosQueryParams;
}(SpeakeasyBase));
export { ListVideosQueryParams };
var ListVideosSecurity = /** @class */ (function (_super) {
    __extends(ListVideosSecurity, _super);
    function ListVideosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ListVideosSecurity.prototype, "bearerAuth", void 0);
    return ListVideosSecurity;
}(SpeakeasyBase));
export { ListVideosSecurity };
var ListVideosRequest = /** @class */ (function (_super) {
    __extends(ListVideosRequest, _super);
    function ListVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVideosQueryParams)
    ], ListVideosRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVideosSecurity)
    ], ListVideosRequest.prototype, "security", void 0);
    return ListVideosRequest;
}(SpeakeasyBase));
export { ListVideosRequest };
var ListVideosResponse = /** @class */ (function (_super) {
    __extends(ListVideosResponse, _super);
    function ListVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequest)
    ], ListVideosResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideosListResponse)
    ], ListVideosResponse.prototype, "videosListResponse", void 0);
    return ListVideosResponse;
}(SpeakeasyBase));
export { ListVideosResponse };
