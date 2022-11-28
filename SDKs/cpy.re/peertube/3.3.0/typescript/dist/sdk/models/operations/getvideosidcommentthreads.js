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
var GetVideosIdCommentThreadsPathParams = /** @class */ (function (_super) {
    __extends(GetVideosIdCommentThreadsPathParams, _super);
    function GetVideosIdCommentThreadsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Object)
    ], GetVideosIdCommentThreadsPathParams.prototype, "id", void 0);
    return GetVideosIdCommentThreadsPathParams;
}(SpeakeasyBase));
export { GetVideosIdCommentThreadsPathParams };
var GetVideosIdCommentThreadsQueryParams = /** @class */ (function (_super) {
    __extends(GetVideosIdCommentThreadsQueryParams, _super);
    function GetVideosIdCommentThreadsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetVideosIdCommentThreadsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideosIdCommentThreadsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetVideosIdCommentThreadsQueryParams.prototype, "start", void 0);
    return GetVideosIdCommentThreadsQueryParams;
}(SpeakeasyBase));
export { GetVideosIdCommentThreadsQueryParams };
var GetVideosIdCommentThreadsRequest = /** @class */ (function (_super) {
    __extends(GetVideosIdCommentThreadsRequest, _super);
    function GetVideosIdCommentThreadsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosIdCommentThreadsPathParams)
    ], GetVideosIdCommentThreadsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosIdCommentThreadsQueryParams)
    ], GetVideosIdCommentThreadsRequest.prototype, "queryParams", void 0);
    return GetVideosIdCommentThreadsRequest;
}(SpeakeasyBase));
export { GetVideosIdCommentThreadsRequest };
var GetVideosIdCommentThreadsResponse = /** @class */ (function (_super) {
    __extends(GetVideosIdCommentThreadsResponse, _super);
    function GetVideosIdCommentThreadsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetVideosIdCommentThreadsResponse.prototype, "commentThreadResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosIdCommentThreadsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosIdCommentThreadsResponse.prototype, "statusCode", void 0);
    return GetVideosIdCommentThreadsResponse;
}(SpeakeasyBase));
export { GetVideosIdCommentThreadsResponse };
