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
var ForumGetTopicsPagedPathParams = /** @class */ (function (_super) {
    __extends(ForumGetTopicsPagedPathParams, _super);
    function ForumGetTopicsPagedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryFilter" }),
        __metadata("design:type", Number)
    ], ForumGetTopicsPagedPathParams.prototype, "categoryFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" }),
        __metadata("design:type", Number)
    ], ForumGetTopicsPagedPathParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" }),
        __metadata("design:type", Number)
    ], ForumGetTopicsPagedPathParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageSize" }),
        __metadata("design:type", Number)
    ], ForumGetTopicsPagedPathParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=quickDate" }),
        __metadata("design:type", Number)
    ], ForumGetTopicsPagedPathParams.prototype, "quickDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sort" }),
        __metadata("design:type", Number)
    ], ForumGetTopicsPagedPathParams.prototype, "sort", void 0);
    return ForumGetTopicsPagedPathParams;
}(SpeakeasyBase));
export { ForumGetTopicsPagedPathParams };
var ForumGetTopicsPagedQueryParams = /** @class */ (function (_super) {
    __extends(ForumGetTopicsPagedQueryParams, _super);
    function ForumGetTopicsPagedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locales" }),
        __metadata("design:type", String)
    ], ForumGetTopicsPagedQueryParams.prototype, "locales", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagstring" }),
        __metadata("design:type", String)
    ], ForumGetTopicsPagedQueryParams.prototype, "tagstring", void 0);
    return ForumGetTopicsPagedQueryParams;
}(SpeakeasyBase));
export { ForumGetTopicsPagedQueryParams };
var ForumGetTopicsPagedRequest = /** @class */ (function (_super) {
    __extends(ForumGetTopicsPagedRequest, _super);
    function ForumGetTopicsPagedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForumGetTopicsPagedPathParams)
    ], ForumGetTopicsPagedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForumGetTopicsPagedQueryParams)
    ], ForumGetTopicsPagedRequest.prototype, "queryParams", void 0);
    return ForumGetTopicsPagedRequest;
}(SpeakeasyBase));
export { ForumGetTopicsPagedRequest };
var ForumGetTopicsPagedResponse = /** @class */ (function (_super) {
    __extends(ForumGetTopicsPagedResponse, _super);
    function ForumGetTopicsPagedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ForumGetTopicsPagedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ForumGetTopicsPagedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ForumGetTopicsPagedResponse.prototype, "statusCode", void 0);
    return ForumGetTopicsPagedResponse;
}(SpeakeasyBase));
export { ForumGetTopicsPagedResponse };
