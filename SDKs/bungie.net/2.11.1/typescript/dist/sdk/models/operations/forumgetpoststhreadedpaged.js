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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var ForumGetPostsThreadedPagedPathParams = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedPathParams, _super);
    function ForumGetPostsThreadedPagedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=getParentPost" }),
        __metadata("design:type", Boolean)
    ], ForumGetPostsThreadedPagedPathParams.prototype, "getParentPost", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=page" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedPathParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pageSize" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedPathParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parentPostId" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedPathParams.prototype, "parentPostId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=replySize" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedPathParams.prototype, "replySize", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=rootThreadMode" }),
        __metadata("design:type", Boolean)
    ], ForumGetPostsThreadedPagedPathParams.prototype, "rootThreadMode", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sortMode" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedPathParams.prototype, "sortMode", void 0);
    return ForumGetPostsThreadedPagedPathParams;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedPathParams };
var ForumGetPostsThreadedPagedQueryParams = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedQueryParams, _super);
    function ForumGetPostsThreadedPagedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=showbanned" }),
        __metadata("design:type", String)
    ], ForumGetPostsThreadedPagedQueryParams.prototype, "showbanned", void 0);
    return ForumGetPostsThreadedPagedQueryParams;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedQueryParams };
var ForumGetPostsThreadedPagedRequest = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedRequest, _super);
    function ForumGetPostsThreadedPagedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetPostsThreadedPagedPathParams)
    ], ForumGetPostsThreadedPagedRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetPostsThreadedPagedQueryParams)
    ], ForumGetPostsThreadedPagedRequest.prototype, "queryParams", void 0);
    return ForumGetPostsThreadedPagedRequest;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedRequest };
var ForumGetPostsThreadedPagedResponse = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedResponse, _super);
    function ForumGetPostsThreadedPagedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ForumGetPostsThreadedPagedResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ForumGetPostsThreadedPagedResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedResponse.prototype, "statusCode", void 0);
    return ForumGetPostsThreadedPagedResponse;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedResponse };
