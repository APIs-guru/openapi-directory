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
var ForumGetPostsThreadedPagedFromChildPathParams = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedFromChildPathParams, _super);
    function ForumGetPostsThreadedPagedFromChildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=childPostId" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedFromChildPathParams.prototype, "childPostId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=page" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedFromChildPathParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pageSize" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedFromChildPathParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=replySize" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedFromChildPathParams.prototype, "replySize", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=rootThreadMode" }),
        __metadata("design:type", Boolean)
    ], ForumGetPostsThreadedPagedFromChildPathParams.prototype, "rootThreadMode", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sortMode" }),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedFromChildPathParams.prototype, "sortMode", void 0);
    return ForumGetPostsThreadedPagedFromChildPathParams;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedFromChildPathParams };
var ForumGetPostsThreadedPagedFromChildQueryParams = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedFromChildQueryParams, _super);
    function ForumGetPostsThreadedPagedFromChildQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=showbanned" }),
        __metadata("design:type", String)
    ], ForumGetPostsThreadedPagedFromChildQueryParams.prototype, "showbanned", void 0);
    return ForumGetPostsThreadedPagedFromChildQueryParams;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedFromChildQueryParams };
var ForumGetPostsThreadedPagedFromChildRequest = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedFromChildRequest, _super);
    function ForumGetPostsThreadedPagedFromChildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetPostsThreadedPagedFromChildPathParams)
    ], ForumGetPostsThreadedPagedFromChildRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetPostsThreadedPagedFromChildQueryParams)
    ], ForumGetPostsThreadedPagedFromChildRequest.prototype, "queryParams", void 0);
    return ForumGetPostsThreadedPagedFromChildRequest;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedFromChildRequest };
var ForumGetPostsThreadedPagedFromChildResponse = /** @class */ (function (_super) {
    __extends(ForumGetPostsThreadedPagedFromChildResponse, _super);
    function ForumGetPostsThreadedPagedFromChildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ForumGetPostsThreadedPagedFromChildResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ForumGetPostsThreadedPagedFromChildResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ForumGetPostsThreadedPagedFromChildResponse.prototype, "statusCode", void 0);
    return ForumGetPostsThreadedPagedFromChildResponse;
}(SpeakeasyBase));
export { ForumGetPostsThreadedPagedFromChildResponse };
